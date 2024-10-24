import { IDiscount, ILabel } from 'types/Card';

export interface Variant {
  images: string[];
  name: string;
  options: string[];
}

export interface ISpecifications {
  name: string;
  values: IChildSpec[];
}

export interface IChildSpec {
  name: string;
  desc: string[];
}

export interface IProductDetail {
  id: number;
  title?: string;
  subImg?: string[];
  img: string;
  labels: ILabel[];
  discount?: IDiscount;
  price: number;
  variation?: Variant[];
  specifications?: ISpecifications[];
}

export interface IVariationChosen {
  [key: string]: string | number;
}

export interface ProductDetailState {
  isLoading: boolean;
  productId: string;
  productDetail: IProductDetail;
  variationChosen: IVariationChosen;
  isVariantLoading: boolean;
}
