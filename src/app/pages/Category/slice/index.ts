import { PayloadAction } from '@reduxjs/toolkit';
import { ProductCateState } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { IBrand, IBreadCrumb, ICard } from 'types/Card';
import { ProductCateFromSaga } from './saga';

export const initialState: ProductCateState = {
  isLoading: false,
  isPageLoading: false,
  isBreadCrumbLoading: false,
  isBrandLoading: false,
  cateId: '0',
  take: 10,
  skip: 0,
  total: 0,
  isNext: true,
  itemPerPage: 10,
  products: [],
  breadCrumbs: [],
  brand: [],
};

const slice = createSlice({
  name: 'productCateState',
  initialState,
  reducers: {
    loadProduct(state) {
      state.isLoading = true;
    },
    productLoaded(state, actions: PayloadAction<ICard[]>) {
      state.isLoading = false;
      state.products = [...state.products, ...actions.payload];
    },
    nextPage(state) {
      state.skip = state.skip + state.itemPerPage;
    },
    loadingPage(state) {
      state.isPageLoading = true;
    },
    pageLoaded(state, actions: PayloadAction<ICard[]>) {
      state.isPageLoading = false;
      state.products = [...state.products, ...actions.payload];
    },
    setCateId(state, actions: PayloadAction<string | undefined>) {
      if (actions.payload) {
        state.cateId = actions.payload;
      }
    },
    setTotal(state, action: PayloadAction<number>) {
      state.total = action.payload;
    },
    loadBreadCrumb(state) {
      state.isBreadCrumbLoading = true;
      state.breadCrumbs = [];
    },
    breadCrumbLoaded(state, actions: PayloadAction<IBreadCrumb[]>) {
      state.isBreadCrumbLoading = false;
      state.breadCrumbs = actions.payload;
    },
    loadingBrand(state) {
      state.isBrandLoading = true;
      state.brand = [];
    },
    brandLoaded(state, actions: PayloadAction<IBrand[]>) {
      state.isBrandLoading = false;
      state.brand = actions.payload;
    },
  },
});

export const { actions: ProductCateActions, reducer } = slice;

export const useProductCateSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ProductCateFromSaga });
  return { actions: slice.actions };
};
