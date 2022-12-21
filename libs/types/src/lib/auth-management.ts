import { Auth } from './auth';

export interface AuthFunction {
  authFunctionCode: string;
  authFunctionName: string;
  authFunctionCategory: string;
  isActive: boolean;
}

export interface AuthRole {
  authRoleCode: string;
  authRoleName: string;
}

export interface AuthRoleDetail extends AuthRole {
  authRoleFunctions: Auth[];
}

export interface AuthAccount {
  memberDepartment: string;
  memberAccount: string;
  memberName: string;
}

export interface AuthMember extends AuthAccount {
  memberRoles: AuthRole[];
}
