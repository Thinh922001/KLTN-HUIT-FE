import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import {
  selectCartItems,
  selectIdChosen,
  selectIncreaseId,
  selectIncreaseQuantity,
} from './selector';
import { request } from 'utils/request';
import { BASE_URL } from 'utils/url';
import { CartActions } from '.';
import { ICart } from './type';
import { OutOfStockToast } from 'app/components/Toast';

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

export function* checkStock() {
  try {
    const cartItems = yield select(selectCartItems);
    if (cartItems.length && cartItems.length > 0) {
      const response = yield call(request, `${BASE_URL}/cart/manual-quantity`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          cartItems: cartItems.map(e => {
            return {
              productDetailId: e.productDetailId,
              quantity: e.quantity,
            };
          }),
        }),
      });

      yield put(CartActions.updateCartHasNoStock(response.data.productIds));
    }
  } catch (error) {
    yield put(CartActions.setCheckStock(false));
    console.error(error);
  }
}

export function* checkOutOfStock() {
  try {
    const detailId = yield select(selectIncreaseId);

    const quantity = yield select(selectIncreaseQuantity);

    const response = yield call(request, `${BASE_URL}/cart/manual-quantity`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        cartItems: [
          {
            productDetailId: detailId,
            quantity: quantity,
          },
        ],
      }),
    });

    if (response.data) {
      if (response.data.productIds.length === 0) {
        yield put(CartActions.increaseQuantity(detailId));
        yield put(CartActions.setIncreaseLoading(false));
      } else {
        yield OutOfStockToast();
        yield put(CartActions.setIncreaseLoading(false));
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export function* CartFromSaga() {
  yield takeLatest(CartActions.loadAddToCart, addToCart);
  yield takeLatest(CartActions.setIncrease, checkOutOfStock);
  yield all([call(checkStock)]);
}
