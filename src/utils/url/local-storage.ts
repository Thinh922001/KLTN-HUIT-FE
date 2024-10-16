import { CartState } from 'app/pages/CartPage/slice/type';

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
