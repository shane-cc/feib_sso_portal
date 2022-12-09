import { System } from '@sso-platform/types';
import { generateSystemData } from './lib/system-data.ts';

interface DB {
  systems: System[];
}

module.exports = () => {
  const data: DB = {
    systems: [],
  };
  data.systems = generateSystemData();
  return data;
};
