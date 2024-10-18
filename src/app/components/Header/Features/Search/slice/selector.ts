import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectIsLoading = createSelector(
  [(state: RootState) => state.searchState || initialState],
  state => state.isLoading,
);

export const selectKeyWord = createSelector(
  [(state: RootState) => state.searchState || initialState],
  state => state.keyWord,
);

export const selectSearchItems = createSelector(
  [(state: RootState) => state.searchState || initialState],
  state => state.searchItems,
);
