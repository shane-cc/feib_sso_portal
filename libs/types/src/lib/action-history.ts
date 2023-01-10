export interface IndividualActionHistory {
  actionHistoryId: string;
  platform: string;
  authFunctionCategory: string;
  authFunctionName: string;
  authFunctionCode: string;
  actionStatus: 'SUCCESS' | 'FAIL';
  actionIp: string;
  actionDate: string;
}
