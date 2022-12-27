import { BaseResponse, System } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetSystemList = {
  systems: System[];
  currentPage?: number;
  pageSize?: number;
  totalPage: number;
};
export type GetSystemListResponse = BaseResponse<GetSystemList>;
export async function getSystemList(options?: {
  query?: string;
}): Promise<GetSystemListResponse> {
  const { query } = options || {};
  const url =
    query || (query && query.length > 0) ? `/systems?q=${query}` : '/systems';
  return await apiFetcher(url, {}, { method: 'get' });
}

type GetSystemData = {
  systems: System;
};
export type GetSystemDataResponse = BaseResponse<GetSystemData>;
export async function getSystemData(
  systemCode: string
): Promise<GetSystemDataResponse> {
  return await apiFetcher(`/systems/2`, {}, { method: 'get' });
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

export type UpdateSystemImageRequest = {
  systemCode: string;
  image: File;
};
export async function updateSystemImage(
  data: UpdateSystemImageRequest
): Promise<BaseResponse> {
  console.log(data);
  return await {
    data: null,
    message: 'success',
    status: 'success',
    error: false,
  };
}

export async function deleteSystem(id: string): Promise<BaseResponse> {
  return await apiFetcher(
    `/systems/${id}`,
    {},
    {
      method: 'delete',
    }
  );
}
