import { createSelector } from '@reduxjs/toolkit';
import { RootState } from 'types';
import { initialState } from '.';

export const selectStatusBoxLocation = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.isActive,
);

export const selectProvince = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.provinces,
);

export const selectIsLoading = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.isLoading,
);

export const selectProVinceId = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.provinceId,
);

export const selectDistricts = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.district,
);

export const selectDistrictId = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.districtId,
);

export const selectWards = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.wards,
);

export const selectId = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.wardId,
);
