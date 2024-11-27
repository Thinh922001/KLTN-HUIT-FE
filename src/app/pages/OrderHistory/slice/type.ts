import { IOrderHistory } from 'types/OrderHistory';

export interface OrderHistoryState {
  MenuRightState: string;
  orders: IOrderHistory[];
  isLoading: boolean;
  take: number;
  skip: number;
  total: number;
}
