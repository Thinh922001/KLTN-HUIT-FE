import { call, delay, put, select, takeLatest } from 'redux-saga/effects';

import { getCart } from 'app/pages/CartPage/slice/saga';
import { AuthActions } from 'auth';
import { BASE_URL } from 'utils/url';
import { post } from 'utils/url/custom-request';
import { LoginActions } from '.';
import { selectOTP, selectPhone } from './selector';

export function* requestCode() {
  try {
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
  } catch (error: any) {}
}

export function* verifyCode() {
  try {
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
  } catch (error: any) {
    if (error.response.data.error === 'INVALID_CODE') {
      yield put(LoginActions.setError(error.response.data.error));
    }
  }
}

export function* LoginFormSaga() {
  yield takeLatest(LoginActions.loadOtp, requestCode);
  yield takeLatest(LoginActions.loadLogin, verifyCode);
  yield takeLatest(LoginActions.syncCart, getCart);
}
