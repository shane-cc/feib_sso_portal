import {
  ApiError,
  AuthAccount,
  AuthMember,
  AuthRole,
  BaseResponse,
} from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetAuthMembers = {
  authMembers: AuthMember[];
  currentPage?: number;
  pageSize?: number;
  totalPage: number;
};
export type GetAuthMembersResponse = BaseResponse<GetAuthMembers>;
export async function getAuthMembersList(options?: {
  systemCode: string;
  page?: number;
  query?: string;
  filterQuery?: AuthRole[];
}): Promise<GetAuthMembersResponse> {
  const { page, query, filterQuery } = options || {};
  return await apiFetcher(
    `/authMembers?${page ? `_page=${page}&_limit=10` : ''}${
      query ? (page ? `&q=${query}` : `q=${query}`) : ''
    }`,
    {},
    {
      method: 'get',
    }
  );
}

export type CreateSystemMemberReqeust = {
  systemCode: string;
  authRoleCode: string;
  accounts: AuthAccount[];
};
export async function createSystemMember(
  data: CreateSystemMemberReqeust
): Promise<BaseResponse> {
  return await apiFetcher(`/authMembers`, data, {
    method: 'post',
  });
}

export type UpdateSystemMemberRequest = {
  systemCode: string;
  memberAccount: string;
  memberRoles: AuthRole[];
};
export async function updateSystemMember(
  data: UpdateSystemMemberRequest
): Promise<BaseResponse> {
  return await apiFetcher(`/authMembers/${data.memberAccount}`, data, {
    method: 'put',
  });
}

export type DeleteSystemMemberRequest = {
  systemCode: string;
  memberAccount: string;
};
export async function deleteSystemAuthMember(
  data: DeleteSystemMemberRequest
): Promise<BaseResponse> {
  return await apiFetcher(`/authMembers/${data.memberAccount}`, data, {
    method: 'delete',
  });
}

type ExportSystemAuthMember = {
  filePath: string;
};
export type ExportSystemAuthMemberResponse =
  BaseResponse<ExportSystemAuthMember>;
export async function exportSystemAuthMember(data: {
  systemId: string;
}): Promise<ExportSystemAuthMemberResponse> {
  throw new ApiError({
    status: 500,
    message: 'Export failed!',
  });
  return await {
    data: {
      filePath:
        'https://jgdev.jgallop.com/cstest/order/excel/001_20230111153100045.xlsx',
    },
    status: 'Success',
    error: false,
  };
}
