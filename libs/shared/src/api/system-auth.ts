import { AuthFunction, BaseResponse } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetAuthFunctions = {
  authFunctions: AuthFunction[];
  currentPage?: number;
  pageSize?: number;
  totalPage: number;
};
export type GetAuthFunctionsResponse = BaseResponse<GetAuthFunctions>;
export async function getAuthFunctionsList(options?: {
  page?: number;
  query?: string;
}): Promise<GetAuthFunctionsResponse> {
  const { page, query } = options || {};
  return await apiFetcher(
    `/authFunctions?_page=${page}&_limit=10&q=${query}`,
    {},
    {
      method: 'get',
    }
  );
}
