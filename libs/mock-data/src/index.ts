import {
  ActionHistoryData,
  generateActionHistoryData,
} from './lib/action-history-data';
import { AuthData, generateAuthData } from './lib/auth-data';
import { generateSystemData, SystemData } from './lib/system-data.ts';

export interface BaseData {
  id: string;
}

interface DB {
  systems: SystemData[];
  actionHistory: ActionHistoryData[];
  auths: AuthData[];
}

module.exports = () => {
  const data: DB = {
    systems: [],
    actionHistory: [],
    auths: [],
  };
  data.systems = generateSystemData();
  data.actionHistory = generateActionHistoryData();
  data.auths = generateAuthData();
  return data;
};
