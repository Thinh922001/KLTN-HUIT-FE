import styled from 'styled-components';
import ImgLogin from './assets/login.png';
import IconLogin from 'app/components/IconLogin';
import { formatPhoneNumber, onlyAllowNumbers } from 'utils/string';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export function LoginPage() {
  const navigate = useNavigate();

  const handleInputChange = e => {
    const { value } = e.target;
    const formattedValue = formatPhoneNumber(value);
    e.target.value = formattedValue;
  };

  const NavigateToRegister = () => {
    navigate('/register');
  };

  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <>
      <Helmet>
        <title>Đăng nhập</title>
        <meta name="description" content="login" />
      </Helmet>
      <Wrapper>
        <LoginContainer>
          <LoginImg>
            <Img src={ImgLogin} />
          </LoginImg>
          <LoginForm>
            <LoginFormContainer>
              <Header>Tra cứu thông tin đơn hàng</Header>
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
                <BtnLogin type="submit">Đăng nhập</BtnLogin>
                <RegisterBtn type="button" onClick={NavigateToRegister}>
                  Đăng ký
                </RegisterBtn>
              </form>
            </LoginFormContainer>
          </LoginForm>
        </LoginContainer>
      </Wrapper>
    </>
  );
}

export const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 144px);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const LoginImg = styled.div``;

export const Img = styled.img``;

export const LoginForm = styled.div`
  max-width: 500px;
  max-height: 369px;
  border-radius: 12px;
  box-shadow: 0 0 16px rgba(0, 0, 0, 0.11);
  padding: 85px 99px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const LoginFormContainer = styled.div`
  width: 100%;
`;

export const Header = styled.h2`
  font-size: 2.1rem;
  font-weight: normal;
  line-height: 1.5;
  margin-bottom: 25px;
  text-align: center;
`;

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

export const RegisterBtn = styled(BtnLogin)`
  background-color: #fff;
  color: #2a83e9;

  border: 1px solid rgb(42, 131, 233);

  &:hover {
    opacity: 0.7;
  }
`;
