import {
  ActiveComponent,
  District,
  LocationBoxState,
  Province,
  Ward,
} from './type';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { PayloadAction } from '@reduxjs/toolkit';
import { LocationBoxFromSaga } from './saga';

export const initialState: LocationBoxState = {
  isActive: false,
  isLoading: false,
  isDoneLocation: false,
  provinceId: 0,
  districtId: 0,
  wardId: 0,
  provinces: [],
  district: [],
  wards: [],
  selectedProvinceName: '',
  selectedDistrictName: '',
  selectedDWardName: '',
  address: '',
  activeComponent: 'province',
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
      state.selectedProvinceName =
        state.provinces.find(e => e.id === state.provinceId)?.name ?? '';
    },
    setDistrictId(state, data: PayloadAction<number>) {
      state.districtId = data.payload;
      state.selectedDistrictName =
        state.district.find(e => e.id === state.districtId)?.name ?? '';
    },
    setWardId(state, data: PayloadAction<number>) {
      state.wardId = data.payload;
      state.selectedDWardName =
        state.wards.find(e => e.id === state.wardId)?.name ?? '';
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
    setIsDoneLocation(state) {
      state.isDoneLocation = true;
    },
    setIsNotDoneLocation(state) {
      state.isDoneLocation = false;
    },
    setAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
    setActiveComponent(state, action: PayloadAction<ActiveComponent>) {
      state.activeComponent = action.payload;
    },
    resetLocationBox(state) {
      state.isDoneLocation = false;
      state.activeComponent = 'province';
      state.wards = [];
      state.wardId = 0;
      state.district = [];
      state.districtId = 0;
      state.provinces = [];
      state.provinceId = 0;
      state.address = '';
      state.selectedDWardName = '';
      state.selectedDistrictName = '';
      state.selectedProvinceName = '';
    },
    setDistrictName(state, actions: PayloadAction<string>) {
      state.selectedDistrictName = actions.payload;
    },
    setProvinceName(state, actions: PayloadAction<string>) {
      state.selectedProvinceName = actions.payload;
    },
    setWardName(state, actions: PayloadAction<string>) {
      state.selectedDWardName = actions.payload;
    },
  },
});

export const { actions: LocationBoxActions, reducer } = slice;

export const useLocationBoxSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  useInjectSaga({ key: slice.name, saga: LocationBoxFromSaga });
  return { actions: slice.actions };
};
