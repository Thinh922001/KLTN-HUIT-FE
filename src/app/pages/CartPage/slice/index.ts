import { PayloadAction } from '@reduxjs/toolkit';
import { CartState, ICart } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { CartFromSaga } from './saga';
import { getCartFromLocalStorage } from 'utils/url/local-storage';

export const initialState: CartState = getCartFromLocalStorage();

const slice = createSlice({
  name: 'cartState',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<ICart>) {
      const itemIndex = state.cartItems.findIndex(
        item => item.productDetailId === action.payload.productDetailId,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += action.payload.quantity;
      } else {
        state.cartItems.push({
          ...action.payload,
          quantity: action.payload.quantity,
        });
      }
      state.totalAmount += action.payload.price * action.payload.quantity;
      state.totalQuantity += action.payload.quantity;
    },
    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.cartItems.findIndex(
        item => item.productDetailId === action.payload,
      );

      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        state.totalAmount -= item.price * item.quantity;
        state.totalQuantity -= item.quantity;
        state.cartItems.splice(itemIndex, 1);
      }
    },
    decreaseQuantity(state, action: PayloadAction<string>) {
      const itemIndex = state.cartItems.findIndex(
        item => item.productDetailId === action.payload,
      );

      if (itemIndex >= 0) {
        const item = state.cartItems[itemIndex];
        if (item.quantity > 1) {
          item.quantity -= 1;
          state.totalAmount -= item.price;
          state.totalQuantity -= 1;
        } else {
          state.cartItems.splice(itemIndex, 1);
          state.totalAmount -= item.price;
          state.totalQuantity -= 1;
        }
      }
    },
    increaseQuantity(state, action: PayloadAction<string>) {
      const itemIndex = state.cartItems.findIndex(
        item => item.productDetailId === action.payload,
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        state.totalAmount += state.cartItems[itemIndex].price;
        state.totalQuantity += 1;
      }
    },
    setCart(state, action: PayloadAction<CartState>) {
      if (action.payload) {
        state.cartItems = action.payload.cartItems;
        state.totalAmount = action.payload.totalAmount;
        state.totalQuantity = action.payload.totalQuantity;
      }
    },

    clearCart(state) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;
    },
    loadAddToCart(state) {
      state.isCartLoadDone = false;
    },
    addToCartLoaded(state) {
      state.isCartLoadDone = true;
    },
    setProductIdChosen(state, actions: PayloadAction<string>) {
      state.productIdChosen = actions.payload;
    },
    resetCartLoadDone(state) {
      state.isCartLoadDone = false;
    },
  },
});

export const { actions: CartActions, reducer } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: CartFromSaga });
  return { actions: slice.actions };
};
