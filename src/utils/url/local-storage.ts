import { CartState } from 'app/pages/CartPage/slice/type';
import { AuthState } from 'auth/type';

export const getCartFromLocalStorage = (): CartState => {
  const serializedState = localStorage.getItem('cart');
  if (serializedState) {
    const cartState: CartState = JSON.parse(serializedState);
    if (cartState && Array.isArray(cartState.cartItems)) {
      return cartState;
    }
  }

  return {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
    isCartLoadDone: false,
    productIdChosen: '',
    loadingCheckStock: false,
    isOutOfStock: false,
    increaseCartId: 0,
    increaseCartQuantity: 0,
    isIncreaseLoading: false,
  };
};

export const getAuthFromLocalStorage = (): AuthState => {
  const serializedState = localStorage.getItem('auth');

  if (serializedState) {
    const authState: AuthState = JSON.parse(serializedState);
    if (authState.auth && authState.user) {
      return authState;
    }
  }
  return {
    user: { id: 0 },
    auth: { accessToken: '', refreshToken: '' },
  };
};

export const setAuthLocalStorage = (auth: AuthState) => {
  try {
    const serializedState = JSON.stringify(auth);
    localStorage.setItem('auth', serializedState);
  } catch (e) {
    console.warn('Could not serialize cart state', e);
  }
};

export const isAuthenticated = () => {
  return !!localStorage.getItem('auth');
};
