import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectMenuRightState = createSelector(
  [(state: RootState) => state.orderHistoryState || initialState],
  state => state.MenuRightState,
);
