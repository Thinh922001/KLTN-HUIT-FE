import { PayloadAction } from '@reduxjs/toolkit';
import { ICate, IHomePageState } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ICard } from 'types/Card';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { HomePageFormSaga } from './saga';

export const initialState: IHomePageState = {
  product: [],
  cate: [],
  isCateLoading: false,
  isProductLoading: false,
};

const slice = createSlice({
  name: 'homePageState',
  initialState,
  reducers: {
    loadProduct(state) {
      state.product = [];
      state.isProductLoading = true;
    },
    productLoaded(state, actions: PayloadAction<ICard[]>) {
      state.product = actions.payload;
      state.isProductLoading = false;
    },
    loadCate(state) {
      state.cate = [];
      state.isCateLoading = true;
    },
    cateLoaded(state, actions: PayloadAction<ICate[]>) {
      state.cate = actions.payload;
      state.isCateLoading = false;
    },
  },
});

export const { actions: HomePageActions, reducer } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: HomePageFormSaga });
  return { actions: slice.actions };
};
