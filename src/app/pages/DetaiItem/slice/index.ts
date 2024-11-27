import { PayloadAction } from '@reduxjs/toolkit';
import { IProductDetail, IVariationChosen, ProductDetailState } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ProductDetailFormSaga } from './saga';

export const initialState: ProductDetailState = {
  isLoading: false,
  productId: '0',
  productDetail: {} as IProductDetail,
  variationChosen: {},
  isVariantLoading: false,
  componentActive: 'SPEC',
  isDisableProduct: false,
};

const slice = createSlice({
  name: 'productDetailState',
  initialState,
  reducers: {
    loadProductDetail(state) {
      state.isLoading = true;
      state.productDetail = {} as IProductDetail;
    },
    productDetailLoaded(state, actions: PayloadAction<IProductDetail>) {
      state.isLoading = false;
      state.productDetail = actions.payload;
      state.isDisableProduct =
        !!actions.payload.deletedAt || actions.payload.stock < 1;
    },
    setProductId(state, actions: PayloadAction<string | undefined>) {
      if (actions.payload) {
        state.productId = actions.payload;
      }
    },
    setVariationChosenDf(state) {
      if (state.productDetail.variation) {
        state.variationChosen = Object.assign(
          {},
          ...state.productDetail.variation.map(e => ({
            [e.name]: e.options[0],
          })),
        );
      }
    },
    setVariationChosen(state, actions: PayloadAction<IVariationChosen>) {
      state.variationChosen = { ...state.variationChosen, ...actions.payload };
    },
    loadingVariant(state) {
      state.isVariantLoading = true;
    },
    variantLoaded(state, actions: PayloadAction<IProductDetail>) {
      state.isVariantLoading = false;
      state.productDetail.id = actions.payload.id;
      if (actions.payload.subImg) {
        state.productDetail.subImg = actions.payload.subImg;
      }
      if (actions.payload.price) {
        state.productDetail.price = actions.payload.price;
      }
      state.productDetail.discount = actions.payload.discount;
      state.isDisableProduct =
        !!actions.payload.deletedAt || actions.payload.stock < 1;
    },
    resetProductDetail(state) {
      return initialState;
    },
    setComponentActive(state, actions: PayloadAction<'SPEC' | 'RATE'>) {
      state.componentActive = actions.payload;
    },
  },
});

export const { actions: ProductDetailActions, reducer } = slice;

export const useProductDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ProductDetailFormSaga });
  return { actions: slice.actions };
};
