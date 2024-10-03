import React, { useState } from 'react';
import styled from 'styled-components';

interface IVariant {
  name: string;
  img: string[];
  options: string[];
}

interface IData {
  data: IVariant;
}

export const VariantItems: React.FC<IData> = ({ data }) => {
  const [activeIndex, setIsActiveIndex] = useState<number>(0);

  return (
    <VariantWrapper>
      {data.options.length > 0 &&
        data.options.map((e, index) => (
          <Items
            onClick={() => setIsActiveIndex(index)}
            isActive={activeIndex === index}
            key={index}
          >
            {data.img.length > 0 && <SubImg color={data.img[index]} />}
            {e}
          </Items>
        ))}
    </VariantWrapper>
  );
};

const VariantWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  & + & {
    margin-top: 10px;
  }
`;

const Items = styled.button<{ isActive: boolean }>`
  border-radius: 8px;
  padding: 12px;
  height: auto;
  line-height: 1;
  border-color: #eaecf0;
  font-size: 14px;
  border: 1px solid #e0e0e0;
  color: #333;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  ${({ isActive }) =>
    isActive &&
    `border-color: #bbddfd;
    color: #2a83e9;
    background-color: #f1f8fe;`}
`;

const SubImg = styled.div<{ color: string }>`
  width: 15px;
  height: 15px;
  border-radius: 50%;

  ${({ color }) => color && `background-color: ${color};`}
`;
