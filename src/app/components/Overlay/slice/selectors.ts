import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectOverLay = createSelector(
  [(state: RootState) => state.overLay || initialState],
  theme => theme.isActive,
);
