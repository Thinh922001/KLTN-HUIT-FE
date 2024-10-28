export interface User {
  id: number;
  name: string;
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  user: User;
  auth: Auth;
}
