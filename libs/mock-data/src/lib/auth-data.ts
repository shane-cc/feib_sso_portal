import { AuthFunc } from '@sso-platform/types';
import { BaseData } from '..';

export type AuthData = AuthFunc & BaseData;
export const generateAuthData = (): AuthData[] => {
  return [
    {
      id: '1',
      authFunctionCode: 'CREATE_SYSTEM',
      isAuth: true,
    },
    {
      id: '2',
      authFunctionCode: 'EDIT_SYSTEM',
      isAuth: true,
    },
    {
      id: '3',
      authFunctionCode: 'DELETE_SYSTEM',
      isAuth: true,
    },
    {
      id: '4',
      authFunctionCode: 'READ_SYSTEM_AUTH',
      isAuth: true,
    },
    {
      id: '5',
      authFunctionCode: 'ASSIGN_SYSTEM_ADMIN',
      isAuth: true,
    },
    {
      id: '6',
      authFunctionCode: 'DELETE_SYSTEM_ADMIN',
      isAuth: true,
    },
    {
      id: '7',
      authFunctionCode: 'READ_SYSTEM_ADMIN',
      isAuth: true,
    },
  ];
};
