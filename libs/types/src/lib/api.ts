export interface BaseResponse<T = any> {
  headers?: Partial<Record<string, string>>;
  data?: T;
  status: string;
  message?: string;
  error: boolean;
}

export class ApiError<T = any> extends Error {
  override message: string;
  status?: string | number;
  data?: T;

  constructor(options: {
    message: string;
    status?: string | number;
    data?: T;
  }) {
    const { message, status, data } = options;
    super();
    this.message = message;
    this.status = status;
    this.data = data;
  }
}
