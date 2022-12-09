import { BaseResponse, System } from '@sso-platform/types';
import { useAxios } from './axios';

export type GetSystemListResponse = BaseResponse<System[]>;
export const getSystemList = async (options?: {
  query?: string;
}): Promise<GetSystemListResponse> => {
  const { query } = options || {};
  const { data } = await useAxios().get(
    query || (query && query.length > 0) ? `/systems?q=${query}` : '/systems'
  );
  return {
    data: data as System[],
    status: 'success',
    error: false,
  };
};
