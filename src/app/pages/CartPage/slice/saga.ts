import { OutOfStockToast } from 'app/components/Toast';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from 'utils/request';
import { BASE_URL } from 'utils/url';
import { CartActions } from '.';
import {
  selectCartItems,
  selectIdChosen,
  selectIncreaseId,
  selectIncreaseQuantity,
  selectSkuId,
  selectSyncCart,
} from './selector';
import { del, get, post } from 'utils/url/custom-request';
import showErrorToast from 'app/components/Toast/components/Toast-error';
import { isAuthenticated } from 'utils/url/local-storage';

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
      if (isAuthenticated()) yield put(CartActions.LoadingSyncCart());
    }
  } catch (error) {
    console.error(error);
  }
}

export function* checkStock() {
  try {
    if (isAuthenticated()) return;
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
        if (isAuthenticated()) yield put(CartActions.LoadingSyncCart());
      } else {
        yield OutOfStockToast();
        yield put(CartActions.setIncreaseLoading(false));
      }
    }
  } catch (error) {
    console.error(error);
  }
}

export function* checkDecreaseStock() {
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
      yield put(CartActions.updateCartHasNoStock(response.data.productIds));
      yield put(CartActions.decreaseQuantity(detailId));
      if (isAuthenticated()) yield put(CartActions.LoadingSyncCart());
    }
  } catch (error) {}
}

export function* syncCart() {
  try {
    const syncData = yield select(selectSyncCart);

    yield call(post, `${BASE_URL}/cart/sync`, {
      carts: syncData,
    });

    yield put(CartActions.syncCartLoaded());
  } catch (error) {
    showErrorToast('Có lỗi xảy ra');
  }
}

export function* deleteCart() {
  try {
    if (!isAuthenticated()) return;

    const skuId = yield select(selectSkuId);
    if (skuId) {
      yield call(del, `${BASE_URL}/cart`, { data: { skuId } });
    }

    yield put(CartActions.deleteCartLoaded());
  } catch (error) {
    showErrorToast('Có lỗi xảy ra');
  }
}

export function* getCart() {
  try {
    if (!isAuthenticated()) return;
    const response = yield call(get, `${BASE_URL}/cart`);

    yield put(CartActions.resetAndAddMultipleToCart(response.data.data));
  } catch (error) {
    showErrorToast('Có lỗi xảy ra');
  }
}

export function* CartFromSaga() {
  yield takeLatest(CartActions.loadAddToCart, addToCart);
  yield takeLatest(CartActions.setIncrease, checkOutOfStock);
  yield takeLatest(CartActions.setDecrease, checkDecreaseStock);
  yield takeLatest(CartActions.LoadingSyncCart, syncCart);
  yield takeLatest(CartActions.LoadDeleteCart, deleteCart);
  yield all([call(checkStock), call(getCart)]);
}
