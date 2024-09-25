import styled from 'styled-components';
import { MenuData } from 'app/components/Header/data/menu';
import { Arrow } from 'app/components/Arrow';
import { Props as ArrowProps } from 'app/components/Arrow/index';
import { useEffect, useState } from 'react';

interface Props {
  currenIndex: number;
}

export const Category = () => {
  const [currenIndex, setCurrentIndex] = useState(0);

  //const newData = MenuData.flatMap(e => e.subMenus);

  const data = MenuData[5];

  const ITEM_TO_SHOW = 8;

  const totalItem = data.subMenus?.length || 0;

  const onNext = () => {
    if (currenIndex < totalItem - ITEM_TO_SHOW) {
      setCurrentIndex(index => index + 1);
    }
  };

  const onPrev = () => {
    if (currenIndex < totalItem - ITEM_TO_SHOW && currenIndex !== 0) {
      setCurrentIndex(index => index - 1);
    }
  };

  return (
    <CategoryContainer>
      <ArrowWrapperLeft direction="left" onClick={onPrev}>
        {' '}
        <Arrow direction="left" />
      </ArrowWrapperLeft>

      <CategoryWarper className="wrapper">
        <CateInner currenIndex={currenIndex}>
          {data.subMenus &&
            data.subMenus?.map((e, index) => {
              return (
                <A key={index}>
                  <CateItem key={index}>
                    <CateImg src={e.img} />
                    <CateDesc>{e.desc}</CateDesc>
                  </CateItem>
                </A>
              );
            })}
        </CateInner>
        <CateInner currenIndex={currenIndex}>
          {data.subMenus &&
            data.subMenus?.map((e, index) => {
              return (
                <A key={index}>
                  <CateItem key={index}>
                    <CateImg src={e.img} />
                    <CateDesc>{e.desc}</CateDesc>
                  </CateItem>
                </A>
              );
            })}
        </CateInner>
      </CategoryWarper>

      <ArrowWrapperLeft direction="right" onClick={onNext}>
        {' '}
        <Arrow direction="right" />
      </ArrowWrapperLeft>
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

const ArrowWrapperLeft = styled.div<ArrowProps>`
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

const CateItem = styled.div`
  min-width: 166px;
  height: 100%;
  padding: 16px 12px 12px;

  display: flex;

  align-items: center;
  justify-content: center;
  flex-direction: column;

  &:hover {
    background-color: #eaecf0;
  }
`;

const CateImg = styled.img`
  width: 48px;
  height: 48px;
  object-fit: cover;
`;

const CateDesc = styled.span`
  margin-top: 2px;
  text-align: center;
`;

const A = styled.a``;
