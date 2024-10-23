import styled from 'styled-components';
import { Icon } from '../../assets/Icon';
import React from 'react';

interface Props {
  title: string;
  onClick?: () => void;
  activeStart?: boolean;
  isActive?: boolean;
}

export const StartVote: React.FC<Props> = ({
  title,
  onClick,
  activeStart,
  isActive,
}) => {
  return (
    <Wrapper onClick={onClick}>
      <Icon
        position={activeStart ? '-125px -80px' : '-80px -75px'}
        width="40px"
        height="38px"
        style={{ cursor: 'pointer' }}
      />
      <Title isActive={isActive}>{title}</Title>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Title = styled.p<{ isActive?: boolean }>`
  color: ${({ isActive }) => (isActive ? '#ff9f00' : '#757575')};
  font-size: 14px;
  margin-top: 5px;
`;
