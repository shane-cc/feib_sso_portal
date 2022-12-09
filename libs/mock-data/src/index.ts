import { IndividualActionHistory, System } from '@sso-platform/types';
import { generateActionHistoryData } from './lib/action-history-data';
import { generateSystemData } from './lib/system-data.ts';

interface DB {
  systems: System[];
  actionHistory: IndividualActionHistory[];
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
