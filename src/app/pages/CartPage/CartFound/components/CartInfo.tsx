import { CustomRadio } from 'app/components/CustomRadio';
import { useState } from 'react';
import styled from 'styled-components';
import { Gender } from './type';
import { FloatingInput } from 'app/components/FloatingInput';
import { CartLocation } from './CartLocation';
import { ReceiveSM } from './ReceiveSM';
import { useDispatch } from 'react-redux';
import { LocationBoxActions } from 'app/components/Header/Features/LocationBox/slice';

export const CartInfo = () => {
  const dispatch = useDispatch();
  const [selectedRadio, setSelectedRadio] = useState<Gender>(0);

  const [receive, setReceive] = useState<string>('YOUR_PLACE');

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedRadio(+e.target.value);
  };

  const handleMethodReceiveGoods = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value === 'SUPER_MARKET') {
      dispatch(LocationBoxActions.resetLocationBox());
    }
    setReceive(value);
  };

  return (
    <Wrapper>
      <Content>
        <Header>Thông tin khách hàng</Header>
        <FormGroup>
          <CustomRadio
            id={String(Gender.MALE)}
            isChecked={selectedRadio == Gender.MALE}
            label="Anh"
            name="customRadioGroup"
            onChange={handleRadioChange}
          />
          <CustomRadio
            id={String(Gender.FEMALE)}
            isChecked={selectedRadio == Gender.FEMALE}
            label="Chị"
            name="customRadioGroup"
            onChange={handleRadioChange}
          />
        </FormGroup>

        <FormGroupInput>
          <FloatingInput name="fullName" label="Họ và Tên" />
          <FloatingInput name="phoneNumber" label="Số điện thoại" />
        </FormGroupInput>

        <Header>Cách thức nhận hàng</Header>

        <FormGroup>
          <CustomRadio
            id={'YOUR_PLACE'}
            isChecked={receive == 'YOUR_PLACE'}
            label="Giao tận nơi"
            name="method"
            onChange={handleMethodReceiveGoods}
          />
          <CustomRadio
            id={'SUPER_MARKET'}
            isChecked={receive == 'SUPER_MARKET'}
            label="Nhận tại siêu thị"
            name="method"
            onChange={handleMethodReceiveGoods}
          />
        </FormGroup>
        {receive === 'YOUR_PLACE' ? <CartLocation /> : <ReceiveSM />}
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div``;

const Content = styled.div`
  padding: 10px 20px;
`;

const Header = styled.h4`
  display: block;

  font-size: 1.4rem;
  color: #333;
  font-weight: 700;
  margin-bottom: 12px;
  margin-top: 10px;
`;

const FormGroup = styled.div`
  & + & {
    margin-top: 12px;
  }
`;

const FormGroupInput = styled(FormGroup)`
  display: flex;

  justify-content: space-between;
`;
