import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {
  text?: string;
}

export const FilterBy: React.FC<Props> = ({ text }) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  return (
    <BtnFilterBy onClick={() => setIsActive(e => !e)} isActive={isActive}>
      {text}
    </BtnFilterBy>
  );
};

const BtnFilterBy = styled.div<{ isActive?: boolean }>`
  min-width: 100px;
  border-radius: 8px;
  background-color: rgba(242, 244, 247, 1);
  border: 1px solid rgba(242, 244, 247, 1);
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: #333;
  display: flex;
  font-size: 14px;
  line-height: 13px;
  margin-right: 8px;
  margin-bottom: unset;
  min-height: 36px;
  max-height: 36px;
  padding: 6px;
  transition: border 0.3s;

  ${({ isActive }) => isActive && `  border: 1px solid #4a90e2;`}

  &:hover {
    border: 1px solid #4a90e2;
  }
`;
