import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectSaga } from 'redux-injectors';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { OrderDetailFormSaga } from './saga';
import { OrderDetail, OrderDetailState } from './type';

export const initialState: OrderDetailState = {
  data: null,
  isLoading: false,
  orderId: 0,
  isPaymentLoading: false,
  isPaymentFail: false,
  selectItemId: 0,
  quantityReturn: 1,
  reasonReturn: 'Sản phẩm bị lỗi',
  isReturnOrderLoading: false,
  img: [],
};

// isPaid , payMentMethod , balance
const slice = createSlice({
  name: 'orderDetailState',
  initialState,
  reducers: {
    loadingOrderDetail(state) {
      state.isLoading = true;
      state.data = null;
    },
    orderDetailLoaded(state, actions: PayloadAction<OrderDetail>) {
      state.isLoading = false;
      state.data = actions.payload;
    },
    setOrderId(state, actions: PayloadAction<number>) {
      state.orderId = actions.payload;
    },
    loadingPayment(state) {
      state.isPaymentLoading = true;
    },
    setPaymentFail(state, actions: PayloadAction<boolean>) {
      state.isPaymentFail = actions.payload;
    },
    paymentLoadedSuccess(state) {
      state.isLoading = false;
      if (state.data?.paymentMethod) {
        state.data.paymentMethod = 'WEBSITE_WALLET';
      }
      if (state.data && state.data.isPaid !== undefined) {
        state.data.isPaid = true;
      }
      if (state.data && state.data.paidAmount !== undefined) {
        state.data.paidAmount = Number(state.data.finalAmount);
      }
    },
    paymentFail(state) {
      state.isLoading = false;
      state.isPaymentLoading = false;
      state.isPaymentFail = true;
    },
    setItemSelected(state, actions: PayloadAction<number>) {
      state.selectItemId = actions.payload;
    },
    setQuantityReturn(state, actions: PayloadAction<number>) {
      state.quantityReturn = actions.payload;
    },
    setReasonReturn(state, actions: PayloadAction<string>) {
      state.reasonReturn = actions.payload;
    },
    loadingReturnOrder(state) {
      state.isReturnOrderLoading = true;
    },
    returnOrderLoaded(state) {
      state.isReturnOrderLoading = false;
    },
    setImgReturnOrder(state, actions: PayloadAction<string[]>) {
      state.img = actions.payload;
    },
    overWriteImgReturnOrder(state, actions: PayloadAction<string>) {
      state.img = [...state.img, actions.payload];
    },
    resetReturnOrderState(state) {
      state.img = [];
      state.reasonReturn = 'Sản phẩm bị lỗi';
    },
  },
});

export const { actions: OrderDetailActions, reducer } = slice;

export const useOrderDetailSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: OrderDetailFormSaga });
  return { actions: slice.actions };
};
