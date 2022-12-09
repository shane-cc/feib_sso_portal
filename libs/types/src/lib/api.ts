export interface BaseResponse<T = any> {
  data?: T;
  status: string;
  message?: string;
  error: boolean;
}
