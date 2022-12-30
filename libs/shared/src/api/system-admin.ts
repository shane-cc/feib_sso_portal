import { AuthAccount, BaseResponse } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetAuthAdmins = {
  authAdmins: AuthAccount[];
  currentPage?: number;
  pageSize?: number;
  totalPage: number;
};
export type GetAuthAdminsResponse = BaseResponse<GetAuthAdmins>;
export async function getAuthAdminsList(options?: {
  systemCode: string;
  page?: number;
  query?: string;
}): Promise<GetAuthAdminsResponse> {
  const { page, query } = options || {};
  const result = await apiFetcher(
    `/authAccounts?${page ? `_page=${page}&_limit=10` : ''}${
      query ? (page ? `&q=${query}` : `q=${query}`) : ''
    }`,
    {},
    {
      method: 'get',
    }
  );
  const newResult: GetAuthAdminsResponse = {
    ...result,
    data: {
      authAdmins: result.data.authAccounts as AuthAccount[],
      currentPage: result.data.currentPage,
      pageSize: result.data.pageSize,
      totalPage: result.data.totalPage,
    },
  };
  return newResult;
}

export type CreateSystemAdminReqeust = {
  systemCode: string;
  accounts: AuthAccount[];
};
export async function createSystemAdmin(
  data: CreateSystemAdminReqeust
): Promise<BaseResponse> {
  return await apiFetcher(`/authAccounts`, data, {
    method: 'post',
  });
}

export type DeleteSystemAdminRequest = {
  systemCode: string;
  memberAccount: string;
};
export async function deleteSystemAdmin(
  data: DeleteSystemAdminRequest
): Promise<BaseResponse> {
  return await apiFetcher(`/authAccounts/${data.memberAccount}`, data, {
    method: 'delete',
  });
}
