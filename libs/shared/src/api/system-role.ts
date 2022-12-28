import {
  AuthFunction,
  AuthRoleDetail,
  BaseResponse,
} from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetAuthRoles = {
  authRoles: AuthRoleDetail[];
  currentPage?: number;
  pageSize?: number;
  totalPage: number;
};
export type GetAuthRolesResponse = BaseResponse<GetAuthRoles>;
export async function getAuthRolesList(options?: {
  systemCode: string;
  page?: number;
  query?: string;
  filterQuery?: AuthFunction[];
}): Promise<GetAuthRolesResponse> {
  const { page, query, filterQuery } = options || {};
  console.log(filterQuery);
  return await apiFetcher(
    `/authRoles?${page ? `_page=${page}&_limit=10` : ''}${
      query ? (page ? `&q=${query}` : `q=${query}`) : ''
    }`,
    {},
    {
      method: 'get',
    }
  );
}

export type DeleteSystemAuthRoleRequest = {
  systemCode: string;
  authRoleCode: string;
};
export async function deleteSystemAuthRole(
  data: DeleteSystemAuthRoleRequest
): Promise<BaseResponse> {
  return await apiFetcher(
    // `/authRoles/${data.authRoleCode}`,
    `/authRoles/1`,
    {},
    {
      method: 'delete',
    }
  );
}
