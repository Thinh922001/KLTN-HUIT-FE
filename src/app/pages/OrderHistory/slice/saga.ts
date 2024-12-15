import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import {
  selectAnount,
  selectCancelOrderId,
  selectFilter,
  selectSkip,
  selectTake,
} from './selector';
import { get, post } from 'utils/url/custom-request';
import { BASE_URL } from 'utils/url';
import { OrderHistoryActions } from '.';
import showErrorToast from 'app/components/Toast/components/Toast-error';
import showSuccessToast from 'app/components/Toast/components/Toast-success';

export function* getOrder() {
  try {
    yield delay(500);
    const take = yield select(selectTake);
    const skip = yield select(selectSkip);

    const filterBy = yield select(selectFilter);

    let query: any = { take, skip };

    if (filterBy) {
      query.filterBy = filterBy;
    }

    console.log(query);

    let response = yield call(get, `${BASE_URL}/order`, {
      params: {
        ...query,
      },
    });

    yield put(OrderHistoryActions.orderLoaded(response.data.data.data));
    yield put(OrderHistoryActions.setTotal(response.data.data.paging.total));
  } catch (error) {
    yield put(OrderHistoryActions.orderLoaded([]));
  }
}

export function* getBalance() {
  try {
    const response = yield call(get, `${BASE_URL}/wallets`);
    yield put(OrderHistoryActions.balanceLoaded(response.data.data.balance));
  } catch (error) {
    console.error(error);
  }
}

export function* topUp() {
  try {
    const amount = yield select(selectAnount);

    if (amount) {
      const res = yield call(post, `${BASE_URL}/top-up`, {
        amount: String(amount),
      });
      yield put(OrderHistoryActions.topUpLoaded(res.data.data.payUrl));
    }
  } catch (error) {
    yield put(OrderHistoryActions.topUpLoaded(''));
    showErrorToast('Có lỗi thanh toán');
  }
}

export function* cancelOrderUser() {
  try {
    const orderIdCancel = yield select(selectCancelOrderId);
    if (!orderIdCancel) return;
    const res = yield call(post, `${BASE_URL}/cancel-order`, {
      orderId: orderIdCancel,
    });
    yield put(OrderHistoryActions.cancelOrderLoaded());
    showSuccessToast('Hủy hóa đơn thành công ');
  } catch (error) {
    yield put(OrderHistoryActions.cancelOrderFail());
    showErrorToast('Hủy hóa đơn thất bại');
  }
}

export function* OrderHistoryFromSaga() {
  yield takeLatest(OrderHistoryActions.loadOrder, getOrder);
  yield takeLatest(OrderHistoryActions.loadMoreOrder, getOrder);
  yield takeLatest(OrderHistoryActions.loadingUserBalance, getBalance);
  yield takeLatest(OrderHistoryActions.loadingTopUp, topUp);
  yield takeLatest(OrderHistoryActions.loadingCancelOrder, cancelOrderUser);
}
