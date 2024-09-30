import React from 'react';
import styled from 'styled-components';

interface Props {
  id: string;
  isChecked: boolean;
  label: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CustomRadio: React.FC<Props> = ({
  id,
  isChecked,
  label,
  name,
  onChange,
}) => {
  return (
    <Wrapper htmlFor={id}>
      <Radio
        hidden
        id={id}
        type="radio"
        checked={isChecked}
        name={name}
        value={id}
        onChange={onChange}
      />
      {label}
    </Wrapper>
  );
};

const Wrapper = styled.label`
  position: relative;
  display: inline-flex;
  align-items: center;

  font-size: 1.4rem;

  line-height: 20px;

  transition: border, border-color, background-color 0.3s;

  & + & {
    margin-left: 10px;
  }

  &[type='radio'] {
    display: none;
  }

  &::before,
  &::after {
    content: '';
    display: inline-block;
  }

  &::before {
    width: 15px;
    height: 15px;
    border: 2px solid #ccc;
    border-radius: 50%;
    margin-right: 5px;
  }

  &:has(:checked)::before {
    border-color: #f05123;
  }

  &:has(:checked)::after {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #f05123;
    position: absolute;
    top: 5.5px;
    left: 3.2px;
  }
`;

const Radio = styled.input``;
