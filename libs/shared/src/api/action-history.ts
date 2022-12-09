import { BaseResponse, IndividualActionHistory } from '@sso-platform/types';
import { useAxios } from './axios';

export type GetActionHistoryResponse = BaseResponse<IndividualActionHistory[]>;
export const getActionHistory = async (options?: {
  limit?: number;
}): Promise<GetActionHistoryResponse> => {
  const { limit } = options || {};
  const { data } = await useAxios().get(
    limit ? `/actionHistory?_limit=${limit}` : '/actionHistory'
  );
  return {
    data: data as IndividualActionHistory[],
    status: 'success',
    error: false,
  };
};
