import { CustomRadio } from 'app/components/CustomRadio';
import styled from 'styled-components';
import { useState } from 'react';
import { FloatingInput } from 'app/components/FloatingInput';

export const OtherReceive = () => {
  const [selectedRadio, setSelectedRadio] = useState<string>('');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(e.target.value);
  };

  return (
    <Wrapper>
      <Content>
        <CustomRadio
          id={'Male_Receive'}
          isChecked={selectedRadio == 'Male_Receive'}
          label="Anh"
          name="receiveGender"
          onChange={handleRadioChange}
        />
        <CustomRadio
          id={'Female_Receive'}
          isChecked={selectedRadio == 'Female_Receive'}
          label="Chị"
          name="receiveGender"
          onChange={handleRadioChange}
        />
        <InputWrapper>
          <FloatingInput
            customColor="#333;"
            customBorder="1px solid #d1d1d1"
            name="address"
            customWidth="100%"
            label="Họ và tên người nhận"
            disableFloating={true}
          />
          <FloatingInput
            customColor="#333;"
            customBorder="1px solid #d1d1d1"
            name="address"
            customWidth="100%"
            label="Số điện thoại người nhận"
            disableFloating={true}
          />
        </InputWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: 12px;
  background: #f6f6f6;
  border: 1px solid #e1e1e1;
  position: relative;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid #e1e1e1;
    border-right: 1px solid #e1e1e1;
    background: #f6f6f6;
    transform: rotate(-45deg);
    display: block;
    position: absolute;
    left: 48px;
    top: -6px;
  }
`;

const Content = styled.div`
  padding: 10px 10px;
`;

const InputWrapper = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;
