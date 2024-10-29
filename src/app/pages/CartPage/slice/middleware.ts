import { Middleware } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { isAuthenticated } from 'utils/url/local-storage';

export const localStorageCartMiddleware: Middleware<{}, RootState> =
  store => next => action => {
    const result = next(action);

    const state = store.getState();
    const cartState = state.cartState;

    try {
      const serializedState = JSON.stringify(cartState);
      if (isAuthenticated()) {
        localStorage.setItem('cart-auth', serializedState);
      } else {
        localStorage.setItem('cart', serializedState);
      }
    } catch (e) {
      console.warn('Could not serialize cart state', e);
    }

    return result;
  };
