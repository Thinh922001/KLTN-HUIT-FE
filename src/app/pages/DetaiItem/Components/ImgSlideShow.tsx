import styled from 'styled-components';
import Img1 from './assets/1.jpg';
import Img2 from './assets/2.jpg';
import Img3 from './assets/3.jpg';
import { Arrow } from 'app/components/Arrow';
import { useEffect, useRef, useState } from 'react';
import { useProductDetailSlice } from '../slice';
import { useSelector } from 'react-redux';
import { selectSubImg, selectVariantChosen } from '../slice/selector';

interface ArrowProps {
  direction: string;
}

interface SlideShowProps {
  currenIndex: number;
  prevIndex?: React.RefObject<number>;
  prevDistance?: React.RefObject<number>;
  totalImg?: number;
}

interface SubImgProps {
  isActive: boolean;
}

export const ImgSlideShow = () => {
  useProductDetailSlice();
  const Img = useSelector(selectSubImg);
  const [currenIndex, setCurrentIndex] = useState(0);

  const prevCurrenIndexRef = useRef<number>(0);

  const prevDistance = useRef<number>(0);

  const variantChosen = useSelector(selectVariantChosen);

  useEffect(() => {
    prevCurrenIndexRef.current = currenIndex;
    prevDistance.current = currenIndex * 50;
  }, [currenIndex]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [variantChosen]);

  const onNext = () => {
    if (currenIndex === Img.length - 1) {
      setCurrentIndex(0);
    }

    if (currenIndex < Img.length - 1) {
      setCurrentIndex(index => index + 1);
    }
  };

  const handleSetCurrentIndex = num => {
    setCurrentIndex(num);
  };

  const onPrev = () => {
    if (currenIndex > 0) {
      setCurrentIndex(currenIndex - 1);
    }
  };
  return (
    <Wrapper>
      <Content>
        <ContentInner>
          <ArrowWrapper direction="left" onClick={onPrev}>
            <Arrow direction="left" />
          </ArrowWrapper>
          <LargeImgContainer>
            <LargeImgList currenIndex={currenIndex}>
              {Img.length &&
                Img.map((e, index) => <LargeImg key={index} src={e} />)}
            </LargeImgList>
          </LargeImgContainer>
          <ArrowWrapper direction="right" onClick={onNext}>
            <Arrow direction="right" />
          </ArrowWrapper>
          {Img.length && (
            <CountImg>
              {currenIndex + 1}/{Img.length}
            </CountImg>
          )}
        </ContentInner>
        <MiniImgContainer>
          <MiniImgList
            totalImg={Img.length}
            currenIndex={currenIndex}
            prevIndex={prevCurrenIndexRef}
            prevDistance={prevDistance}
          >
            {Img.length &&
              Img.map((e, index) => (
                <MiniImgItem
                  key={index}
                  isActive={index === currenIndex}
                  onClick={() => handleSetCurrentIndex(index)}
                >
                  <ImgMiniItem src={e} />
                </MiniImgItem>
              ))}
          </MiniImgList>
        </MiniImgContainer>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  border-radius: 12px;
`;

const Content = styled.div`
  width: 100%;
  padding: 15px;
`;

const LargeImgContainer = styled.div`
  overflow: hidden;
`;

const LargeImgList = styled.div<SlideShowProps>`
  display: flex;
  ${({ currenIndex }) =>
    currenIndex > 0 && `transform: translateX(-${currenIndex * 100}%);`}

  transition: transform 0.3s ease-in-out;
`;

const ContentInner = styled.div`
  position: relative;
`;

const LargeImg = styled.img`
  width: 100%;
  object-fit: cover;
  max-height: 538px;
  flex-shrink: 0;
`;

const MiniImgContainer = styled.div`
  width: 100%;
  overflow: hidden;
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

const MiniImgList = styled.div<SlideShowProps>`
  display: flex;

  width: 100%;
  transition: transform 0.3s ease-in-out;

  ${({ totalImg }) => {
    if (Number(totalImg) < 13) {
      return `align-items: center;
                justify-content: center;`;
    }
  }}

  ${({ currenIndex, prevIndex, totalImg, prevDistance }) => {
    if (Number(totalImg) > 13) {
      const totalImages = Number(totalImg);
      const visibleImages = 13;
      const imageWidth = 50;

      let distance =
        (currenIndex - Number(prevIndex?.current)) * imageWidth +
        Number(prevDistance?.current);

      if (currenIndex + visibleImages > totalImages) {
        distance = (totalImages - visibleImages) * imageWidth;
      }

      if (currenIndex < 0) {
        distance = 0;
      }

      if (Number(prevIndex?.current) > currenIndex) {
        distance = distance - 300;
      }

      return `transform: translateX(-${distance}px);`;
    }
  }}
`;

const MiniImgItem = styled.button<SubImgProps>`
  flex-shrink: 0;
  display: inline-block;
  vertical-align: middle;
  margin: 0 5px 0 0;
  border-radius: 8px;
  background: #fff;
  height: 50px;
  width: 50px;
  padding: 4px;
  border: ${({ isActive }) =>
    isActive ? `1px solid #bbddfd` : `1px solid transparent`};
  position: relative;
`;

const ImgMiniItem = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

const CountImg = styled.span`
  position: absolute;
  padding: 2px 10px;
  border-radius: 8px;
  background-color: #eaecf0;
  color: #344054;
  font-size: 1.2rem;
  font-style: normal;
  z-index: 1;
  bottom: 0;
  right: 0;
`;
