import styled from 'styled-components';
import { Icon } from '../../DetaiItem/Features/assets/Icon';
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectImgReturnOrder } from '../slice/selector';
import { OrderDetailActions } from '../slice';

export const ReturnOrderImg = () => {
  const dispatch = useDispatch();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSetImg = (img: string) => {
    dispatch(OrderDetailActions.overWriteImgReturnOrder(img));
  };

  const handleRemoveImage = (index: number) => {
    setImg(img.filter((_, i) => i !== index));
  };

  const setImg = (img: string[]) => {
    dispatch(OrderDetailActions.setImgReturnOrder(img));
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;

    if (files) {
      const newImages: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (file.type.indexOf('image') !== -1) {
          if (img.length + newImages.length < 8) {
            newImages.push(URL.createObjectURL(file));
          } else {
            break;
          }
        }
      }

      setImg([...img, ...newImages]);
    }
  };

  const img = useSelector(selectImgReturnOrder);
  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  return (
    <Warpper>
      <UploadText onClick={triggerFileInput}>
        <Icon
          position="-144px -124px"
          width="20px"
          height="17px"
          style={{ marginRight: '5px', transform: 'translateY(-1.5px)' }}
        />
        Gửi ảnh
      </UploadText>
      <FileInput
        type="file"
        accept="image/*"
        ref={fileInputRef}
        multiple
        onChange={handleFileChange}
      />
      {img.length > 0 && (
        <ImagePreview>
          {img.map((image, index) => (
            <ImageWrapper key={index}>
              <img src={image} alt={`preview-${index}`} />
              <RemoveButton onClick={() => handleRemoveImage(index)}>
                X
              </RemoveButton>
            </ImageWrapper>
          ))}
        </ImagePreview>
      )}
    </Warpper>
  );
};

const Warpper = styled.div`
  width: 100%;
  max-height: 200px;
  min-height: 161.6px;
  position: relative;
  padding: 20px;
  border-radius: 8px;
  overflow: auto;
  background-color: #f5f5f5;
  border: 1px solid #ddd;
`;

const UploadText = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 10px;
  bottom: 2px;
  color: #007bff;
  cursor: pointer;
`;

const FileInput = styled.input`
  display: none;
`;

const ImagePreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  max-height: 200px;
  overflow-y: auto;
  padding: 10px;
  border-radius: 4px;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100px;
  height: 100px;

  img {
    width: 100%;
    height: 100%;
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
