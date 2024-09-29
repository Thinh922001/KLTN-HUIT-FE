import { call, put, select, takeEvery, takeLatest } from 'redux-saga/effects';
import { District, Province } from './type';
import { request } from 'utils/request';
import { LocationBoxActions } from '.';
import { data } from 'app/components/Card/data/card-data';
import {
  selectDistrictId,
  selectDistricts,
  selectProvince,
  selectProVinceId,
} from './selectors';

const BASE_URL = 'https://kltn-huit-production.up.railway.app';

export function* getProvince() {
  try {
    const data = yield call(request, `${BASE_URL}/province`);
    if (data.data.length > 0) {
      yield put(LocationBoxActions.provinceLoaded(data.data as Province[]));
    } else {
      yield put(LocationBoxActions.provinceLoaded([]));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getDistrict() {
  try {
    const provinceId = yield select(selectProVinceId);
    const districts = yield select(selectDistricts);

    if (!provinceId && districts.length) {
      yield put(LocationBoxActions.districtLoaded(districts));
      return;
    }

    const provinceIdToUse =
      (provinceId || (yield select(selectProvince))[0]?.id) ?? 0;
    if (provinceIdToUse) {
      const data = yield call(
        request,
        `${BASE_URL}/district/${provinceIdToUse}`,
      );
      yield put(
        LocationBoxActions.districtLoaded(data.data.length ? data.data : []),
      );
    } else {
      yield put(LocationBoxActions.districtLoaded([]));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* getWard() {
  try {
    let districtId = yield select(selectDistrictId);

    if (!districtId) {
      const districts = yield select(selectDistricts);
      districtId = districts[0].id ?? 0;
    }
    const data = yield call(request, `${BASE_URL}/ward/${districtId}`);

    if (data.data.length > 0) {
      yield put(LocationBoxActions.wardLoaded(data.data as Province[]));
    } else {
      yield put(LocationBoxActions.wardLoaded([]));
    }
  } catch (error) {
    console.log(error);
  }
}

export function* LocationBoxFromSaga() {
  yield takeEvery(LocationBoxActions.loadProvince.type, getProvince);
  yield takeLatest(LocationBoxActions.loadDistrict.type, getDistrict);
  yield takeLatest(LocationBoxActions.loadWard.type, getWard);
}
