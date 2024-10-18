import { call, delay, put, select, takeLatest } from 'redux-saga/effects';
import { selectKeyWord } from './selector';
import { request } from 'utils/request';
import { BASE_URL } from 'utils/url';
import { createQueryString } from 'utils/string';
import { SearchActions } from '.';

export function* getSearchProduct() {
  try {
    yield delay(500);
    const keyWord = yield select(selectKeyWord);

    const queryString = createQueryString({ keyWord });

    if (keyWord) {
      const data = yield call(request, `${BASE_URL}/search?${queryString}`);

      if (data.data.length > 0) {
        yield put(SearchActions.searchLoaded(data.data));
      } else {
        yield put(SearchActions.searchLoaded([]));
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export function* SearchFromSaga() {
  yield takeLatest(SearchActions.loadSearch.type, getSearchProduct);
}
