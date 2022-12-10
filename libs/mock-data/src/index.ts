import {
  ActionHistoryData,
  generateActionHistoryData,
} from './lib/action-history-data';
import { generateSystemData, SystemData } from './lib/system-data.ts';

export interface BaseData {
  id: string;
}

interface DB {
  systems: SystemData[];
  actionHistory: ActionHistoryData[];
}

module.exports = () => {
  const data: DB = {
    systems: [],
    actionHistory: [],
  };
  data.systems = generateSystemData();
  data.actionHistory = generateActionHistoryData();
  return data;
};
