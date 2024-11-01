import { Gender } from 'app/pages/CartPage/CartFound/components/type';

export interface Auth {
  phone: string;
  fullName: string;
  address: string;
  gender: Gender;
}

export interface Order {
  auth?: Auth;

  carts: CartDto[];

  type: 'AUTH' | 'NO_AUTH';

  coupon?: string;

  note?: string;
}

export interface CartDto {
  id: number;

  quantity: number;
}
