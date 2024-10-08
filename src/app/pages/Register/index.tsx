import styled from 'styled-components';
import ImgLogin from './assets/login.png';
import IconLogin from 'app/components/IconLogin';
import { formatPhoneNumber, onlyAllowNumbers } from 'utils/string';
import {
  Header,
  Img,
  Input,
  InputWrapper,
  LoginContainer,
  LoginForm,
  LoginFormContainer,
  LoginImg,
  RegisterBtn,
  Wrapper,
} from '../Login';
import { Helmet } from 'react-helmet-async';

export function RegisterPage() {
  const handleInputChange = e => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    e.target.value = formattedValue;
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Đăng ký</title>
        <meta name="description" content="register" />
      </Helmet>
      <Wrapper>
        <LoginContainer>
          <LoginImg>
            <Img src={ImgLogin} />
          </LoginImg>
          <LoginForm>
            <LoginFormContainer>
              <Header>Đăng ký thông tin khách hàng</Header>
              <form onSubmit={handleSubmit}>
                <InputWrapper>
                  <IconLogin
                    position="-66px -19px;"
                    width="14px"
                    height="21px"
                  />
                  <Input
                    type="tel"
                    placeholder="Số điện thoại mua hàng"
                    inputMode="numeric"
                    autoComplete="off"
                    pattern="[0-9]*"
                    onKeyDown={onlyAllowNumbers}
                    maxLength={19}
                    onInput={handleInputChange}
                  />
                </InputWrapper>
                <InputWrapper>
                  <IconLogin
                    position="-89px -19px;"
                    width="18px"
                    height="21px"
                  />
                  <Input
                    type="password"
                    placeholder="Nhập mật khẩu"
                    autoComplete="off"
                  />
                </InputWrapper>
                <InputWrapper>
                  <IconLogin
                    position="-89px -19px;"
                    width="18px"
                    height="21px"
                  />
                  <Input
                    type="password"
                    placeholder="Nhập lại mật khẩu"
                    autoComplete="off"
                  />
                </InputWrapper>
              </form>

              <RegisterBtn>Đăng ký</RegisterBtn>
            </LoginFormContainer>
          </LoginForm>
        </LoginContainer>
      </Wrapper>
    </>
  );
}
