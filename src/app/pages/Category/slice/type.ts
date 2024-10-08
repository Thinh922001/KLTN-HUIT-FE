import { ICard } from 'types/Card';

export interface ProductCateState {
  isLoading: boolean;
  isPageLoading: boolean;
  cateId: string;
  take: number;
  skip: number;
  total: number;
  isNext: boolean;
  itemPerPage: number;
  products: ICard[];
}
