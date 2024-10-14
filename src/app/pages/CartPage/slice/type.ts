export interface ICart {
  productDetailId: string;
  img: string;
  price: number;
  oldPrice: number;
  quantity: number;
  productName: string;
  color: string;
}

export interface CartState {
  cartItems: ICart[];
  totalAmount: number;
  totalQuantity: number;
  isCartLoadDone: boolean;
  productIdChosen: string;
}
