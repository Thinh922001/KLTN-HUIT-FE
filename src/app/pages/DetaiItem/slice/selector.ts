import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectProductId = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => state.productId,
);

export const selectProductDetail = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => state.productDetail,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => state.isLoading,
);

export const selectSubImg = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => {
    if (
      state.productDetail.subImg?.length &&
      state.productDetail.subImg?.length > 0
    ) {
      return state.productDetail.subImg;
    }
    return [];
  },
);

export const selectSpecData = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => {
    if (state.productDetail.specifications) {
      return state.productDetail.specifications;
    }
    return [];
  },
);

export const selectTitle = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => {
    if (state.productDetail.title) {
      return state.productDetail.title;
    }
    return '';
  },
);

export const selectVariant = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => {
    if (state.productDetail.variation) {
      return state.productDetail.variation;
    }
    return [];
  },
);

export const selectVariantChosen = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => state.variationChosen,
);

export const selectProductDetailId = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => state.productDetail.id,
);

export const selectImgProductDetail = createSelector(
  [(state: RootState) => state.productDetailState || initialState],
  state => state.productDetail.img,
);
