import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectOrderId = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => state.orderId,
);

export const selectOrderDetail = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => state.data,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => state.isLoading,
);

export const selectPaymentLoading = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => state.isPaymentLoading,
);

export const selectItemSelected = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => {
    const item = state.data?.items.find(e => e.id === state.selectItemId);
    return item ? item : null;
  },
);

export const selectQuantityReturn = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => state.quantityReturn,
);

export const selectReasonReturn = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => state.reasonReturn,
);

export const selectReturnOrderLoading = createSelector(
  [(state: RootState) => state.orderDetailState || initialState],
  state => state.isReturnOrderLoading,
);
