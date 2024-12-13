import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  selectCateId,
  selectFilters,
  selectOrderBy,
  selectSkip,
  selectTake,
} from './selector';
import { request } from 'utils/request';
import { BASE_URL } from 'utils/url';
import { createQueryString } from 'utils/string';
import { ProductCateActions } from '.';
import { QueryParams } from 'types/Card';
import { get } from 'utils/url/custom-request';

export function* getProductCate() {
  try {
    const cateId = yield select(selectCateId);
    const take = yield select(selectTake);
    const skip = yield select(selectSkip);

    const orderBy = yield select(selectOrderBy);

    const queryString = createQueryString({ cateId, take, skip, orderBy });

    const data = yield call(request, `${BASE_URL}/category?${queryString}`);

    if (data.data.data.length > 0) {
      yield put(ProductCateActions.productLoaded(data.data.data));
      yield put(ProductCateActions.setTotal(data.data.paging.total));
    } else {
      yield put(ProductCateActions.productLoaded([]));
      yield put(ProductCateActions.setTotal(0));
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
    const orderBy = yield select(selectOrderBy);
    const filters = yield select(selectFilters);

    const queryParams: QueryParams = { cateId, take, skip, orderBy };

    if (filters.brand.length > 0) {
      queryParams.filters = filters;
    }

    const queryString = createQueryString(queryParams);

    const data = yield call(request, `${BASE_URL}/category?${queryString}`);

    if (data.data.data.length > 0) {
      yield put(ProductCateActions.pageLoaded(data.data.data));
      yield put(ProductCateActions.setTotal(data.data.paging.total));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getBreadCrumbs() {
  try {
    const cateId = yield select(selectCateId);

    const queryString = createQueryString({ id: cateId, type: 'CATE' });

    const data = yield call(request, `${BASE_URL}/breadcrumb?${queryString}`);

    if (data.data) {
      yield put(ProductCateActions.breadCrumbLoaded(data.data));
    } else {
      yield put(ProductCateActions.breadCrumbLoaded([]));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getBrand() {
  try {
    const cateId = yield select(selectCateId);

    const queryString = createQueryString({ cateId });

    const data = yield call(request, `${BASE_URL}/brand?${queryString}`);

    if (data.data) {
      yield put(ProductCateActions.brandLoaded(data.data));
    } else {
      yield put(ProductCateActions.brandLoaded([]));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getCateBanner() {
  try {
    const cateId = yield select(selectCateId);
    const banner = yield call(get, `${BASE_URL}/banner-cate`, {
      params: {
        cateId,
      },
    });
    yield put(ProductCateActions.bannerLoaded(banner.data.data));
  } catch (error) {
    console.log(error);
  }
}

export function* ProductCateFromSaga() {
  yield takeLatest(ProductCateActions.loadProduct, getProductCate);
  yield takeLatest(ProductCateActions.loadingPage, getProductPageCate);
  yield takeLatest(ProductCateActions.loadBreadCrumb, getBreadCrumbs);
  yield takeLatest(ProductCateActions.loadingBrand, getBrand);
  yield takeLatest(ProductCateActions.loadingBanner, getCateBanner);
}
