import {
  ActionHistoryData,
  generateActionHistoryData,
} from './action-history-data';
import { AuthAccountData, generateAuthAccountData } from './auth-account-data';
import { AuthAdminData, generateAuthAdminData } from './auth-admin-data';
import { AuthData, generateAuthData } from './auth-data';
import {
  AuthFunctionData,
  generateAuthFunctionData,
} from './auth-function-data';
import { AuthMemberData, generateAuthMemberData } from './auth-member-data';
import { AuthRoleData, generateAuthRoleData } from './auth-role-data';
import { generateSystemData, SystemData } from './system-data.ts';
export interface BaseData {
  id: string;
}

interface DB {
  systems: SystemData[];
  actionHistory: ActionHistoryData[];
  auths: AuthData[];
  authFunctions: AuthFunctionData[];
  authRoles: AuthRoleData[];
  authMembers: AuthMemberData[];
  authAdmins: AuthAdminData[];
  authAccounts: AuthAccountData[];
}

export const db: DB = {
  systems: generateSystemData(),
  actionHistory: generateActionHistoryData(),
  auths: generateAuthData(),
  authFunctions: generateAuthFunctionData(),
  authRoles: generateAuthRoleData(),
  authMembers: generateAuthMemberData(),
  authAdmins: generateAuthAdminData(),
  authAccounts: generateAuthAccountData(),
};
