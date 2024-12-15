export interface Item {
  id: number;
  name: string;
  img: string;
  quantity: number;
  totalAmount: number;
  price: number;
  oldPrice: number;
}

export interface OrderDetail {
  name?: string;
  createdAt?: string;
  receiveDate?: string;
  receiveAt?: string;
  totalAmount?: number;
  finalAmount?: number;
  addressRecieve?: string;
  isPaid?: boolean;
  status: string;
  paidAmount: number;
  paymentMethod?: string | null;
  items: Item[];
}

export interface OrderDetailState {
  data: OrderDetail | null;
  isLoading: boolean;
  orderId: number;
  isPaymentLoading: boolean;
  isPaymentFail: boolean;
  selectItemId: number;
  quantityReturn: number;
  reasonReturn: string;
  isReturnOrderLoading: boolean;
}
