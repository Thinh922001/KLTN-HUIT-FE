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

export interface LocationBoxState {
  isActive: boolean;
  isLoading: boolean;
  provinceId: number;
  districtId: number;
  wardId: number;
  provinces: Province[];
  district: District[];
  wards: Ward[];
}
