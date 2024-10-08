import { call, put, select, takeLatest } from 'redux-saga/effects';
import { selectCateId, selectSkip, selectTake } from './selector';
import { request } from 'utils/request';
import { BASE_URL } from 'utils/url';
import { createQueryString } from 'utils/string';
import { ProductCateActions } from '.';

export function* getProductCate() {
  try {
    const cateId = yield select(selectCateId);
    const take = yield select(selectTake);
    const skip = yield select(selectSkip);

    const queryString = createQueryString({ cateId, take, skip });

    const data = yield call(request, `${BASE_URL}/category?${queryString}`);

    if (data.data.data.length > 0) {
      yield put(ProductCateActions.productLoaded(data.data.data));
      yield put(ProductCateActions.setTotal(data.data.paging.total));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getProductPageCate() {
  try {
    const cateId = yield select(selectCateId);
    const take = yield select(selectTake);
    const skip = yield select(selectSkip);

    const queryString = createQueryString({ cateId, take, skip });

    const data = yield call(request, `${BASE_URL}/category?${queryString}`);

    if (data.data.data.length > 0) {
      yield put(ProductCateActions.pageLoaded(data.data.data));
      yield put(ProductCateActions.setTotal(data.data.paging.total));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* ProductCateFromSaga() {
  yield takeLatest(ProductCateActions.loadProduct, getProductCate);
  yield takeLatest(ProductCateActions.loadingPage, getProductPageCate);
}
