import styled from 'styled-components';
import { MenuData } from 'app/components/Header/data/menu';
import { Arrow } from 'app/components/Arrow';
import { Props as ArrowProps } from 'app/components/Arrow/index';
import { useEffect, useState } from 'react';
import { renderCategoryItems } from './render-cate-items';

interface Props {
  currenIndex: number;
}

export const Category = () => {
  const [currenIndex, setCurrentIndex] = useState(0);

  const newData = MenuData.flatMap(e => e.subMenus);

  const halfLength = newData.length / 2;

  const [firstHalf, secondHalf] = [
    newData.slice(0, Math.ceil(halfLength)),
    newData.slice(Math.ceil(halfLength)),
  ];

  const ITEM_TO_SHOW = 8;

  const totalItem = halfLength;

  const onNext = () => {
    if (currenIndex < totalItem - ITEM_TO_SHOW) {
      setCurrentIndex(index => index + 1);
    }
  };

  const onPrev = () => {
    if (currenIndex > 0) {
      setCurrentIndex(index => index - 1);
    }
  };

  return (
    <CategoryContainer>
      <ArrowWrapper direction="left" onClick={onPrev}>
        {' '}
        <Arrow direction="left" />
      </ArrowWrapper>

      <CategoryWarper className="wrapper">
        <CateInner currenIndex={currenIndex}>
          {firstHalf.length && renderCategoryItems(firstHalf)}
        </CateInner>
        <CateInner currenIndex={currenIndex}>
          {secondHalf.length && renderCategoryItems(secondHalf)}
        </CateInner>
      </CategoryWarper>

      <ArrowWrapper direction="right" onClick={onNext}>
        {' '}
        <Arrow direction="right" />
      </ArrowWrapper>
    </CategoryContainer>
  );
};

const CategoryWarper = styled.div`
  background: #fff;
  width: 100%;
  border-radius: 8px;
  margin-top: 20px;
  overflow: hidden;
`;

const ArrowWrapper = styled.div<ArrowProps>`
  position: absolute;

  ${({ direction }) => {
    if (direction === 'left') {
      return ` 
          left: -23px;
          top: 40%;`;
    }
    return `
          right: -27px;
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

const CateInner = styled.div<Props>`
  display: flex;
  transition: transform 0.3s ease;

  ${({ currenIndex }) =>
    currenIndex > 0 && `transform: translateX(-${currenIndex * 166}px);`}
`;

const CategoryContainer = styled.div`
  position: relative;
`;
