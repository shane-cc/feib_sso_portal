import { BaseResponse, IndividualActionHistory } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

export type GetActionHistoryResponse = BaseResponse<IndividualActionHistory[]>;
export const getActionHistory = async (options?: {
  limit?: number;
}): Promise<GetActionHistoryResponse> => {
  const { limit } = options || {};
  const url = limit ? `/actionHistory?_limit=${limit}` : '/actionHistory';
  return await apiFetcher(url, {}, { method: 'get' });
};
