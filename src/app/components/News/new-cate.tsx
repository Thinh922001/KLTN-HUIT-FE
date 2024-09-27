import styled from 'styled-components';
import React from 'react';
import { ICate } from 'types/New';
import { LoadingIndicator } from '../LoadingIndicator';

interface Props {
  isActive?: boolean;
  activeIndex: number;
  handleOnClick: (index: number) => void;
  data: ICate[];
}

export const NewCate: React.FC<
  Pick<Props, 'activeIndex' | 'handleOnClick' | 'data'>
> = ({ activeIndex, handleOnClick, data }) => {
  return (
    <NewCateWrapper>
      {data.map((e, index) => (
        <NewCateItem
          key={index}
          isActive={activeIndex === index}
          onClick={() => handleOnClick(index)}
        >
          {e.category}
        </NewCateItem>
      ))}
    </NewCateWrapper>
  );
};

const NewCateWrapper = styled.div`
  margin-bottom: 10px; ;
`;

const NewCateItem = styled.button<Pick<Props, 'isActive'>>`
  padding: 8px 16px;
  border-radius: 8px;
  color: ${({ isActive }) => (isActive ? '#2a83e9' : '#1d2939')};
  margin-right: 10px;
  cursor: pointer;
  border: ${({ isActive }) =>
    isActive ? '2px solid #2a83e9' : '1.5px solid #eaecf0'};
  &:hover {
    opacity: 0.9;
  }
`;
