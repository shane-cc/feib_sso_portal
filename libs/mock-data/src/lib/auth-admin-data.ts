import { AuthAccount } from '@sso-platform/types';
import { BaseData } from '..';

export type AuthAdminData = AuthAccount & BaseData;
export const generateAuthAdminData = (): AuthAdminData[] => [
  {
    id: '1',
    memberDepartment: '資訊服務處',
    memberAccount: 'ANNE',
    memberName: 'anne',
  },
  {
    id: '4',
    memberDepartment: '資訊服務處',
    memberAccount: 'MOJO84',
    memberName: 'mojo 84',
  },
  {
    id: '5',
    memberDepartment: '客戶服務處',
    memberAccount: 'TOFU65',
    memberName: 'tofu 65',
  },
  {
    id: '6',
    memberDepartment: '資訊服務處',
    memberAccount: 'AUDIN75',
    memberName: 'audin 75',
  },
  {
    id: '7',
    memberDepartment: '客戶服務處',
    memberAccount: 'ZOOM65',
    memberName: 'zoom 65',
  },
  {
    id: '8',
    memberDepartment: '客戶服務處',
    memberAccount: 'GLORIOUSPRO',
    memberName: 'Glorious Pro',
  },
  {
    id: '11',
    memberDepartment: '資訊服務處',
    memberAccount: 'APOLLO80',
    memberName: 'apollo 80',
  },
  {
    id: '13',
    memberDepartment: '客戶服務處',
    memberAccount: 'ONEMINI',
    memberName: 'one mini',
  },
  {
    id: '14',
    memberDepartment: '客戶服務處',
    memberAccount: 'ONESF',
    memberName: 'one sf',
  },
];
