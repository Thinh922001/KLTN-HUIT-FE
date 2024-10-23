import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import { Icon } from '../../assets/Icon';

interface CommentInputProps {}

const CommentInput: React.FC<CommentInputProps> = () => {
  const [comment, setComment] = useState<string>('');
  const [images, setImages] = useState<string[]>([]);
  const commentRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (commentRef.current) {
      commentRef.current.textContent = comment;
    }
  }, [comment]);

  const handlePaste = (event: React.ClipboardEvent<HTMLDivElement>) => {
    const clipboardData = event.clipboardData;
    const items = clipboardData.items;
    let hasImage = false;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf('image') !== -1) {
        hasImage = true;
        const file = items[i].getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = function () {
            if (reader.result) {
              setImages(prevImages => [...prevImages, reader.result as string]);
            }
          };
          reader.readAsDataURL(file);
        }
      }
    }

    if (!hasImage) {
      return;
    }

    event.preventDefault();
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.indexOf('image') !== -1) {
          const reader = new FileReader();
          reader.onload = function () {
            if (reader.result) {
              setImages(prevImages => [...prevImages, reader.result as string]);
            }
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const handleRemoveImage = (index: number) => {
    setImages(prevImages => prevImages.filter((_, i) => i !== index));
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleInput = (event: React.FormEvent<HTMLDivElement>) => {
    setComment(event.currentTarget.textContent || '');
  };

  return (
    <CommentWrapper>
      <InputAreaWrapper>
        <InputArea
          ref={commentRef}
          contentEditable
          suppressContentEditableWarning={true}
          onInput={handleInput}
          onPaste={handlePaste}
          isPlaceholderVisible={comment === ''}
          data-placeholder="Viết bình luận của bạn và dán hình ảnh vào đây..."
        />
        <UploadText onClick={triggerFileInput}>
          <Icon
            position="-144px -124px"
            width="20px"
            height="17px"
            style={{ marginRight: '5px', transform: 'translateY(-1.5px)' }}
          />
          Gửi ảnh thực tế
        </UploadText>
        <FileInput
          type="file"
          accept="image/*"
          ref={fileInputRef}
          onChange={handleFileChange}
          multiple
        />
        {images.length > 0 && (
          <ImagePreview>
            {images.map((image, index) => (
              <ImageWrapper key={index}>
                <img src={image} alt={`preview-${index}`} />
                <RemoveButton onClick={() => handleRemoveImage(index)}>
                  X
                </RemoveButton>
              </ImageWrapper>
            ))}
          </ImagePreview>
        )}
      </InputAreaWrapper>
    </CommentWrapper>
  );
};

const CommentWrapper = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  border-radius: 8px;
  padding: 10px;
`;

const InputAreaWrapper = styled.div`
  position: relative;
  background-color: #f9f9f9;
  border-radius: 4px;
  padding: 20px 10px 10px 10px;
`;

const InputArea = styled.div<{ isPlaceholderVisible: boolean }>`
  width: 100%;
  min-height: 50px;
  border: none;
  outline: none;
  background-color: inherit;
  font-size: 16px;
  cursor: text;
  white-space: pre-wrap;
  word-wrap: break-word;
  padding-right: 100px;

  &:empty:before {
    content: attr(data-placeholder);
    color: #aaa;
  }

  &[data-placeholder] {
    content: '${props =>
      props.isPlaceholderVisible
        ? 'Viết bình luận của bạn và dán hình ảnh vào đây...'
        : ''}';
  }
`;

const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  background-color: inherit;
  padding: 10px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  position: relative;
  display: inline-block;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const RemoveButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const UploadText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  bottom: 0px;
  color: #007bff;
  cursor: pointer;
`;

export default CommentInput;
