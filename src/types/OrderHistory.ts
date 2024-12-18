export interface IOrderHistory {
  id: number;
  totalAmount: number;
  status: string;
  name: string;
  images: string[];
  totalItems: number;
  isLoading: boolean;
  isPaid: boolean;
}
