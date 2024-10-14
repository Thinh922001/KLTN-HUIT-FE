import { call, put, select, takeLatest } from 'redux-saga/effects';
import { selectIdChosen } from './selector';
import { request } from 'utils/request';
import { BASE_URL } from 'utils/url';
import { CartActions } from '.';

export function* addToCart() {
  try {
    const idChosen = yield select(selectIdChosen);

    const data = yield call(request, `${BASE_URL}/cart/add-to-cart`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        detailId: idChosen,
      }),
    });

    if (data.data) {
      yield put(CartActions.addToCartLoaded());
      yield put(CartActions.addToCart(data.data));
    }
  } catch (error) {
    console.error(error);
  }
}

export function* CartFromSaga() {
  yield takeLatest(CartActions.loadAddToCart, addToCart);
}
