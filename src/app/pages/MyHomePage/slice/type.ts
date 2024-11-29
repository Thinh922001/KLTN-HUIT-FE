import { ICard } from 'types/Card';

export interface ICate {
  id: number;
  name: string;
  img: string;
}

export interface IHomePageState {
  product: ICard[];
  cate: ICate[];
  isProductLoading: boolean;
  isCateLoading: boolean;
}
