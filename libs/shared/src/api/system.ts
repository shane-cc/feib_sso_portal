import { BaseResponse, System } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

export type GetSystemListResponse = BaseResponse<System[]>;
export async function getSystemList(options?: {
  query?: string;
}): Promise<GetSystemListResponse> {
  const { query } = options || {};
  const url =
    query || (query && query.length > 0) ? `/systems?q=${query}` : '/systems';
  return await apiFetcher(url, {}, { method: 'get' });
}

export async function createSystem<T>(data: T): Promise<BaseResponse> {
  return await apiFetcher('/systems', data, {
    method: 'post',
  });
}

export async function updateSystem<T>(data: T): Promise<BaseResponse> {
  return await apiFetcher('/systems/3', data, {
    method: 'put',
  });
}
