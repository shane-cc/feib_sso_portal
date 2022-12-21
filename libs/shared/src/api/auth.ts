import { AuthFunc, BaseResponse } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

export type GetAuthFuncsResponse = BaseResponse<AuthFunc[]>;
export async function getAuthFuncs(
  authFunctionCodes: string[]
): Promise<GetAuthFuncsResponse> {
  return await apiFetcher(
    `/auths?authFunctionCode_like=${
      authFunctionCodes.length > 0 ? authFunctionCodes.join('|') : '""'
    }`,
    authFunctionCodes,
    {
      method: 'get',
    }
  );
}

export async function getAllAuthFuncs(): Promise<GetAuthFuncsResponse> {
  return await apiFetcher(
    '/auths',
    {},
    {
      method: 'get',
    }
  );
}
