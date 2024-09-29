import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  isActive?: boolean;
  handleActiveExpand: () => void;
}

export const ProductExpand: React.FC<Props> = ({
  isActive,
  handleActiveExpand,
}) => {
  return (
    <Wrapper>
      {' '}
      <SeeMore isActive={isActive} onClick={handleActiveExpand}>
        (Xem chi tiết)
      </SeeMore>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const SeeMore = styled.span<Pick<Props, 'isActive'>>`
  overflow: hidden;
  color: #288ad6;
  font-size: 12px;
  padding: 0;
  cursor: pointer;

  position: relative;

  &::after {
    content: '';
    position: absolute;
    border-top: 6px solid #288ad6;
    border-right: 6px solid transparent;
    border-left: 6px solid transparent;
    display: inline-block;
    vertical-align: middle;
    margin-left: 5px;
    transition: transform 0.3s;
    transform: ${({ isActive }) => (isActive ? 'rotate(180deg)' : 'none')};
    right: -14px;
    top: 31%;
  }
`;
