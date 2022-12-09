import { BaseResponse, System } from '@sso-platform/types';
import { useAxios } from './axios';

export type GetSystemListResponse = BaseResponse<System[]>;
export const getSystemList = async (): Promise<GetSystemListResponse> => {
  const { data } = await useAxios().get('/systems');
  return {
    data: data as System[],
    status: 'success',
    error: false,
  };
};
