export interface Auth {
  authCode: string;
  authName: string;
}

export interface AuthFunc {
  authCode: string;
  isAuth: boolean;
}
