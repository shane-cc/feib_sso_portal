import { ColorVaraints } from './theme';

export interface IndividualActionHistory {
  platform: string;
  action: string;
  date: string;
  type?: ColorVaraints;
}
