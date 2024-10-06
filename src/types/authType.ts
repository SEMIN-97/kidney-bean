export interface ValidateEmailPathParams {
  email: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface User {
  email: string;
  password?: string;
  nickname: string;
}
