import { call, put, select, takeLatest, delay } from 'redux-saga/effects';

import { AuthActions } from 'auth';
import { BASE_URL } from 'utils/url';
import { post } from 'utils/url/custom-request';
import { LoginActions } from '.';
import { selectOTP, selectPhone } from './selector';

export function* requestCode() {
  yield delay(500);
  const phone = yield select(selectPhone);

  if (!phone) return;

  const data = yield call(post, `${BASE_URL}/users/auth/request_code`, {
    phone,
  });

  const isOtpAvailable = data?.data?.data?.length === 0;

  if (isOtpAvailable) {
    yield put(LoginActions.otpLoaded());
    yield put(LoginActions.setIsLoadingLoaded(true));
    yield put(LoginActions.setFormState('OTP'));
  }
}

export function* verifyCode() {
  const phone = yield select(selectPhone);
  const otp = yield select(selectOTP);

  if (!phone || !otp) return;

  const data = yield call(post, `${BASE_URL}/users/auth/verify_code`, {
    phone,
    code: otp,
  });

  if (data?.response?.data?.error) {
    yield put(LoginActions.setError(data.response.data.error));
    return;
  }

  const userData = data?.data?.data;

  if (userData) {
    yield put(AuthActions.setAuth(userData));
    yield put(LoginActions.loginLoaded());
    yield put(LoginActions.setLoginStatus('DONE'));
  }
}

export function* LoginFormSaga() {
  yield takeLatest(LoginActions.loadOtp, requestCode);
  yield takeLatest(LoginActions.loadLogin, verifyCode);
}
