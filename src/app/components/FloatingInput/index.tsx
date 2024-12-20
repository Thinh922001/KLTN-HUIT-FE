import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  label: string;
  customBorder?: string;
  customColor?: string;
  value?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  customWidth?: string;
  disableFloating?: boolean;
  disableFocusColor?: boolean;
  isReadOnly?: boolean;
  customHeight?: string;
}

export const FloatingInput: React.FC<Props> = ({
  name,
  label,
  customBorder,
  customColor,
  value,
  onChange,
  customWidth,
  disableFloating,
  disableFocusColor,
  isReadOnly,
  customHeight,
}) => {
  return (
    <Wrapper>
      <Input
        type="text"
        id={name}
        name={name}
        customBorder={customBorder}
        customColor={customColor}
        placeholder={disableFloating ? label : ' '}
        value={value}
        onChange={onChange}
        customWidth={customWidth}
        disableFloating={disableFloating}
        disableFocusColor={disableFocusColor}
        readOnly={isReadOnly}
        customHeight={customHeight}
      />
      {!disableFloating && (
        <Label customColor={customColor} htmlFor={name}>
          {label}
        </Label>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

const Label = styled.label<Pick<Props, 'customColor'>>`
  position: absolute;
  font-size: 1.4rem;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${({ customColor }) => customColor || '#ccc'};
  background-color: #fff;
  border-radius: 8px;
  padding: 0 5px;
  pointer-events: none;
  transition: transform 0.3s, color 0.3s;
`;

const Input = styled.input<
  Pick<
    Props,
    | 'customBorder'
    | 'customColor'
    | 'customWidth'
    | 'disableFloating'
    | 'disableFocusColor'
    | 'customHeight'
  >
>`
  padding: 10px;
  border: ${({ customBorder }) => customBorder || '2px solid #ccc'};
  border-radius: 5px;
  width: ${({ customWidth }) => customWidth || '264px'};
  height: ${({ customHeight }) => (customHeight ? customHeight : '40px')};
  transition: border 0.5s, transform 0.5s, box-shadow 0.5s, text-shadow 0.5s;
  font-family: inherit;
  font-size: 1.4rem;
  background-color: #fff;

  ${({ disableFocusColor }) =>
    disableFocusColor
      ? ``
      : `&:focus {
    border-color: #fc9639;
  }`}

  ${({ disableFloating }) =>
    disableFloating
      ? ''
      : `
      &:focus + ${Label}, &:not(:placeholder-shown) + ${Label} {
        transform: translateY(-25px);
        color: #fc9639;
        text-shadow: -0.1px -0.1px #fc9639, 0.1px 0.1px #fc9639;
      }
      &:not(:focus) + ${Label} {
        color: ${({ customColor }) => customColor || '#ccc'};
      }
    `}
`;
