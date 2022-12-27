import { AuthFunction } from '@sso-platform/types';
import { BaseData } from './db';

export type AuthFunctionData = AuthFunction & BaseData;
export const generateAuthFunctionData = (): AuthFunctionData[] => [
  {
    id: '1',
    authFunctionCode: 'create_new_member',
    authFunctionName: '建立新的會員',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '2',
    authFunctionCode: 'edit_member',
    authFunctionName: '編輯會員所有資訊',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '3',
    authFunctionCode: 'delete_member',
    authFunctionName: '刪除會員',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '4',
    authFunctionCode: 'edit_member_level',
    authFunctionName: '編輯會員級別',
    authFunctionCategory: '系統',
    isActive: false,
  },
  {
    id: '5',
    authFunctionCode: 'create_member_level',
    authFunctionName: '建立會員級別',
    authFunctionCategory: '系統',
    isActive: false,
  },
  {
    id: '6',
    authFunctionCode: 'delete_member_level',
    authFunctionName: '刪除會員級別',
    authFunctionCategory: '系統',
    isActive: false,
  },
  {
    id: '7',
    authFunctionCode: 'assign_member_level',
    authFunctionName: '指派會員級別',
    authFunctionCategory: '系統',
    isActive: false,
  },
  {
    id: '8',
    authFunctionCode: 'create_member_group',
    authFunctionName: '建立會員群組',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '9',
    authFunctionCode: 'edit_member_group',
    authFunctionName: '編輯會員群組',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '10',
    authFunctionCode: 'delete_member_group',
    authFunctionName: '刪除會員群組',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '11',
    authFunctionCode: 'assign_member_group',
    authFunctionName: '指派會員群組',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '12',
    authFunctionCode: 'assign_group_admin',
    authFunctionName: '指派群組管理員',
    authFunctionCategory: '系統',
    isActive: true,
  },
  {
    id: '13',
    authFunctionCode: 'delete_group_admin',
    authFunctionName: '刪除群組管理員',
    authFunctionCategory: '系統',
    isActive: true,
  },
];
