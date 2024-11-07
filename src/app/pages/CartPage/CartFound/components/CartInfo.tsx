import { CustomRadio } from 'app/components/CustomRadio';
import { useState } from 'react';
import styled from 'styled-components';
import { Gender } from './type';
import { FloatingInput } from 'app/components/FloatingInput';
import { CartLocation } from './CartLocation';
import { ReceiveSM } from './ReceiveSM';
import { useDispatch, useSelector } from 'react-redux';
import { LocationBoxActions } from 'app/components/Header/Features/LocationBox/slice';
import CustomCheckbox from 'app/components/CustomCheckBox';
import { OtherReceive } from './OtherRecevie';
import { InvoiceCompany } from './InvoiceCompany';
import { CartActions } from '../../slice';
import {
  selectGender,
  selectName,
  selectNote,
  selectPhone,
} from '../../slice/selector';
import { isAuthenticated } from 'utils/url/local-storage';

export const CartInfo = () => {
  const dispatch = useDispatch();

  const selectedRadio = useSelector(selectGender);

  const [receive, setReceive] = useState<string>('YOUR_PLACE');

  const [isOtherReceiveChecked, setIsOtherReceiveChecked] = useState(false);

  const [isInvoice, setIsInvoice] = useState(false);

  const name = useSelector(selectName);

  const phone = useSelector(selectPhone);

  const note = useSelector(selectNote);

  const isAuth = isAuthenticated();

  const handleSetName = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CartActions.setName(event.target.value));
  };

  const handleSetPhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CartActions.setPhone(event.target.value));
  };

  const handleSetNote = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CartActions.setNote(event.target.value));
  };

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(CartActions.setGender(e.target.value as Gender));
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
        {isAuth ? null : (
          <FormGroup>
            <Header>Thông tin khách hàng</Header>
            <CustomRadio
              id={Gender.MALE}
              isChecked={selectedRadio == Gender.MALE}
              label="Anh"
              name="Gender"
              onChange={handleRadioChange}
            />
            <CustomRadio
              id={Gender.FEMALE}
              isChecked={selectedRadio == Gender.FEMALE}
              label="Chị"
              name="Gender"
              onChange={handleRadioChange}
            />
          </FormGroup>
        )}

        {isAuth ? null : (
          <FormGroupInput>
            <FloatingInput
              customColor="#333;"
              customBorder="1px solid #d1d1d1"
              name="fullName"
              label="Họ và Tên"
              onChange={handleSetName}
              value={name}
            />
            <FloatingInput
              customColor="#333;"
              customBorder="1px solid #d1d1d1"
              name="phoneNumber"
              label="Số điện thoại"
              onChange={handleSetPhone}
              value={phone}
            />
          </FormGroupInput>
        )}

        <FormGroup>
          <Header>Cách thức nhận hàng</Header>

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

        <OtherRequest>
          <FloatingInput
            customColor="#333;"
            customBorder="1px solid #d1d1d1"
            name="address"
            customWidth="100%"
            label="Yêu cầu khác không bắt buộc"
            value={note}
            onChange={handleSetNote}
          />
        </OtherRequest>

        <CheckBoxWrapper>
          <CustomCheckbox
            id="checkbox1"
            label="Gọi người khác nhận hàng (nếu có)"
            isChecked={isOtherReceiveChecked}
            onChange={checked => setIsOtherReceiveChecked(checked)}
          />
          {isOtherReceiveChecked && <OtherReceive />}
        </CheckBoxWrapper>

        <CheckBoxWrapper>
          <CustomCheckbox
            id="checkbox2"
            label="Xuất hóa đơn công ty"
            isChecked={isInvoice}
            onChange={checked => setIsInvoice(checked)}
          />
          {isInvoice && <InvoiceCompany />}
        </CheckBoxWrapper>
      </Content>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-bottom: 1px solid #d1d1d1;
`;

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

const OtherRequest = styled.div`
  margin-top: 12px;
`;

const CheckBoxWrapper = styled.div`
  margin-top: 12px;
`;
