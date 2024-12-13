import { PayloadAction } from '@reduxjs/toolkit';
import { ProductCateState } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { IBrand, IBreadCrumb, ICard, IOrderBy } from 'types/Card';
import { ProductCateFromSaga } from './saga';

export const initialState: ProductCateState = {
  isLoading: false,
  isPageLoading: false,
  isBreadCrumbLoading: false,
  isBrandLoading: false,
  isLoadingBanner: false,
  cateId: '0',
  take: 10,
  skip: 0,
  total: 0,
  isNext: true,
  itemPerPage: 10,
  products: [],
  breadCrumbs: [],
  brand: [],
  orderBy: { trend: 'DESC' },
  filters: { brand: [] },
  cateBanner: [],
};

const slice = createSlice({
  name: 'productCateState',
  initialState,
  reducers: {
    loadProduct(state) {
      state.isLoading = true;
      state.products = [];
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
    setOrderBy(state, actions: PayloadAction<IOrderBy>) {
      state.orderBy = actions.payload;
      state.take = 10;
      state.skip = 0;
      state.products = [];
    },
    setFilter(state, actions: PayloadAction<number>) {
      state.filters.brand.push(actions.payload);
      state.take = 10;
      state.skip = 0;
      state.products = [];
    },
    popFilter(state, actions: PayloadAction<number>) {
      state.filters.brand = state.filters.brand.filter(
        e => e !== actions.payload,
      );
      state.take = 10;
      state.skip = 0;
      state.products = [];
    },
    resetProductCate(state) {
      return initialState;
    },
    loadingBanner(state) {
      state.isLoadingBanner = true;
      state.cateBanner = [];
    },
    bannerLoaded(state, actions: PayloadAction<string[]>) {
      state.isLoadingBanner = false;
      state.cateBanner = actions.payload;
    },
  },
});

export const { actions: ProductCateActions, reducer } = slice;

export const useProductCateSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: ProductCateFromSaga });
  return { actions: slice.actions };
};
