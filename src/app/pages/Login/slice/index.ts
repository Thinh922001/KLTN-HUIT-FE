import { PayloadAction } from '@reduxjs/toolkit';
import { FormLoginState } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { LoginFormSaga } from './saga';

export const initialState: FormLoginState = {
  formState: 'LOGIN',
  phone: '',
  otp: '',
  isLoading: false,
  error: '',
  isLoadingLogin: false,
  isLoadingLoaded: false,
  loginStatus: '',
  syncCartLoaded: false,
};

const slice = createSlice({
  name: 'loginState',
  initialState,
  reducers: {
    setFormState(state, actions: PayloadAction<string>) {
      state.formState = actions.payload;
    },
    setPhone(state, actions: PayloadAction<string>) {
      state.phone = actions.payload;
    },
    setOtp(state, actions: PayloadAction<string>) {
      state.otp = actions.payload;
    },
    setIsLoading(state, actions: PayloadAction<boolean>) {
      state.isLoading = actions.payload;
    },
    loadOtp(state) {
      state.isLoading = true;
    },
    otpLoaded(state) {
      state.isLoading = false;
    },
    setError(state, actions: PayloadAction<string>) {
      state.error = actions.payload;
    },
    loadLogin(state) {
      state.isLoadingLogin = true;
    },
    loginLoaded(state) {
      state.isLoadingLogin = false;
    },
    setIsLoadingLoaded(state, actions: PayloadAction<boolean>) {
      state.isLoadingLoaded = actions.payload;
    },
    setLoginStatus(state, actions: PayloadAction<string>) {
      state.loginStatus = actions.payload;
    },
    setSyncCartLoading(state, actions: PayloadAction<boolean>) {
      state.syncCartLoaded = actions.payload;
    },
    syncCart(state) {
      state.syncCartLoaded = true;
    },
  },
});

export const { actions: LoginActions, reducer } = slice;

export const useLoginSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LoginFormSaga });
  return { actions: slice.actions };
};
