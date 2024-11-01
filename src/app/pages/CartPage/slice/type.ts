export interface ICart {
  productDetailId: string;
  img: string;
  price: number;
  oldPrice: number;
  quantity: number;
  productName: string;
  color: string;
  hasNoStock: boolean;
}

export interface ICouponResult {
  disCountType: string;
  disCountValue: number;
  totalAmount: number;
}

export interface CartState {
  cartItems: ICart[];
  totalAmount: number;
  totalQuantity: number;
  isCartLoadDone: boolean;
  loadingCheckStock: boolean;
  productIdChosen: string;
  isOutOfStock: boolean;
  increaseCartId: number;
  increaseCartQuantity: number;
  isIncreaseLoading: boolean;
  IsSyncing: boolean;
  skuId: number;
  coupon: string;
  isCheckingCoupon: boolean;
  couponError: string;
  couponResult: ICouponResult;
  name: string;
  phone: string;
  gender: 'male' | 'female' | 'other' | '';
  note: string;
  loadingOrder: boolean;
  isOrderDone: boolean;
}
