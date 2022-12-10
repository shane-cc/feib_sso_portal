import { BaseResponse } from '@sso-platform/types';
import axios, { AxiosError, AxiosInstance } from 'axios';
import { ErrorMessage } from '../enum';
import { useAxios } from './axios';

export async function apiFetcher(
  url: string,
  data: unknown,
  options: {
    fetcher?: AxiosInstance;
    abortController?: AbortController;
    method: 'get' | 'post' | 'put' | 'delete';
  }
): Promise<BaseResponse> {
  const axiosInstance = useAxios();
  const { fetcher = axiosInstance, abortController, method } = options;
  try {
    const result = abortController
      ? await fetcher(url, {
          data,
          method,
          signal: abortController?.signal,
        })
      : await fetcher(url, {
          data,
          method,
        });
    if (!result) {
      throw new AxiosError(ErrorMessage.API_CANCELED);
    }
    if (!result.data) {
      throw new AxiosError(ErrorMessage.NO_RESPONSE);
    }
    if (result.status >= 200 && result.status < 300) {
      return {
        data: result.data,
        error: false,
        status: 'success',
      };
    }
    return {
      data: result.data,
      message: ErrorMessage.API_FAILED,
      error: true,
      status: 'error',
    };
  } catch (error) {
    if (axios.isCancel(error)) {
      return {
        message: '',
        error: false,
        status: 'canceled',
      };
    }

    return {
      message: ErrorMessage.NETWORK_ERROR,
      error: true,
      status: 'error',
    };
  }
}