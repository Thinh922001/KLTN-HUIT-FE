import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { CommentBoxState } from './type';
import { PayloadAction } from '@reduxjs/toolkit';

export const initialState: CommentBoxState = {
  isShow: false,
  startRate: 0,
  stateBoxComment: 'REVIEW',
};

const slice = createSlice({
  name: 'commentBoxState',
  initialState,
  reducers: {
    setIsShow(state) {
      state.isShow = !state.isShow;
    },
    setStartRate(state, actions: PayloadAction<number>) {
      state.startRate = actions.payload;
    },
    setStateBoxComment(state, actions: PayloadAction<string>) {
      state.stateBoxComment = actions.payload;
    },
    resetDefaultState(state) {
      Object.assign(state, initialState);
    },
  },
});

export const { actions: CommentBoxAction, reducer } = slice;

export const useCommentBoxSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  // useInjectSaga({ key: slice.name, saga: LoginFormSaga });
  return { actions: slice.actions };
};
