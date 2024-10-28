import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import {
  getAuthFromLocalStorage,
  setAuthLocalStorage,
} from 'utils/url/local-storage';
import { AuthState } from './type';

export const initialState: AuthState = getAuthFromLocalStorage();

const slice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setAuth(state, actions: PayloadAction<AuthState>) {
      setAuthLocalStorage(actions.payload);
      state = actions.payload;
    },
  },
});

export const { actions: AuthActions, reducer } = slice;

export const useAuthSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  // useInjectSaga({ key: slice.name, saga: CartFromSaga });
  return { actions: slice.actions };
};
