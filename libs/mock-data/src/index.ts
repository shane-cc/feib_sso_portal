import {
  ActionHistoryData,
  generateActionHistoryData,
} from './lib/action-history-data';
import {
  AuthAccountData,
  generateAuthAccountData,
} from './lib/auth-account-data';
import { AuthAdminData, generateAuthAdminData } from './lib/auth-admin-data';
import { AuthData, generateAuthData } from './lib/auth-data';
import {
  AuthFunctionData,
  generateAuthFunctionData,
} from './lib/auth-function-data';
import { AuthMemberData, generateAuthMemberData } from './lib/auth-member-data';
import { AuthRoleData, generateAuthRoleData } from './lib/auth-role-data';
import { generateSystemData, SystemData } from './lib/system-data.ts';

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

module.exports = () => {
  const data: DB = {
    systems: generateSystemData(),
    actionHistory: generateActionHistoryData(),
    auths: generateAuthData(),
    authFunctions: generateAuthFunctionData(),
    authRoles: generateAuthRoleData(),
    authMembers: generateAuthMemberData(),
    authAdmins: generateAuthAdminData(),
    authAccounts: generateAuthAccountData(),
  };
  return data;
};
