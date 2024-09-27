import React from 'react';
import styled from 'styled-components';

interface Props {
  text: string;
}

export const SeeMore: React.FC<Props> = ({ text }) => {
  return (
    <SeeMoreWrapper>
      <LoadMore>{text}</LoadMore>
    </SeeMoreWrapper>
  );
};

const SeeMoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

const LoadMore = styled.a`
  border: 0;
  color: #2a83e9;
  font-size: 1.6rem;
  font-weight: 700;
  height: 36px;
  padding: 0 12px;
  line-height: 36px;
  position: relative;
  cursor: pointer;

  &::before {
    border-top: 2px solid #2a83e9;
    border-left: 2px solid #2a83e9;
    content: '';
    position: absolute;
    height: 5px;
    width: 5px;
    right: 0;
    top: 44%;
    transform: translateY(-50%);
    transform: rotate(135deg);
  }
`;
