import { AuthRoleDetail } from '@sso-platform/types';
import { BaseData } from '..';

export type AuthRoleData = AuthRoleDetail & BaseData;
export const generateAuthRoleData = (): AuthRoleData[] => [
  {
    id: '1',
    authRoleCode: 'community_member',
    authRoleName: '一般會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '2',
    authRoleCode: 'advanced_member',
    authRoleName: '進階會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '3',
    authRoleCode: 'golden_member',
    authRoleName: '金級會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '4',
    authRoleCode: 'silver_member',
    authRoleName: '銀級會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '5',
    authRoleCode: 'brass_member',
    authRoleName: '銅級會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '6',
    authRoleCode: 'newbie',
    authRoleName: '貝比會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '7',
    authRoleCode: 'green_member',
    authRoleName: '綠色會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '8',
    authRoleCode: 'blue_member',
    authRoleName: '藍色會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '9',
    authRoleCode: 'pink_member',
    authRoleName: '粉色會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '10',
    authRoleCode: 'black_member',
    authRoleName: '黑色會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '11',
    authRoleCode: 'purple_member',
    authRoleName: '紫色會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '12',
    authRoleCode: 'teams_member',
    authRoleName: '團隊會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '13',
    authRoleCode: 'corportate_member',
    authRoleName: '企業會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
  {
    id: '14',
    authRoleCode: 'ngo_member',
    authRoleName: '非營利會員',
    authRoleFunctions: [
      {
        authFunctionCode: 'create_new_member',
        authFunctionName: '建立新的會員',
      },
      {
        authFunctionCode: 'edit_member',
        authFunctionName: '編輯會員所有資訊',
      },
      {
        authFunctionCode: 'delete_member',
        authFunctionName: '刪除會員',
      },
      {
        authFunctionCode: 'edit_member_level',
        authFunctionName: '編輯會員級別',
      },
      {
        authFunctionCode: 'create_member_level',
        authFunctionName: '建立會員級別',
      },
      {
        authFunctionCode: 'delete_member_level',
        authFunctionName: '刪除會員級別',
      },
    ],
  },
];
