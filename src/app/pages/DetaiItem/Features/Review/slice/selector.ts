import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectIsShow = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.isShow,
);

export const selectStartRate = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.startRate,
);

export const selectStateBoxComment = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.stateBoxComment,
);
