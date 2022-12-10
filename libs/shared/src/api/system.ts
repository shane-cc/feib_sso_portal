import { BaseResponse, System } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

export type GetSystemListResponse = BaseResponse<System[]>;
export async function getSystemList(options?: {
  query?: string;
}): Promise<GetSystemListResponse> {
  const { query } = options || {};
  const url =
    query || (query && query.length > 0) ? `/systems?q=${query}` : '/systems';
  const { data } = await apiFetcher(url, {}, { method: 'get' });
  return {
    data: data as System[],
    status: 'success',
    error: false,
  };
}

export async function createSystem<T>(data: T): Promise<BaseResponse> {
  const { error, status, message } = await apiFetcher('/systems', data, {
    method: 'post',
  });
  return {
    data,
    status,
    error,
    message: message || '新增系統異常！',
  };
}
