import { call, put, select, takeLatest } from 'redux-saga/effects';
import { selectProductId } from './selector';
import { createQueryString } from 'utils/string';
import { BASE_URL } from 'utils/url';
import { request } from 'utils/request';
import { ProductDetailActions } from '.';

export function* getProductDetail() {
  try {
    const productId = yield select(selectProductId);

    const queryString = createQueryString({ productId });

    const data = yield call(
      request,
      `${BASE_URL}/product-detail?${queryString}`,
    );

    if (data.data) {
      yield put(ProductDetailActions.productDetailLoaded(data.data));
    } else {
      yield put(ProductDetailActions.productDetailLoaded(Object.create({})));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* ProductDetailFormSaga() {
  yield takeLatest(ProductDetailActions.loadProductDetail, getProductDetail);
}
