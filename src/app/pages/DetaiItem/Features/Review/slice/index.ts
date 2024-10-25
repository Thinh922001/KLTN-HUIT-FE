import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { CommentBoxState, IComment } from './type';
import { PayloadAction } from '@reduxjs/toolkit';
import { boxCommentFromSaga } from './saga';

export const initialState: CommentBoxState = {
  isShow: false,
  startRate: 0,
  comment: '',
  phone: '',
  fullName: '',
  images: [],
  take: 5,
  skip: 0,
  stateBoxComment: 'REVIEW',
  isLoading: false,
  comments: [],
  total: 0,
  loadingCreateCmt: false,
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
      state.isShow = false;
      state.startRate = 0;
      state.stateBoxComment = 'REVIEW';
      state.images.forEach(e => URL.revokeObjectURL(e));
      state.images = [];
    },
    loadComment(state) {
      state.isLoading = true;
    },
    LoadMoreComment(state) {
      state.isLoading = true;
      state.skip += state.take;
    },
    commentLoaded(state, actions: PayloadAction<IComment[]>) {
      state.isLoading = false;
      state.comments = [...state.comments, ...actions.payload];
    },
    setTotal(state, actions: PayloadAction<number>) {
      state.total = actions.payload;
    },
    setComment(state, actions: PayloadAction<string>) {
      state.comment = actions.payload;
    },
    setImg(state, actions: PayloadAction<string[]>) {
      state.images = actions.payload;
    },
    overWriteImg(state, actions: PayloadAction<string>) {
      state.images = [...state.images, actions.payload];
    },
    setPhone(state, actions: PayloadAction<string>) {
      state.phone = actions.payload;
    },
    setFullName(state, actions: PayloadAction<string>) {
      state.fullName = actions.payload;
    },
    loadCreateCmt(state) {
      state.loadingCreateCmt = true;
    },
    revokeImg(state) {
      state.images.forEach(e => URL.revokeObjectURL(e));
    },
    createCmtLoaded(state) {
      state.images.forEach(e => URL.revokeObjectURL(e));
      state.isShow = false;
      state.startRate = 0;
      state.stateBoxComment = 'REVIEW';
      state.images = [];
    },
    resetComment() {
      return initialState;
    },
    setNewComment(state, actions: PayloadAction<IComment>) {
      const newComment = actions.payload;
      if (state.comments.length >= state.take) {
        state.comments.pop();
      }
      state.comments = [newComment, ...state.comments];
      state.total += 1;
    },
  },
});

export const { actions: CommentBoxAction, reducer } = slice;

export const useCommentBoxSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: boxCommentFromSaga });
  return { actions: slice.actions };
};
