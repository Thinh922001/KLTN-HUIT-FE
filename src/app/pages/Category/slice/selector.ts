import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectCateId = createSelector(
  [(state: RootState) => state.productCateState || initialState],
  state => state.cateId,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.productCateState || initialState],
  state => state.isLoading,
);

export const selectTake = createSelector(
  [(state: RootState) => state.productCateState || initialState],
  state => state.take,
);

export const selectSkip = createSelector(
  [(state: RootState) => state.productCateState || initialState],
  state => state.skip,
);

export const selectProductCate = createSelector(
  [(state: RootState) => state.productCateState || initialState],
  state => state.products,
);

export const selectIsLoadingPage = createSelector(
  [(state: RootState) => state.productCateState || initialState],
  state => state.isPageLoading,
);

export const selectTotal = createSelector(
  [(state: RootState) => state.productCateState || initialState],
  state => state.total,
);
