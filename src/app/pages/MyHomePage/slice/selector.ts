import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectProduct = createSelector(
  [(state: RootState) => state.homePageState || initialState],
  state => state.product,
);

export const selectCate = createSelector(
  [(state: RootState) => state.homePageState || initialState],
  state => state.cate,
);

export const selectCateLoading = createSelector(
  [(state: RootState) => state.homePageState || initialState],
  state => state.isCateLoading,
);

export const selectProductLoading = createSelector(
  [(state: RootState) => state.homePageState || initialState],
  state => state.isProductLoading,
);
