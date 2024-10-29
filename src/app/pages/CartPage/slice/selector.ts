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

export const selectIncreaseId = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.increaseCartId,
);

export const selectIncreaseQuantity = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.increaseCartQuantity,
);

export const selectOutOfStock = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.isOutOfStock,
);

export const selectIncreaseLoading = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.isIncreaseLoading,
);

export const selectIsExistHasNoStock = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.cartItems.some(e => e.hasNoStock),
);

export const selectSyncCart = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => {
    if (state.cartItems.length && state.cartItems.length > 0) {
      return state.cartItems.map(e => {
        return {
          id: e.productDetailId,
          quantity: e.quantity,
        };
      });
    }
    return [];
  },
);

export const selectSkuId = createSelector(
  [(state: RootState) => state.cartState || initialState],
  state => state.skuId,
);
