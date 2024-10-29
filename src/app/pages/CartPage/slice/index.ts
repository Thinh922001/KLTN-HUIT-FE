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
    resetAndAddMultipleToCart(state, action: PayloadAction<ICart[]>) {
      state.cartItems = [];
      state.totalAmount = 0;
      state.totalQuantity = 0;

      action.payload.forEach(product => {
        state.cartItems.push({
          ...product,
          quantity: product.quantity,
        });

        state.totalAmount += product.price * product.quantity;
        state.totalQuantity += product.quantity;
      });
    },

    removeFromCart(state, action: PayloadAction<string>) {
      const itemIndex = state.cartItems.findIndex(
        item => item.productDetailId === action.payload,
      );

      if (itemIndex >= 0) {
        state.skuId = Number(action.payload);
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
    updateCartHasNoStock(state, action: PayloadAction<number[]>) {
      state.loadingCheckStock = false;
      state.cartItems = state.cartItems.map(item => ({
        ...item,
        hasNoStock: action.payload.includes(Number(item.productDetailId)),
      }));
    },
    loadingCheckStock(state) {
      state.loadingCheckStock = true;
    },
    setCheckStock(state, actions: PayloadAction<boolean>) {
      state.loadingCheckStock = actions.payload;
    },
    setIsOutOfStock(state, actions: PayloadAction<boolean>) {
      state.isOutOfStock = actions.payload;
    },
    setIncrease(
      state,
      actions: PayloadAction<{ id: number; quantity: number }>,
    ) {
      state.isIncreaseLoading = true;
      state.increaseCartId = actions.payload.id;
      state.increaseCartQuantity = actions.payload.quantity;
    },
    setIncreaseLoading(state, actions: PayloadAction<boolean>) {
      state.isIncreaseLoading = actions.payload;
    },
    setDecrease(
      state,
      actions: PayloadAction<{ id: number; quantity: number }>,
    ) {
      state.increaseCartId = actions.payload.id;
      state.increaseCartQuantity = actions.payload.quantity;
    },
    LoadingSyncCart(state) {
      state.IsSyncing = true;
    },
    syncCartLoaded(state) {
      state.IsSyncing = false;
    },
    LoadDeleteCart(state) {
      state.IsSyncing = true;
    },
    deleteCartLoaded(state) {
      state.IsSyncing = false;
    },
  },
});

export const { actions: CartActions, reducer } = slice;

export const useCartSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: CartFromSaga });
  return { actions: slice.actions };
};
