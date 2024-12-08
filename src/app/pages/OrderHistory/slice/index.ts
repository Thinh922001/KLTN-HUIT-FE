import { createSlice } from 'utils/@reduxjs/toolkit';
import { OrderHistoryState } from './type';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { IOrderHistory } from 'types/OrderHistory';
import { OrderHistoryFromSaga } from './saga';

export const initialState: OrderHistoryState = {
  MenuRightState: 'ORDER',
  orders: [],
  isLoading: false,
  take: 3,
  skip: 0,
  total: 0,
};

const slice = createSlice({
  name: 'orderHistoryState',
  initialState,
  reducers: {
    setMenuRight(state, actions: PayloadAction<string>) {
      state.MenuRightState = actions.payload;
    },
    setTotal(state, actions: PayloadAction<number>) {
      state.total = actions.payload;
    },
    loadOrder(state) {
      state.orders = [];
      state.isLoading = true;
    },
    orderLoaded(state, actions: PayloadAction<IOrderHistory[]>) {
      state.orders = [...state.orders, ...actions.payload];
      state.isLoading = false;
    },
    loadMoreOrder(state) {
      state.skip += state.take;
      state.isLoading = true;
    },
  },
});

export const { actions: OrderHistoryActions, reducer } = slice;

export const useOrderHistorySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderHistoryFromSaga });
  return { actions: slice.actions };
};
