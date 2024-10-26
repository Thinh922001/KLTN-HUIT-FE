import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectIsShow = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.isShow,
);

export const selectStartRate = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.startRate,
);

export const selectStateBoxComment = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.stateBoxComment,
);

export const selectComment = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.comments,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.isLoading,
);

export const selectTake = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.take,
);

export const selectSkip = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.skip,
);

export const selectLengthComment = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.comments.length,
);

export const selectTotal = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.total,
);

export const selectCommentStore = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.comment,
);

export const selectImages = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.images,
);

export const selectPhone = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.phone,
);

export const selectFullName = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.fullName,
);

export const selectUpLoadLoading = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.loadingCreateCmt,
);

export const selectCommentIdChosen = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.commentIdChosen,
);

export const selectReactType = createSelector(
  [(state: RootState) => state.commentBoxState || initialState],
  state => state.reactType,
);
