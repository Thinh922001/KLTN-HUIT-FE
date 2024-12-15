export interface User {
  id: number;
  name: string;
  gender: 'male' | 'female';
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  user: User;
  auth: Auth;
}

export enum OrderStatus {
  Pending = 'Pending',
  Processing = 'Processing',
  Returned = 'Returned',
  Canceled = 'Canceled',
  Completed = 'Completed',
}
