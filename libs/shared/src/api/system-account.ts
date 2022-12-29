import { AuthAccount, BaseResponse } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetAuthAccounts = {
  authAccounts: AuthAccount[];
  currentPage?: number;
  pageSize?: number;
  totalPage: number;
};
export type GetAuthAccountsResponse = BaseResponse<GetAuthAccounts>;
export async function getAuthAccountsList(options?: {
  systemCode: string;
  page?: number;
  query?: string;
}): Promise<GetAuthAccountsResponse> {
  const { page, query } = options || {};
  return await apiFetcher(
    `/authAccounts?${page ? `_page=${page}&_limit=10` : ''}${
      query ? (page ? `&q=${query}` : `q=${query}`) : ''
    }`,
    {},
    {
      method: 'get',
    }
  );
}
