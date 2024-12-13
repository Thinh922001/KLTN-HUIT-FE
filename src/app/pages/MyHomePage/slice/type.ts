import { ICard } from 'types/Card';

export interface ICate {
  id: number;
  name: string;
  img: string;
}

export interface ICateType {
  id: number;
  name: string;
  category: ICate[];
}

export interface IHomePageState {
  product: ICard[];
  cate: ICate[];
  banner: string[];
  cateType: ICateType[];
  isProductLoading: boolean;
  isCateLoading: boolean;
  isBannerLoading: boolean;
  cateTypeLoading: boolean;
}
