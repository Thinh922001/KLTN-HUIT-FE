import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';

export interface OverlayState {
  isActive: boolean;
}

export const initialState: OverlayState = {
  isActive: false,
};

const slice = createSlice({
  name: 'overLay',
  initialState,
  reducers: {
    showOverlay(state) {
      state.isActive = true;
    },
    hideOverlay(state) {
      state.isActive = false;
    },
  },
});

export const { actions: OverlayActions, reducer } = slice;

export const useOverlaySlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};
