export enum GeneralMessage {
  'EMPTY_SYSTEM_LIST' = '目前尚未有任何系統，請聯絡相關管理人員將系統加入系統列表！',
  'EMPTY_ACTION_HISTORY' = '目前尚未有任何操作紀錄...',
}

export enum ErrorMessage {
  'API_FAILED' = 'API 呼叫失敗！',
  'API_CANCELED' = 'API 呼叫已取消！',
  'API_MISSING' = '請求資源錯誤！',
  'NO_RESPONSE' = 'API 沒有回應！',
  'NETWORK_ERROR' = '網路連線異常！',
  'SYSTEM_LIST_FAILED' = '無法取得系統列表！',
  'ACTION_HISTORY_FAILED' = '無法取得操作紀錄！',
  'CREATE_SYSTEM_FAILED' = '新增系統失敗！',
  'UPDATE_SYSTEM_FAILED' = '更新系統失敗！',
  'DELETE_SYSTEM_FAILED' = '刪除系統失敗！',
  'UPLOAD_SYSTEM_IMAGE_FAILED' = '上傳系統圖片失敗！',
  'UPLOAD_AUTH_FAILED' = '匯入權限設定失敗！',
  'DELETE_AUTH_FAILED' = '權限設定刪除失敗！',
  'UPDATE_AUTH_FAILED' = '權限設定更新失敗！',
  'DELETE_ROLE_FAILED' = '角色刪除失敗！',
  'CREATE_ROLE_FAILED' = '角色新增失敗！',
  'UPDATE_ROLE_FAILED' = '角色更新失敗！',
}
