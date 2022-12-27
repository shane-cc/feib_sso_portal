import { BaseResponse, IndividualActionHistory } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetActionHistory = {
  actionHistory: IndividualActionHistory[];
};
export type GetActionHistoryResponse = BaseResponse<GetActionHistory>;
export const getActionHistory = async (options?: {
  limit?: number;
}): Promise<GetActionHistoryResponse> => {
  const { limit } = options || {};
  const url = limit ? `/actionHistory?_limit=${limit}` : '/actionHistory';
  return await apiFetcher(url, {}, { method: 'get' });
};
