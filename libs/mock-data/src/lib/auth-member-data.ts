import { AuthMember } from '@sso-platform/types';
import { BaseData } from '..';

export type AuthMemberData = AuthMember & BaseData;
export const generateAuthMemberData = (): AuthMemberData[] => [
  {
    id: '1',
    memberDepartment: '資訊服務處',
    memberAccount: 'ANNE',
    memberName: 'anne',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '2',
    memberDepartment: '資訊服務處',
    memberAccount: 'ANNEPRO2',
    memberName: 'anne pro 2',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '3',
    memberDepartment: '資訊服務處',
    memberAccount: 'MOJO68',
    memberName: 'mojo 68',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '4',
    memberDepartment: '資訊服務處',
    memberAccount: 'MOJO84',
    memberName: 'mojo 84',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '5',
    memberDepartment: '客戶服務處',
    memberAccount: 'TOFU65',
    memberName: 'tofu 65',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '6',
    memberDepartment: '資訊服務處',
    memberAccount: 'AUDIN75',
    memberName: 'audin 75',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '7',
    memberDepartment: '客戶服務處',
    memberAccount: 'ZOOM65',
    memberName: 'zoom 65',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '8',
    memberDepartment: '客戶服務處',
    memberAccount: 'GLORIOUSPRO',
    memberName: 'Glorious Pro',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '9',
    memberDepartment: '客戶服務處',
    memberAccount: 'VISSLES84',
    memberName: 'Vissles 84',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '10',
    memberDepartment: '資訊服務處',
    memberAccount: 'SPACE65',
    memberName: 'space 65',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '11',
    memberDepartment: '資訊服務處',
    memberAccount: 'APOLLO80',
    memberName: 'apollo 80',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '12',
    memberDepartment: '客戶服務處',
    memberAccount: 'VEGAS65',
    memberName: 'vegas 65',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '13',
    memberDepartment: '客戶服務處',
    memberAccount: 'ONEMINI',
    memberName: 'one mini',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
  {
    id: '14',
    memberDepartment: '客戶服務處',
    memberAccount: 'ONESF',
    memberName: 'one sf',
    memberRoles: [
      {
        authRoleCode: 'community_member',
        authRoleName: '一般會員',
      },
      {
        authRoleCode: 'advanced_member',
        authRoleName: '進階會員',
      },
      {
        authRoleCode: 'brass_member',
        authRoleName: '銅級會員',
      },
    ],
  },
];
