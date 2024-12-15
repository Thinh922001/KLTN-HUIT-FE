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
  userBalance: 0,
  isLoadingBalance: false,
  amount: 0,
  payUrl: '',
  topUpLoading: false,
  orderIdCancel: 0,
  fliterBy: '',
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
    loadingUserBalance(state) {
      state.isLoadingBalance = true;
    },
    setBalance(state, actions: PayloadAction<number>) {
      state.userBalance = actions.payload;
    },
    balanceLoaded(state, actions: PayloadAction<number>) {
      state.userBalance = actions.payload;
      state.isLoadingBalance = false;
    },
    setAmount(state, actions: PayloadAction<number>) {
      state.amount = actions.payload;
    },
    loadingTopUp(state) {
      state.topUpLoading = true;
    },
    topUpLoaded(state, actions: PayloadAction<string>) {
      state.topUpLoading = false;
      state.payUrl = actions.payload;
    },
    loadingCancelOrder(state) {
      state.orders = state.orders.map(e => ({
        ...e,
        isLoading: e.id === state.orderIdCancel,
      }));
    },
    cancelOrderLoaded(state) {
      state.orders = state.orders.map(e => ({
        ...e,
        isLoading: false,
        status: e.id === state.orderIdCancel ? 'Canceled' : e.status,
      }));
      state.orderIdCancel = 0;
    },
    cancelOrderFail(state) {
      state.orders = state.orders.map(e => ({
        ...e,
        isLoading: false,
      }));
    },
    setCancelOrderId(state, actions: PayloadAction<number>) {
      state.orderIdCancel = actions.payload;
    },
    setFilter(state, actions: PayloadAction<string>) {
      state.fliterBy = actions.payload;
    },
  },
});

export const { actions: OrderHistoryActions, reducer } = slice;

export const useOrderHistorySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderHistoryFromSaga });
  return { actions: slice.actions };
};
