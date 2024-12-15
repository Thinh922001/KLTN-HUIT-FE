import showErrorToast from 'app/components/Toast/components/Toast-error';
import showSuccessToast from 'app/components/Toast/components/Toast-success';
import { OrderHistoryActions } from 'app/pages/OrderHistory/slice';
import { selectBalance } from 'app/pages/OrderHistory/slice/selector';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { BASE_URL } from 'utils/url';
import { get, post } from 'utils/url/custom-request';
import { OrderDetailActions } from '.';
import {
  selectItemSelected,
  selectOrderDetail,
  selectOrderId,
  selectQuantityReturn,
  selectReasonReturn,
} from './selector';

export function* getOrderDetail() {
  try {
    const orderId = yield select(selectOrderId);
    const res = yield call(get, `${BASE_URL}/order-detail`, {
      params: {
        orderId,
      },
    });
    yield put(OrderDetailActions.orderDetailLoaded(res.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* payment() {
  try {
    const orderId = yield select(selectOrderId);
    const order = yield select(selectOrderDetail);
    const balance = yield select(selectBalance);
    const res = yield call(post, `${BASE_URL}/payment`, {
      orderId,
      method: 'WEBSITE_WALLET',
    });
    yield put(OrderDetailActions.paymentLoadedSuccess());
    showSuccessToast('Thanh toán thành công');
    yield put(
      OrderHistoryActions.setBalance(
        Number(balance) - Number(order.finalAmount),
      ),
    );
  } catch (error) {
    yield put(OrderDetailActions.paymentFail());
    showErrorToast('Thanh toán thất bại');
  }
}

export function* returnOrder() {
  try {
    const orderId = yield select(selectOrderId);
    const item = yield select(selectItemSelected);
    const quantityOrder = yield select(selectQuantityReturn);
    const reason = yield select(selectReasonReturn);
    const res = yield call(post, `${BASE_URL}/return-order`, {
      orderId,
      productDetailId: item.id,
      quantity: quantityOrder,
      reason: reason,
    });
    yield put(OrderDetailActions.returnOrderLoaded());
    showSuccessToast('Thành công xin vui lòng đợi từ 3 - 7 ngày để giải quyết');
  } catch (error) {
    yield put(OrderDetailActions.returnOrderLoaded());
    showErrorToast('Đổi trả thất bại');
  }
}

export function* OrderDetailFormSaga() {
  yield takeLatest(OrderDetailActions.loadingOrderDetail, getOrderDetail);
  yield takeLatest(OrderDetailActions.loadingPayment, payment);
  yield takeLatest(OrderDetailActions.loadingReturnOrder, returnOrder);
}
