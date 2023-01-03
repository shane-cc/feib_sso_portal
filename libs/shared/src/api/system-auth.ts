import { AuthFunctionDetail, BaseResponse } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

type GetAuthFunctions = {
  authFunctions: AuthFunctionDetail[];
  currentPage?: number;
  pageSize?: number;
  totalPage: number;
};
export type GetAuthFunctionsResponse = BaseResponse<GetAuthFunctions>;
export async function getAuthFunctionsList(options?: {
  systemCode: string;
  page?: number;
  query?: string;
}): Promise<GetAuthFunctionsResponse> {
  const { page, query } = options || {};
  return await apiFetcher(
    `/authFunctions?${page ? `_page=${page}&_limit=10` : ''}${
      query ? (page ? `&q=${query}` : `q=${query}`) : ''
    }`,
    {},
    {
      method: 'get',
    }
  );
}

export type UploadSystemAuthRequest = {
  systemCode: string;
  authFile: File;
};
export async function uploadSystemAuth(
  data: UploadSystemAuthRequest
): Promise<BaseResponse> {
  console.log(data);
  return await {
    data: null,
    message: 'success',
    status: 'success',
    error: false,
  };
}

export type DeleteSystemAuthFunctionRequest = {
  systemCode: string;
  authFunctionCode: string;
};
export async function deleteSystemAuthFunction(
  data: DeleteSystemAuthFunctionRequest
): Promise<BaseResponse> {
  return await apiFetcher(
    `/authFunctions/${data.authFunctionCode}`,
    {},
    {
      method: 'delete',
    }
  );
}

export type UpdateSystemAuthFunctionRequest = {
  systemCode: string;
  authFunction: AuthFunctionDetail;
};
export async function updateSystemAuthFunction(
  data: UpdateSystemAuthFunctionRequest
): Promise<BaseResponse> {
  return await apiFetcher(
    // `/authFunctions/${(data.authFunction as AuthFunction).authFunctionCode}`,
    `/authFunctions/1`,
    data.authFunction,
    {
      method: 'put',
    }
  );
}
