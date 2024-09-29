import { District, LocationBoxState, Province, Ward } from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { PayloadAction } from '@reduxjs/toolkit';
import { LocationBoxFromSaga } from './saga';

export const initialState: LocationBoxState = {
  isActive: false,
  isLoading: false,
  provinceId: 0,
  districtId: 0,
  wardId: 0,
  provinces: [],
  district: [],
  wards: [],
};

const slice = createSlice({
  name: 'locationBox',
  initialState,
  reducers: {
    showLocationBox(state) {
      state.isActive = true;
    },
    hideLocationBox(state) {
      state.isActive = false;
    },
    setProvinceId(state, data: PayloadAction<number>) {
      state.provinceId = data.payload;
    },
    setDistrictId(state, data: PayloadAction<number>) {
      state.districtId = data.payload;
    },
    setWardId(state, data: PayloadAction<number>) {
      state.wardId = data.payload;
    },
    loadProvince(state) {
      state.isLoading = true;
      state.provinces = [];
    },
    provinceLoaded(state, actions: PayloadAction<Province[]>) {
      state.isLoading = false;
      state.provinces = actions.payload;
    },
    loadDistrict(state) {
      state.isLoading = true;
      state.district = [];
    },
    districtLoaded(state, actions: PayloadAction<District[]>) {
      state.isLoading = false;
      state.district = actions.payload;
    },
    loadWard(state) {
      state.isLoading = true;
      state.wards = [];
    },
    wardLoaded(state, actions: PayloadAction<Ward[]>) {
      state.isLoading = false;
      state.wards = actions.payload;
    },
  },
});

export const { actions: LocationBoxActions, reducer } = slice;

export const useLocationBoxSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LocationBoxFromSaga });
  return { actions: slice.actions };
};
