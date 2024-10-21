import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectAccessToken = createSelector(
  [(state: RootState) => state.authState || initialState],
  state => state.auth.accessToken,
);

export const selectFreshToken = createSelector(
  [(state: RootState) => state.authState || initialState],
  state => state.auth.refreshToken,
);

export const selectUserId = createSelector(
  [(state: RootState) => state.authState || initialState],
  state => state.user.id,
);
