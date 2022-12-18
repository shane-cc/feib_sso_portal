import { AuthFunc } from '@sso-platform/types';
import { BaseData } from '..';

export type AuthData = AuthFunc & BaseData;
export const generateAuthData = (): AuthData[] => {
  return [
    {
      id: '1',
      authCode: 'CREATE_SYSTEM',
      isAuth: true,
    },
    {
      id: '2',
      authCode: 'EDIT_SYSTEM',
      isAuth: true,
    },
    {
      id: '3',
      authCode: 'DELETE_SYSTEM',
      isAuth: true,
    },
    {
      id: '4',
      authCode: 'READ_SYSTEM_AUTH',
      isAuth: true,
    },
    {
      id: '5',
      authCode: 'ASSIGN_SYSTEM_ADMIN',
      isAuth: true,
    },
    {
      id: '6',
      authCode: 'DELETE_SYSTEM_ADMIN',
      isAuth: true,
    },
    {
      id: '7',
      authCode: 'READ_SYSTEM_ADMIN',
      isAuth: true,
    },
  ];
};
