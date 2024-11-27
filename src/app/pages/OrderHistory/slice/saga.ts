import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { selectSkip, selectTake } from './selector';
import { get } from 'utils/url/custom-request';
import { BASE_URL } from 'utils/url';
import { OrderHistoryActions } from '.';

export function* getOrder() {
  try {
    yield delay(500);
    const take = yield select(selectTake);
    const skip = yield select(selectSkip);

    const response = yield call(get, `${BASE_URL}/order`, {
      params: {
        take,
        skip,
      },
    });

    yield put(OrderHistoryActions.orderLoaded(response.data.data.data));
    yield put(OrderHistoryActions.setTotal(response.data.data.paging.total));
  } catch (error) {
    yield put(OrderHistoryActions.orderLoaded([]));
  }
}

export function* OrderHistoryFromSaga() {
  yield takeLatest(OrderHistoryActions.loadOrder, getOrder);
  yield takeLatest(OrderHistoryActions.loadMoreOrder, getOrder);
}
