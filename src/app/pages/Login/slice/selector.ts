import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectPhone = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.phone,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.isLoading,
);

export const selectOTP = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.otp,
);

export const selectFormState = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.formState,
);

export const selectIsLoadingLoaded = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.isLoadingLoaded,
);

export const selectIsLoadingLogin = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.isLoadingLogin,
);

export const selectLoginStatus = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.loginStatus,
);

export const selectError = createSelector(
  [(state: RootState) => state.loginState || initialState],
  state => state.error,
);
