export const enum ActionStatus {
  SUCCESS = 'SUCCESS',
  FAIL = 'FAIL',
}

export interface IndividualActionHistory {
  actionHistoryId: string;
  platform: string;
  authFunctionCategory: string;
  authFunctionName: string;
  authFunctionCode: string;
  actionStatus: ActionStatus;
  actionIp: string;
  actionDate: string;
}
