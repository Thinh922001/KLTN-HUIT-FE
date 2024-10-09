import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { ProductCateActions, useProductCateSlice } from '../slice';

interface Props {
  text?: string;
  id: number;
}

export const FilterBy: React.FC<Props> = ({ text, id }) => {
  useProductCateSlice();
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState<boolean>(false);

  const handleSetIsActive = () => {
    if (!isActive) {
      dispatch(ProductCateActions.setFilter(id));
      dispatch(ProductCateActions.loadingPage());
    } else {
      dispatch(ProductCateActions.popFilter(id));
      dispatch(ProductCateActions.loadingPage());
    }

    setIsActive(!isActive);
  };

  return (
    <BtnFilterBy onClick={handleSetIsActive} isActive={isActive}>
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
