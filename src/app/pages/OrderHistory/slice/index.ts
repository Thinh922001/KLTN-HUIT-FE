import { createSlice } from 'utils/@reduxjs/toolkit';
import { OrderHistoryState } from './type';
import { PayloadAction } from '@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';

export const initialState: OrderHistoryState = {
  MenuRightState: 'ORDER',
};

const slice = createSlice({
  name: 'orderHistoryState',
  initialState,
  reducers: {
    setMenuRight(state, actions: PayloadAction<string>) {
      state.MenuRightState = actions.payload;
    },
  },
});

export const { actions: OrderHistoryActions, reducer } = slice;

export const useOrderHistorySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  // useInjectSaga({ key: slice.name, saga: LoginFormSaga });
  return { actions: slice.actions };
};
