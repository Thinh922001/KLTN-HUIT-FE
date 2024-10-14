import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectIdChosen = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.productIdChosen,
);

export const selectIsCartLoadDone = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.isCartLoadDone,
);

export const selectCartItems = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.cartItems,
);

export const selectLengthCart = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.totalQuantity,
);

export const selectTotalQuantity = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.totalQuantity,
);

export const selectTotalPrice = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.totalAmount,
);
