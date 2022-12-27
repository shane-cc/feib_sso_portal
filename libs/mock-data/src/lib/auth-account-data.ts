import { AuthAccount } from '@sso-platform/types';
import { BaseData } from './db';

export type AuthAccountData = AuthAccount & BaseData;
export const generateAuthAccountData = (): AuthAccountData[] => [
  {
    id: '1',
    memberDepartment: '資訊服務處',
    memberAccount: 'ANNE',
    memberName: 'anne',
  },
  {
    id: '2',
    memberDepartment: '資訊服務處',
    memberAccount: 'ANNEPRO2',
    memberName: 'anne pro 2',
  },
  {
    id: '3',
    memberDepartment: '資訊服務處',
    memberAccount: 'MOJO68',
    memberName: 'mojo 68',
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
    id: '9',
    memberDepartment: '客戶服務處',
    memberAccount: 'VISSLES84',
    memberName: 'Vissles 84',
  },
  {
    id: '10',
    memberDepartment: '資訊服務處',
    memberAccount: 'SPACE65',
    memberName: 'space 65',
  },
  {
    id: '11',
    memberDepartment: '資訊服務處',
    memberAccount: 'APOLLO80',
    memberName: 'apollo 80',
  },
  {
    id: '12',
    memberDepartment: '客戶服務處',
    memberAccount: 'VEGAS65',
    memberName: 'vegas 65',
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
  {
    id: '15',
    memberDepartment: '客戶服務處',
    memberAccount: 'NUPHYAIR',
    memberName: 'nuphy air',
  },
  {
    id: '16',
    memberDepartment: '客戶服務處',
    memberAccount: 'NUPHYHALO',
    memberName: 'nuphy halo',
  },
  {
    id: '17',
    memberDepartment: '客戶服務處',
    memberAccount: 'SHARK65',
    memberName: 'shark 65',
  },
];
