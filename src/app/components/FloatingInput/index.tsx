import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  label: string;
}

export const FloatingInput: React.FC<Props> = ({ name, label }) => {
  return (
    <Wrapper>
      <Input type="text" id={name} name={name} placeholder=" " />
      <Label htmlFor={name}>{label}</Label>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label`
  position: absolute;
  font-size: 1.4rem;
  left: 12px;
  top: 50%;
  translate: 0 -50%;
  color: #666;
  background-color: #fff;
  border-radius: 8px;
  padding: 0 5px;
  pointer-events: none;
  transition: translate, color, 0.3s;
`;

const Input = styled.input`
  padding: 10px;
  border: 2px solid #ccc;
  border-radius: 5px;
  width: 264px;
  height: 40px;
  transition: border, translate, box-shadow, text-shadow 0.5s;
  font-family: inherit;
  font-size: 1.4rem;

  &:focus {
    border: 1px solid #fc9639;
    box-shadow: 0 0 4px #fc9639;
  }

  &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
    translate: 0 -25px;
    color: #fc9639;
    text-shadow: -0.1px -0.1px #fc9639, 0.1px 0.1px #fc9639;
  }

  &:not(:focus) + ${Label} {
    color: #ccc;
  }
`;
