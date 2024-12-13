import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import { Arrow } from 'app/components/Arrow';

interface ArrowProps {
  direction: string;
}

interface Props {
  images: string[];
}

export const Banner: React.FC<Props> = ({ images }) => {
  const [currenIndex, setCurrentIndex] = useState(0);

  const onNext = () => {
    if (currenIndex === images.length - 1) {
      setCurrentIndex(0);
    }

    if (currenIndex < images.length - 1) {
      setCurrentIndex(index => index + 1);
    }
  };

  const onPrev = () => {
    if (currenIndex > 0) {
      setCurrentIndex(index => index - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(onNext, 3000);
    return () => clearInterval(interval);
  }, [currenIndex]);

  return (
    <Wrapper>
      <BannerImgContainer>
        <ArrowWrapper direction="left" onClick={onPrev}>
          <Arrow direction="left" />
        </ArrowWrapper>
        <ImgListContainer
          currentIndex={currenIndex}
          totalImages={images.length}
        >
          {images.length > 0 &&
            images.map((e, index) => <Img key={index} src={e} />)}
        </ImgListContainer>
        <ArrowWrapper direction="right" onClick={onNext}>
          <Arrow direction="right" />
        </ArrowWrapper>
      </BannerImgContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 200px;
  position: relative;
`;

const BannerImgContainer = styled.div`
  overflow: hidden;
`;

const ImgListContainer = styled.div<{
  currentIndex: number;
  totalImages: number;
}>`
  display: flex;
  align-items: center;
  transition: transform 0.5s ease-in-out;
  gap: 10px;

  ${({ currentIndex, totalImages }) => {
    const visibleImages = 2;
    const maxIndex = totalImages - visibleImages;
    const adjustedIndex = currentIndex > maxIndex ? maxIndex : currentIndex;
    return `transform: translateX(calc(-${adjustedIndex * 50}% - ${
      adjustedIndex * 10
    }px));`;
  }}
`;

const Img = styled.img`
  width: 50%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  flex-shrink: 0;
`;

const ArrowWrapper = styled.div<ArrowProps>`
  position: absolute;

  ${({ direction }) => {
    if (direction === 'left') {
      return ` 
          left: -37px;
          top: 40%;`;
    }
    return `
          right: -37px;
          top: 40%;
    `;
  }}
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  transition: background-color, 0.3s;
  cursor: pointer;
  z-index: 1;

  &:hover {
    background-color: #2a83e9;
  }
`;
