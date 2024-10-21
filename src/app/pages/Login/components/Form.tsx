import IconLogin from 'app/components/IconLogin';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import {
  formatPhoneNumber,
  onlyAllowNumbers,
  isValidPhoneNumber,
} from 'utils/string';
import { LoginActions, useLoginSlice } from '../slice';
import showErrorToast from 'app/components/Toast/components/Toast-error';
import { useAuthSlice } from 'auth';

export const Form = () => {
  useLoginSlice();

  const dispatch = useDispatch();
  let phoneNumber = '';

  const handleSubmit = e => {
    e.preventDefault();
    if (isValidPhoneNumber(phoneNumber)) {
      dispatch(LoginActions.loadOtp());
    } else {
      showErrorToast('Vui lòng nhập số điện thoại hợp lệ');
    }
  };

  const handleInputChange = e => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    e.target.value = formattedValue;
    phoneNumber = formattedValue.replace(/\s+/g, '');
    dispatch(LoginActions.setPhone(phoneNumber));
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWrapper>
        <IconLogin position="-66px -19px;" width="14px" height="21px" />
        <Input
          type="tel"
          placeholder="Số điện thoại mua hàng"
          inputMode="numeric"
          autoComplete="off"
          onKeyDown={onlyAllowNumbers}
          maxLength={19}
          onInput={handleInputChange}
        />
      </InputWrapper>

      <BtnLogin type="submit">Đăng nhập</BtnLogin>
    </form>
  );
};

export const InputWrapper = styled.div`
  width: 302px;
  margin-bottom: 15px;
  max-width: 100%;
  display: flex;
  align-items: center;
  gap: 10px;
  border: 1px solid #e0e0e0;
  border-radius: 100px;
  height: 48px;
  padding: 0 24px;
  font-size: 15px;
`;

export const Input = styled.input`
  font-family: inherit;
  background-color: transparent;
  width: 100%;
  height: 100%;

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #000;
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #000;
  }

  &:-webkit-autofill:hover {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #000;
  }

  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    box-shadow: 0 0 0px 1000px white inset;
    -webkit-text-fill-color: #000;
  }
`;

export const BtnLogin = styled.button`
  width: 100%;
  background-color: #4a90e2;
  box-shadow: unset;
  border-radius: 100px;
  width: 302px;
  height: 50px;
  border: none;
  text-transform: uppercase;
  color: #fff;
  font-size: 17px;
  max-width: 100%;

  &:hover {
    opacity: 0.9;
  }

  & + & {
    margin-top: 10px;
  }
`;
