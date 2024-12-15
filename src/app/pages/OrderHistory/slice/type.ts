import { OrderStatus } from 'auth/type';
import { IOrderHistory } from 'types/OrderHistory';

export interface OrderHistoryState {
  MenuRightState: string;
  orders: IOrderHistory[];
  isLoading: boolean;
  take: number;
  skip: number;
  total: number;
  userBalance: number;
  isLoadingBalance: boolean;
  amount: number;
  payUrl: string;
  topUpLoading: boolean;
  orderIdCancel: number;
  fliterBy: string;
}
