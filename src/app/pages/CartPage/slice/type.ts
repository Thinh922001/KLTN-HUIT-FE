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
}
