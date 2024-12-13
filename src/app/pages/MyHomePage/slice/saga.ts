import { call, put, takeLatest } from 'redux-saga/effects';
import { BASE_URL } from 'utils/url';
import { get } from 'utils/url/custom-request';
import { HomePageActions } from '.';

export function* loadProductSuggest() {
  try {
    const data = yield call(get, `${BASE_URL}/product/random`);

    yield put(HomePageActions.productLoaded(data.data.data));
  } catch (error) {
    console.error(error);
  }
}

export function* loadCate() {
  try {
    const data = yield call(get, `${BASE_URL}/user/category`);

    yield put(HomePageActions.cateLoaded(data.data.data));
  } catch (error) {
    console.error(error);
  }
}

export function* loadBanner() {
  try {
    const banner = yield call(get, `${BASE_URL}/banner`);

    yield put(HomePageActions.bannerLoaded(banner.data.data));
  } catch (error) {
    console.error(error);
  }
}

export function* loadCateType() {
  try {
    const cateType = yield call(get, `${BASE_URL}/cate-type`);
    yield put(HomePageActions.cateTypeLoaded(cateType.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* HomePageFormSaga() {
  yield takeLatest(HomePageActions.loadProduct, loadProductSuggest);
  yield takeLatest(HomePageActions.loadCate, loadCate);
  yield takeLatest(HomePageActions.loadingBanner, loadBanner);
  yield takeLatest(HomePageActions.loadingCateType, loadCateType);
}
