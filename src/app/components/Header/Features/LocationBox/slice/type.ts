export interface Province {
  id: number;
  name: string;
}

export interface District {
  id: number;
  name: string;
}

export interface Ward {
  id: number;
  name: string;
}

export type ActiveComponent = 'province' | 'district' | 'ward';

export interface LocationBoxState {
  isActive: boolean;
  isLoading: boolean;
  isDoneLocation: boolean;
  provinceId: number;
  districtId: number;
  wardId: number;
  provinces: Province[];
  district: District[];
  wards: Ward[];
  selectedProvinceName: string;
  selectedDistrictName: string;
  selectedDWardName: string;
  address: string;
  activeComponent: ActiveComponent;
}
