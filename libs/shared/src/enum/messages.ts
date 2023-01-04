export enum GeneralMessage {
  'EMPTY_SYSTEM_LIST' = '目前尚未有任何服務，請聯絡相關管理人員將服務加入服務列表！',
  'EMPTY_ACTION_HISTORY' = '目前尚未有任何操作紀錄...',
  'EMPTY_AUTH_LIST' = '目前沒有已設定的授權碼，請點擊【匯入授權碼】按鈕以匯入功能授權碼。',
  'EMPTY_AUTH_SELECTION_LIST' = '目前沒有已設定的授權碼，請至授權碼管理分頁，點擊【匯入授權碼】按鈕以匯入功能授權碼。',
  'EMPTY_ROLE_LIST' = '目前沒有已設定的群組，請點擊【新增群組】按鈕以新增群組。',
  'EMPTY_ROLE_SELECTION_LIST' = '目前沒有已設定的群組，請至群組設定分頁，點擊【新增群組】按鈕以新增群組。',
  'EMPTY_MEMBER_LIST' = '目前沒有已設定的成員帳號，請點擊【新增成員帳號】按鈕以新增成員帳號。',
  'EMPTY_ACCOUNT_LIST' = '目前沒有可選擇的成員帳號，請聯絡相關網管資安人員。',
  'EMPTY_ADMIN_LIST' = '目前沒有已設定的服務管理員，請點擊【新增管理員】按鈕以新增管理員。',
}

export enum FormErrorMessage {
  'SYSTEM_NAME' = '請填寫服務名稱',
  'SYSTEM_CODE' = '請填寫服務代碼',
  'SYSTEM_URL' = '請填寫正確的網址',
  'AUTH_FUNCTION_CODE' = '請填寫授權代碼',
  'AUTH_FUNCTION_NAME' = '請填寫功能名稱',
  'AUTH_FUNCTION_CATEGORY' = '請填寫功能分類',
  'AUTH_ROLE_CODE' = '請填寫群組代碼',
  'AUTH_ROLE_NAME' = '請填寫群組名稱',
  'MEMBER_AUTH_ROLE_CODE' = '請選擇要指派的群組',
}

export enum ErrorMessage {
  'API_FAILED' = 'API 呼叫失敗！',
  'API_CANCELED' = 'API 呼叫已取消！',
  'API_MISSING' = '請求資源錯誤！',
  'NO_RESPONSE' = 'API 沒有回應！',
  'NETWORK_ERROR' = '網路連線異常！',
  'SYSTEM_LIST_FAILED' = '無法取得服務列表！',
  'ACTION_HISTORY_FAILED' = '無法取得操作紀錄！',
  'CREATE_SYSTEM_FAILED' = '新增服務失敗！',
  'UPDATE_SYSTEM_FAILED' = '更新服務失敗！',
  'DELETE_SYSTEM_FAILED' = '刪除服務失敗！',
  'UPLOAD_SYSTEM_IMAGE_FAILED' = '上傳服務圖片失敗！',
  'UPLOAD_AUTH_FAILED' = '匯入授權碼設定失敗！',
  'DELETE_AUTH_FAILED' = '授權碼設定刪除失敗！',
  'UPDATE_AUTH_FAILED' = '授權碼設定更新失敗！',
  'DELETE_ROLE_FAILED' = '群組刪除失敗！',
  'CREATE_ROLE_FAILED' = '群組新增失敗！',
  'UPDATE_ROLE_FAILED' = '群組更新失敗！',
  'NO_SELECTED_AUTH_FUNCTION' = '請至少選擇一個功能權限',
  'DELETE_MEMBER_FAILED' = '成員帳號刪除失敗！',
  'CREATE_MEMBER_FAILED' = '成員帳號新增失敗！',
  'UPDATE_MEMBER_FAILED' = '成員帳號編輯失敗！',
  'NO_SELECTED_ACCOUNT' = '請至少選擇一個成員帳號',
  'NO_SELECTED_AUTH_ROLE' = '請至少選擇一個群組',
  'CREATE_ADMIN_FAILED' = '管理員帳號新增失敗！',
  'DELETE_ADMIN_FAILED' = '管理員帳號刪除失敗！',
}
