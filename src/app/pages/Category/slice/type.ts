import { IBrand, IBreadCrumb, ICard } from 'types/Card';

export interface ProductCateState {
  isLoading: boolean;
  isPageLoading: boolean;
  isBreadCrumbLoading: boolean;
  isBrandLoading: boolean;
  cateId: string;
  take: number;
  skip: number;
  total: number;
  isNext: boolean;
  itemPerPage: number;
  products: ICard[];
  breadCrumbs: IBreadCrumb[];
  brand: IBrand[];
}
