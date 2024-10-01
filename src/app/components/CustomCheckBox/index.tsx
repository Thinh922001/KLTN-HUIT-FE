import React from 'react';
import styled from 'styled-components';

interface CustomCheckboxProps {
  id: string;
  label?: string;
  isChecked: boolean;
  onChange: (checked: boolean) => void;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({
  id,
  label,
  isChecked,
  onChange,
}) => {
  const handleCheckboxChange = () => {
    onChange(!isChecked);
  };

  return (
    <CheckBoxWrapper>
      <CheckBox
        id={id}
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
        hidden
      />
      <Label htmlFor={id} isChecked={isChecked}>
        {label || ''}
      </Label>
    </CheckBoxWrapper>
  );
};

const Label = styled.label<{ isChecked: boolean }>`
  position: relative;
  display: flex;
  align-items: center;

  font-size: 1.4rem;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    transition: background-color, 0.1s;
  }

  &::before {
    width: 15px;
    height: 15px;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-right: 5px;
    background-color: ${({ isChecked }) =>
      isChecked ? '#f05123' : 'transparent'};
    border-color: ${({ isChecked }) => (isChecked ? '#f05123' : '#ccc')};
  }

  &::after {
    position: absolute;
    top: 3px;
    left: 1px;
    width: 12px;
    height: 6px;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
    rotate: -45deg;
    opacity: ${({ isChecked }) => (isChecked ? 1 : 0)};
  }
`;

const CheckBox = styled.input``;

const CheckBoxWrapper = styled.div`
  display: inline-block;
`;

export default CustomCheckbox;
