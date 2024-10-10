import { PayloadAction } from '@reduxjs/toolkit';
import { IProductDetail, ProductDetailState } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { ProductDetailFormSaga } from './saga';

export const initialState: ProductDetailState = {
  isLoading: false,
  productId: '0',
  productDetail: {} as IProductDetail,
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
    },
    setProductId(state, actions: PayloadAction<string | undefined>) {
      if (actions.payload) {
        state.productId = actions.payload;
      }
    },
  },
});

export const { actions: ProductDetailActions, reducer } = slice;

export const useProductDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ProductDetailFormSaga });
  return { actions: slice.actions };
};
