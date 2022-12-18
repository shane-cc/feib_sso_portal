import { AuthFunc, BaseResponse } from '@sso-platform/types';
import { apiFetcher } from './fetcher';

export type GetAuthFuncsResponse = BaseResponse<AuthFunc[]>;
export async function getAuthFuncs(
  authCodes: string[]
): Promise<GetAuthFuncsResponse> {
  return await apiFetcher(
    `/auths?authCode_like=${authCodes.join('|')}`,
    authCodes,
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
