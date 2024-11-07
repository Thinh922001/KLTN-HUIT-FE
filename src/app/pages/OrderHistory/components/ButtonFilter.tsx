import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  isActive: boolean;
  onClick?: () => void;
}

export const BtnFilter: React.FC<Props> = ({ name, isActive, onClick }) => {
  return (
    <Button onClick={onClick} isActive={isActive}>
      {name}
    </Button>
  );
};

const Button = styled.button<{ isActive: boolean }>`
  background: #fff;
  border: 1px solid #c1c1c1;
  border-radius: 4px;
  font-size: 13px;
  line-height: 16px;
  color: ${({ isActive }) => (isActive ? `#023f88` : `#333`)};
  padding: 10px 20px;
  text-align: center;
  transition: color, border-color 0.5s;

  ${({ isActive }) => isActive && `border-color: #023f88;`}

  &:hover {
    border-color: #023f88;
    color: #023f88;
  }
`;
