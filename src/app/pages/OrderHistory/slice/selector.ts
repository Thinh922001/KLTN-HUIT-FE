import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectMenuRightState = createSelector(
  [(state: RootState) => state.orderHistoryState || initialState],
  state => state.MenuRightState,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.orderHistoryState || initialState],
  state => state.isLoading,
);

export const selectOrder = createSelector(
  [(state: RootState) => state.orderHistoryState || initialState],
  state => state.orders,
);

export const selectTotal = createSelector(
  [(state: RootState) => state.orderHistoryState || initialState],
  state => state.total,
);

export const selectTake = createSelector(
  [(state: RootState) => state.orderHistoryState || initialState],
  state => state.take,
);

export const selectSkip = createSelector(
  [(state: RootState) => state.orderHistoryState || initialState],
  state => state.skip,
);
