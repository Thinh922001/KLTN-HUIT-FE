export interface User {
  id: number;
}

export interface Auth {
  accessToken: string;
  refreshToken: string;
}

export interface AuthState {
  user: User;
  auth: Auth;
}
