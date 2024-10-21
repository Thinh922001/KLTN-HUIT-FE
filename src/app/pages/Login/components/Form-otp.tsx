import React, { FormEvent, KeyboardEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { LoginActions, useLoginSlice } from '../slice';
import {
  selectError,
  selectIsLoadingLoaded,
  selectIsLoadingLogin,
  selectLoginStatus,
} from '../slice/selector';

const OtpForm: React.FC = () => {
  useLoginSlice();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoadingLoaded);

  const isLoadingVerify = useSelector(selectIsLoadingLogin);

  const loginStatus = useSelector(selectLoginStatus);

  const error = useSelector(selectError);

  const handleBack = () => {
    dispatch(LoginActions.setError(''));
    dispatch(LoginActions.setFormState('LOGIN'));
    dispatch(LoginActions.setIsLoadingLoaded(false));
  };

  useEffect(() => {
    if (error) {
      setOtp(new Array(6).fill(''));
      setCounter(0);
    }
  }, [error]);

  const [otp, setOtp] = useState<string[]>(new Array(6).fill(''));
  const [counter, setCounter] = useState<number>(60);

  useEffect(() => {
    if (loginStatus === 'DONE') {
      dispatch(LoginActions.setLoginStatus(''));
      navigate('/');
    }
  }, [loginStatus]);

  useEffect(() => {
    const filledOtp = otp.filter(value => value !== '').length;
    if (filledOtp === 6) {
      dispatch(LoginActions.setOtp(otp.join('')));
      dispatch(LoginActions.loadLogin());
    }
  }, [otp]);

  useEffect(() => {
    if (counter > 0) {
      const timer = setInterval(() => {
        setCounter(counter - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [counter]);

  const handleChange = (element: HTMLInputElement, index: number) => {
    const value = element.value;

    if (isNaN(Number(value))) return;

    let newOtp = [...otp];

    if (newOtp[index] !== value) {
      newOtp[index] = value;
      setOtp(newOtp);

      if (element.nextSibling && value && value.length === 1) {
        (element.nextSibling as HTMLInputElement).focus();
      }
    }
  };

  useEffect(() => {
    if (isLoading) {
      setOtp(new Array(6).fill(''));
      setCounter(60);
      dispatch(LoginActions.setIsLoadingLoaded(false));
    }
  }, [isLoading, dispatch]);

  const tryAgain = () => {
    dispatch(LoginActions.loadOtp());
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, index: number) => {
    const value = (e.target as HTMLInputElement).value;

    if (e.key === 'Backspace') {
      if (!value && e.currentTarget.previousSibling) {
        (e.currentTarget.previousSibling as HTMLInputElement)?.focus();
      }

      setOtp([...otp.map((d, idx) => (idx === index ? '' : d))]);
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <OtpContainer>
      <form onSubmit={handleSubmit}>
        {otp.map((data, index) => (
          <OtpInput
            type="text"
            maxLength={1}
            key={index}
            value={data}
            onChange={e => handleChange(e.target, index)}
            onKeyDown={e => handleKeyDown(e, index)}
            onFocus={e => e.target.select()}
          />
        ))}
      </form>
      <CountdownLabel>
        {error ? (
          <BackWrapper>
            <BackLabel>
              Mã OTP không chính xác
              <BackLink onClick={handleBack}>Quay về</BackLink>
            </BackLabel>
          </BackWrapper>
        ) : counter > 0 ? (
          `Mã OTP hết hạn trong ${counter}s`
        ) : (
          <CounterTryAgain>
            Mã OTP đã hết hạn. <TryAgain onClick={tryAgain}>Thử lại</TryAgain>
          </CounterTryAgain>
        )}
      </CountdownLabel>
    </OtpContainer>
  );
};

export default OtpForm;

const OtpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const OtpInput = styled.input`
  width: 40px;
  height: 40px;
  margin: 0 5px;
  text-align: center;
  font-size: 18px;
  border: 1px solid #ccc;
  border-radius: 5px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;

const CountdownLabel = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: red;
`;

const BackWrapper = styled.div`
  margin-top: 20px;
  font-size: 14px;
  color: #333;
`;

const BackLabel = styled.span``;

const BackLink = styled.span`
  color: cyan;
  cursor: pointer;
`;

const CounterTryAgain = styled.span`
  font-size: 1.4rem;
  color: #0f6c6c;
`;

const TryAgain = styled.span`
  color: #74bde1;
  cursor: pointer;
`;
