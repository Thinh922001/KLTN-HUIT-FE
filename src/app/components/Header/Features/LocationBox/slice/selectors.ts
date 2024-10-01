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

export const selectWardId = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.wardId,
);

export const selectDoneLocation = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.isDoneLocation,
);

export const selectLocationName = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => {
    return `${state.selectedDWardName}, ${state.selectedDistrictName}, ${state.selectedProvinceName}`;
  },
);

export const selectAddress = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.address,
);

export const selectActiveComponent = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.activeComponent,
);

export const selectProvinceName = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.selectedProvinceName,
);

export const selectDistrictName = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => {
    return state.selectedDistrictName;
  },
);

export const selectWardName = createSelector(
  [(state: RootState) => state.locationBox || initialState],
  state => state.selectedDWardName,
);
