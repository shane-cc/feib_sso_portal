# SSO Portal and SSO Admin Temp API Interface Doc

## 名詞定義

以下文件中將以【SSO Portal】作為【Bankee 單一登入入口】之代稱；

將以【SSO Admin】作為【Bankee 服務管理與稽核系統】之代稱



## 一般性問題

- 新增或編輯的api，成功是以回傳狀態為成功為主嗎？ （目前以此判斷規劃，若需要改成以下判斷亦可配合）
  還是要以回傳狀態為成功，並有帶成功新增／編輯的資料回傳才算成功？
- 檔案上傳的方式是否以FormData multi-part的方式，或要先轉成字串放在body傳送？



## General

一般功能

### API List

| METHOD | ENDPOINT | USAGE                         | MEMO                                                         |
| ------ | -------- | ----------------------------- | ------------------------------------------------------------ |
| POST   |          | [登入SSO Portal](#登入)       | 登入頁若如1/7會議中所述，將移至其他頁面，是否就不用這支api？ |
| POST   |          | [登出](#登出)                 | 是否需要登出的api？另外，是登出個別服務還是登出整個sso？     |
| POST   |          | [取得所屬權限](#取得所屬權限) |                                                              |



#### 登入

##### Request body

| KEY       | TYPE   | DESCRIPTION | MEMO |
| --------- | ------ | ----------- | ---- |
| account*  | string | 帳號        |      |
| password* | string | 密碼        |      |

##### Response data

| KEY  | TYPE | DESCRIPTION | MEMO |
| ---- | ---- | ----------- | ---- |
|      |      |             |      |



#### 登出

##### Request body

| KEY  | TYPE | DESCRIPTION | MEMO |
| ---- | ---- | ----------- | ---- |
|      |      |             |      |

##### Response data

| KEY  | TYPE | DESCRIPTION | MEMO |
| ---- | ---- | ----------- | ---- |
|      |      |             |      |



#### 取得所屬權限

##### Request body

| KEY                | TYPE             | DESCRIPTION                                                  | MEMO |
| ------------------ | ---------------- | ------------------------------------------------------------ | ---- |
| authFunctionCodes* | array of strings | 要查詢的授權代碼列表，若為空陣列，請回傳該帳號於該系統所具備的所有授權功能 |      |
| systemId*          | string           | 要查詢權限的系統ID                                           |      |

##### Response data

| KEY    | TYPE                           | DESCRIPTION                                    | MEMO |
| ------ | ------------------------------ | ---------------------------------------------- | ---- |
| auths* | array of [AuthFunc](#AuthFunc) | 所查詢的授權功能列表結果，若無資料請回傳空陣列 |      |

##### Example

```json
// Request body
{
	"authFunctionCodes": ["create_new_member", "edit_member", "delete_member"],
	"systemId": "59656d26-8aea-4531-afd0-f1fd33268025"
}

// Response data
{
	"auths": [{
		"authFunctionCode": "CREATE_SYSTEM",
		"isAuth": true
	}, {
		"authFunctionCode": "EDIT_SYSTEM",
		"isAuth": true
	}, {
		"authFunctionCode": "DELETE_SYSTEM",
		"isAuth": true
	}, {
		"authFunctionCode": "READ_SYSTEM_AUTH",
		"isAuth": true
	}, {
		"authFunctionCode": "ASSIGN_SYSTEM_ADMIN",
		"isAuth": true
	}, {
		"authFunctionCode": "DELETE_SYSTEM_ADMIN",
		"isAuth": true
	}, {
		"authFunctionCode": "READ_SYSTEM_ADMIN",
		"isAuth": true
	}]
}
```



### Data Modal

###### AuthFunc

| FIELD NAME        | TYPE    | DESCRIPTION                | MEMO |
| ----------------- | ------- | -------------------------- | ---- |
| authFunctionCode* | string  | 授權代碼                   |      |
| isAuth*           | boolean | 是否有此授權代碼之使用權限 |      |



## 個人操作記錄查詢

### API List

| METHOD | ENDPOINT | USAGE                                 | MEMO                                                         |
| ------ | -------- | ------------------------------------- | ------------------------------------------------------------ |
| POST   |          | [取得個人操作記錄](#取得個人操作記錄) | 此api於sso portal或sso admin之Dashboard或【個人操作記錄查詢】分頁呼叫 |



#### 取得個人操作記錄

##### Request body

| KEY   | TYPE   | DESCRIPTION          | MEMO |
| ----- | ------ | -------------------- | ---- |
| limit | number | 欲限制的查詢結果筆數 |      |

##### Response data

| KEY            | TYPE                                     | DESCRIPTION          | MEMO |
| -------------- | ---------------------------------------- | -------------------- | ---- |
| actionHistory* | array of [ActionHistory](#ActionHistory) | 所查詢的操作記錄列表 |      |

##### Example

```json
// Request body
{
  "limit": 5
}

// Response data
{
	"actionHistory": [{
		"actionHistoryId": "9be71c2b-5a9a-4fad-8103-811bacbfe477",
		"platform": "SSO單一登入平台",
		"authFunctionCategory": "登入/登出",
		"authFunctionName": "登出SSO",
		"authFunctionCode": "logout",
		"actionStatus": "SUCCESS",
		"actionIp": "1.34.556.789",
		"actionDate": "2022.11.05 19:32:49"
	}, {
		"actionHistoryId": "a300eae8-37a8-4a0f-8f52-88d50e0aa2de",
		"platform": "會員管理系統",
		"authFunctionCategory": "系統",
		"authFunctionName": "編輯會員所有資訊",
		"authFunctionCode": "edit_member",
		"actionStatus": "SUCCESS",
		"actionIp": "1.34.556.789",
		"actionDate": "2022.11.05 09:36:56"
	}, {
		"actionHistoryId": "edb735ce-67dd-434f-b3f6-482f8647ca56",
		"platform": "會員管理系統",
		"authFunctionCategory": "系統",
		"authFunctionName": "新建新的會員",
		"authFunctionCode": "create_new_member",
		"actionStatus": "SUCCESS",
		"actionIp": "1.34.556.789",
		"actionDate": "2022.11.05 09:04:13"
	}, {
		"actionHistoryId": "48d9bdcd-5d2c-461b-a576-b35f33f8481d",
		"platform": "會員管理系統",
		"authFunctionCategory": "系統",
		"authFunctionName": "新建新的的會員",
		"authFunctionCode": "create_new_member",
		"actionStatus": "FAIL",
		"actionIp": "1.34.556.789",
		"actionDate": "2022.11.04 19:32:49"
	}, {
		"actionHistoryId": "35a17fb7-b4da-42c7-831d-c8182ac16e24",
		"platform": "會員管理系統",
		"authFunctionCategory": "登入/登出",
		"authFunctionName": "登入",
		"authFunctionCode": "login",
		"actionStatus": "SUCCESS",
		"actionIp": "1.34.556.789",
		"actionDate": "2022.11.04 09:03:12"
	}]
}
```



### Data Modal

###### ActionHistory

| FIELD NAME           | TYPE                | DESCRIPTION          | MEMO |
| -------------------- | ------------------- | -------------------- | ---- |
| actionHistoryId      | string              | 該操作記錄的系統ID   |      |
| platform             | string              | 該操作動作的服務名稱 |      |
| authFunctionCategory | string              | 該操作動作的功能分類 |      |
| authFunctionName     | string              | 該操作動作的功能名稱 |      |
| authFunctionCode     | string              | 該操作動作的授權代碼 |      |
| actionStatus         | "SUCCESS" \| "FAIL" | 該操作動作的狀態     |      |
| actionIp             | string              | 該操作動作的使用者IP |      |
| actionDate           | string              | 該操作動作的操作時間 |      |



## 服務上下架與查詢

### API List

| METHOD | ENDPOINT | USAGE                                         | MEMO                                                         |
| ------ | -------- | --------------------------------------------- | ------------------------------------------------------------ |
| POST   |          | [取得所有服務](#取得所有服務)                 | 此api於sso admin dashboard呼叫，用於取得所有已上架之服務     |
| POST   |          | [取得所有可存取的服務](#取得所有可存取的服務) | 此api於sso portal dashboard呼叫，用於取得該帳號所有可存取之服務 |
| POST   |          | [取得單一服務資訊](#取得單一服務諮詢)         | 此api於個別服務管理頁面或編輯服務前會呼叫，用於取得個別服務的資訊 |
| POST   |          | [上架新的服務](#上架新的服務)                 | 此api於sso admin新增服務時呼叫                               |
| POST   |          | [編輯單一服務資訊](#編輯單一服務資訊)         | 此api於sso admin編輯服務資訊時呼叫                           |
| POST   |          | [刪除單一服務](#刪除單一服務)                 | 此api於sso admin刪除單一服務時呼叫                           |



#### 取得所有服務

##### Request body

| KEY   | TYPE   | USAGE                                                  | MEMO |
| ----- | ------ | ------------------------------------------------------ | ---- |
| query | string | 欲搜尋的服務代碼、服務名稱關鍵字（英文字母不分大小寫） |      |

##### Response data

| KEY      | TYPE                       | DESCRIPTION | MEMO |
| -------- | -------------------------- | ----------- | ---- |
| systems* | array of [System](#System) | 服務列表    |      |

##### Example

```json
// Request body
{
  "query": ""
}

// Response data
{
	"systems": [{
    "systemId": "2becd3f9-ea5d-4cc6-bf55-b30ea3df9fc4",
		"systemCode": "system-1",
		"systemName": "AP0 Admin Panel",
		"systemUrl": "http://localhost:4201",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/30-Twitter-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
		"systemCode": "system-2",
		"systemName": "會員管理系統",
		"systemUrl": "https://member-management.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/22-Yahoo-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "19b81ba6-b991-4ebb-abd0-4c88900a3fa8",
		"systemCode": "system-3",
		"systemName": "行政文件稽核系統",
		"systemUrl": "https://administration-audit.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/29-Slack-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "16f3d7ad-53fa-4563-ad0e-a79d659f4aed",
		"systemCode": "system-4",
		"systemName": "社群銀行活動管理",
		"systemUrl": "https://sm-bank-activities.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/16-Reddit-256.png",
		"auth": {
			"isAuthEditable": false
		}
	}, {
    "systemId": "56d1b485-485d-40d2-ad85-d7add0f5a656",
		"systemCode": "system-5",
		"systemName": "中山分行訂餐系統",
		"systemUrl": "https://ch02-meal-order.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/19-Digg-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "8653a6b5-6ce9-467d-bb88-ec5ac2ae8abc",
		"systemCode": "system-6",
		"systemName": "中山分行快遞郵件登記",
		"systemUrl": "https://ch02-mail-dilivery.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/21-Gmail-256.png",
		"auth": {
			"isAuthEditable": false
		}
	}]
}
```



#### 取得所有可存取的服務

##### Request body

| KEY   | TYPE   | DESCRIPTION                                            | MEMO |
| ----- | ------ | ------------------------------------------------------ | ---- |
| query | string | 欲搜尋的服務代碼、服務名稱關鍵字（英文字母不分大小寫） |      |

##### Response data

| KEY      | TYPE                       | DESCRIPTION | MEMO |
| -------- | -------------------------- | ----------- | ---- |
| systems* | array of [System](#System) | 服務列表    |      |

##### Example

```json
// Request body
{
  "query": ""
}

// Response data
{
	"systems": [{
    "systemId": "2becd3f9-ea5d-4cc6-bf55-b30ea3df9fc4",
		"systemCode": "system-1",
		"systemName": "AP0 Admin Panel",
		"systemUrl": "http://localhost:4201",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/30-Twitter-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
		"systemCode": "system-2",
		"systemName": "會員管理系統",
		"systemUrl": "https://member-management.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/22-Yahoo-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "19b81ba6-b991-4ebb-abd0-4c88900a3fa8",
		"systemCode": "system-3",
		"systemName": "行政文件稽核系統",
		"systemUrl": "https://administration-audit.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/29-Slack-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "16f3d7ad-53fa-4563-ad0e-a79d659f4aed",
		"systemCode": "system-4",
		"systemName": "社群銀行活動管理",
		"systemUrl": "https://sm-bank-activities.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/16-Reddit-256.png",
		"auth": {
			"isAuthEditable": false
		}
	}, {
    "systemId": "56d1b485-485d-40d2-ad85-d7add0f5a656",
		"systemCode": "system-5",
		"systemName": "中山分行訂餐系統",
		"systemUrl": "https://ch02-meal-order.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/19-Digg-256.png",
		"auth": {
			"isAuthEditable": true
		}
	}, {
    "systemId": "8653a6b5-6ce9-467d-bb88-ec5ac2ae8abc",
		"systemCode": "system-6",
		"systemName": "中山分行快遞郵件登記",
		"systemUrl": "https://ch02-mail-dilivery.sso-platform.com",
		"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/21-Gmail-256.png",
		"auth": {
			"isAuthEditable": false
		}
	}]
}
```



#### 取得單一服務資訊

##### Request body

| KEY       | TYPE   | DESCRIPTION          | MEMO |
| --------- | ------ | -------------------- | ---- |
| systemId* | string | 欲查詢的服務之系統ID |      |

##### Response data

| KEY     | TYPE              | DESCRIPTION      | MEMO |
| ------- | ----------------- | ---------------- | ---- |
| system* | [System](#System) | 所查詢之服務資訊 |      |

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c"
}

// Response data
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
	"systemCode": "system-2",
	"systemName": "會員管理系統",
	"systemUrl": "https://member-management.sso-platform.com",
	"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/22-Yahoo-256.png",
	"auth": {
		"isAuthEditable": true
	}
}
```



#### 上架新的服務

##### Request body

| KEY         | TYPE   | DESCRIPTION          | MEMO |
| ----------- | ------ | -------------------- | ---- |
| systemCode* | string | 使用者自訂之服務代碼 |      |
| systemName* | string | 使用者自訂之服務名稱 |      |
| systemUrl*  | string | 服務的URL            |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemCode": "test_system_1",
  "systemName": "測試服務1",
  "systemUrl": "https://www.google.com"
}

// Response data
{}
```



#### 編輯單一服務資訊

##### Request body

| KEY        | TYPE   | DESCRIPTION          | MEMO |
| ---------- | ------ | -------------------- | ---- |
| systemId*  | string | 欲編輯的服務之系統ID |      |
| systemCode | string | 使用者自訂之服務代碼 |      |
| systemName | string | 使用者自訂之服務名稱 |      |
| systemUrl  | string | 服務的URL            |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "systemCode": "system-2",
	"systemName": "會員管理系統",
	"systemUrl": "https://member-management.sso-platform.com",
	"systemImage": "https://cdn2.iconfinder.com/data/icons/social-media-2189/48/22-Yahoo-256.png"
}

// Response data
{}
```



#### 刪除單一服務

##### Request body

| KEY       | TYPE   | DESCRIPTION          | MEMO |
| --------- | ------ | -------------------- | ---- |
| systemId* | string | 欲刪除的服務之系統ID |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c"
}

// Response data
{}
```



### Data Modal

###### System

| FIELD NAME | TYPE                      | DESCRIPTION                  | MEMO |
| ---------- | ------------------------- | ---------------------------- | ---- |
| systemId   | string                    | 系統給予的服務ID             |      |
| systemCode | string                    | 服務代碼（資料長度限制50字） |      |
| systemName | string                    | 服務名稱（資料長度限制25字） |      |
| systemUrl  | string                    | 服務URL（資料長度不限）      |      |
| auth       | [SystemAuth](#SystemAuth) | 服務相關權限                 |      |

###### SystemAuth

| FIELD NAME     | TYPE    | DESCRIPTION          | MEMO |
| -------------- | ------- | -------------------- | ---- |
| isAuthEditable | boolean | 是否為該服務的管理員 |      |



## 管理員設定

### API List

此系列api於sso admin個別服務設定管理的管理員設定分頁中使用

| METHOD | ENDPOINT | USAGE                                                 | MEMO                                 |
| ------ | -------- | ----------------------------------------------------- | ------------------------------------ |
| POST   |          | [取得所有管理員列表](#取得所有管理員列表)             | 用於取得該服務所有已設定的管理員列表 |
| POST   |          | [新增管理員](#新增管理員)                             | 用於新增該服務的管理員               |
| POST   |          | [刪除單一管理員](#刪除單一管理員)                     | 用於刪除該服務的單一管理員           |
| POST   |          | [取得可設定的成員帳號清單](#取得可設定的成員帳號清單) | 用於取得該服務可設定的成員帳號清單   |



#### 取得所有管理員列表

##### Request body

| KEY       | TYPE   | DESCRIPTION                                                  | MEMO |
| --------- | ------ | ------------------------------------------------------------ | ---- |
| systemId* | string | 欲查詢之服務的系統ID                                         |      |
| query     | string | 欲搜尋的管理員之部門／帳號／名稱關鍵字（英文字母不分大小寫） |      |
| page      | number | 欲查詢之列表分頁頁碼                                         |      |

##### Response data

| KEY         | TYPE                                 | DESCRIPTION          | MEMO |
| ----------- | ------------------------------------ | -------------------- | ---- |
| totalPage*  | number                               | 所有查詢結果之總頁數 |      |
| authAdmins* | array of [AuthAccount](#AuthAccount) | 管理員帳號列表       |      |

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "query": "",
  "page": 1
}

// Response data
{
	"authAdmins": [{
		"memberId": "1d3b7a3d-cdc4-400d-80eb-1932b0ba36a8",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNE",
		"memberName": "anne"
	}, {
		"memberId": "eb43cc08-0d9e-45ef-9c9e-0afb03b0b7bf",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNEPRO2",
		"memberName": "anne pro 2"
	}, {
		"memberId": "bca7d2d5-c23d-4c02-b0e8-2355a52868f4",
		"memberDepartment": "資訊服務處",
		"memberAccount": "MOJO68",
		"memberName": "mojo 68"
	}],
	"totalPage": 1
}
```



#### 新增管理員

##### Request body

| KEY             | TYPE            | DESCRIPTION                | MEMO |
| --------------- | --------------- | -------------------------- | ---- |
| systemId*       | string          | 欲新增管理員之服務的系統ID |      |
| memberAccounts* | array of string | 要新增的成員帳號列表       |      |

##### Response data

無

##### Example

```json
// Request body
{
	"systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
	"memberAccounts": ["MOJO84", "TOFU65"],
}

// Response data
{}
```



#### 刪除單一管理員

##### Request body

| KEY           | TYPE   | DESCRIPTION                | MEMO |
| ------------- | ------ | -------------------------- | ---- |
| systemId*     | string | 欲刪除管理員之服務的系統ID |      |
| memberAccout* | string | 欲刪除之成員帳號           |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "memberAccount": "MOJO84"
}

// Response data
{}
```



#### 取得可設定的成員帳號清單

##### Request body

| KEY       | TYPE   | DESCRIPTION                                                  | MEMO |
| --------- | ------ | ------------------------------------------------------------ | ---- |
| systemId* | string | 欲取得成員帳號清單之服務的系統ID                             |      |
| query     | string | 欲搜尋的成員之部門／帳號／姓名（英文不分大小寫）             |      |
| page      | string | 欲查詢的列表分頁頁碼                                         |      |
| ???       |        | <strong style="color: tomato;">待確認AD資料結構後再另行討論是否需要加入其他篩選欄位</strong> |      |

##### Response data

| KEY           | TYPE                                             | DESCRIPTION          | MEMO |
| ------------- | ------------------------------------------------ | -------------------- | ---- |
| totalPages*   | number                                           | 所有查詢結果之總頁數 |      |
| authAccounts* | array of [AuthMemberAccount](#AuthMemberAccount) | 可設定的成員帳號列表 |      |

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "query": "",
  "page": 1
}

// Response data
{
	"authMembers": [{
		"authMemberId": "4068e2e5-b383-4eb9-b606-240038fccd34",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNE",
		"memberName": "anne",
		"isChecked": true
	}, {
		"authMemberId": "9a5e3e2e-0fab-4bd1-8042-2bff321b972c",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNEPRO2",
		"memberName": "anne pro 2",
		"isChecked": true
	}, {
		"authMemberId": "6617f196-1109-4651-8275-58a6a1fe17fa",
		"memberDepartment": "資訊服務處",
		"memberAccount": "MOJO68",
		"memberName": "mojo 68",
		"isChecked": false
	}, {
		"authMemberId": "d91712a8-a0b2-467e-82de-a3504c91b97b",
		"memberDepartment": "資訊服務處",
		"memberAccount": "MOJO84",
		"memberName": "mojo 84",
		"isChecked": false
	}, {
		"authMemberId": "6b52e237-4971-4210-a112-b6f685281380",
		"memberDepartment": "客戶服務處",
		"memberAccount": "TOFU65",
		"memberName": "tofu 65",
		"isChecked": false
	}, {
		"authMemberId": "41a945ad-e631-4d79-a17a-ac96f9839487",
		"memberDepartment": "資訊服務處",
		"memberAccount": "AUDIN75",
		"memberName": "audin 75",
		"isChecked": true
	}, {
		"authMemberId": "cd48e5b4-9bc3-4944-8755-3a4c5e5abfef",
		"memberDepartment": "客戶服務處",
		"memberAccount": "ZOOM65",
		"memberName": "zoom 65",
		"isChecked": true
	}, {
		"authMemberId": "c014b795-a7bf-4665-bc74-9945ae38c617",
		"memberDepartment": "客戶服務處",
		"memberAccount": "GLORIOUSPRO",
		"memberName": "Glorious Pro",
		"isChecked": false
	}, {
		"authMemberId": "3962974c-ac9d-41ef-b44a-eb90e98fdb39",
		"memberDepartment": "客戶服務處",
		"memberAccount": "VISSLES84",
		"memberName": "Vissles 84",
		"isChecked": false
	}, {
		"authMemberId": "77da0d49-cd16-4ec8-8ca4-22de54b0b05d",
		"memberDepartment": "資訊服務處",
		"memberAccount": "SPACE65",
		"memberName": "space 65",
		"isChecked": false
	}],
	"totalPage": 2
}
```



### Data Modal

###### AuthAccount

以下資料應該來自AD，暫無長度限制規劃

| FIELD NAME       | TYPE   | DESCRIPTION    | MEMO |
| ---------------- | ------ | -------------- | ---- |
| memberId         | string | 該成員之系統ID |      |
| memberDepartment | string | 該成員之部門   |      |
| memberAccount    | string | 該成員之帳號   |      |
| memberName       | string | 該成員之姓名   |      |



## 授權碼管理

### API List

| METHOD | ENDPOINT | USAGE                             | MEMO                                                         |
| ------ | -------- | --------------------------------- | ------------------------------------------------------------ |
| POST   |          | [取得所有授權碼](#取得所有授權碼) | 此api由個別服務的管理員於sso portal或資安人員於sso admin個別服務設定管理之【授權碼管理】分頁呼叫 |
| POST   |          | [匯入授權碼](#匯入授權碼)         | 此api由個別服務的管理員於sso portal個別服務設定管理之【授權碼管理】分頁呼叫 |
| POST   |          | [編輯單一授權碼](#編輯單一授權碼) | 此api由個別服務的管理員於sso portal個別服務設定管理之【授權碼管理】分頁呼叫 |
| POST   |          | [刪除單一授權碼](#刪除單一授權碼) | 此api由個別服務的管理員於sso portal個別服務設定管理之【授權碼管理】分頁呼叫 |



#### 取得所有授權碼

##### Request body

| KEY       | TYPE   | DESCRIPTION                                      | MEMO |
| --------- | ------ | ------------------------------------------------ | ---- |
| systemId* | string | 欲查詢的服務之系統ID                             |      |
| query     | string | 欲搜尋的授權代碼／功能名稱（英文字母不分大小寫） |      |
| page      | number | 欲查詢之列表分頁頁碼                             |      |

##### Response body

| KEY            | TYPE                                               | DESCRIPTION          | MEMO |
| -------------- | -------------------------------------------------- | -------------------- | ---- |
| totalPage*     | number                                             | 所有查詢結果之總頁數 |      |
| authFunctions* | array of [AuthFunctionDetail](#AuthFunctionDetail) | 已設定的授權碼列表   |      |

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "query": "",
  "page": 1
}

// Response data
{
	"authFunctions": [{
		"authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
		"authFunctionCode": "create_new_member",
		"authFunctionName": "建立新的會員",
		"authFunctionCategory": "系統",
		"isActive": true
	}, {
		"authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
		"authFunctionCode": "edit_member",
		"authFunctionName": "編輯會員所有資訊",
		"authFunctionCategory": "系統",
		"isActive": true
	}, {
		"authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
		"authFunctionCode": "delete_member",
		"authFunctionName": "刪除會員",
		"authFunctionCategory": "系統",
		"isActive": true
	}, {
		"authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
		"authFunctionCode": "edit_member_level",
		"authFunctionName": "編輯會員級別",
		"authFunctionCategory": "系統",
		"isActive": false
	}, {
		"authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
		"authFunctionCode": "create_member_level",
		"authFunctionName": "建立會員級別",
		"authFunctionCategory": "系統",
		"isActive": false
	}, {
		"authFunctionId": "0f38f2de-0ddf-4bbd-8cd0-5e844cb92c99",
		"authFunctionCode": "delete_member_level",
		"authFunctionName": "刪除會員級別",
		"authFunctionCategory": "系統",
		"isActive": false
	}, {
		"authFunctionId": "d274d4f7-d863-43c1-bd0b-3ae29e1bc968",
		"authFunctionCode": "assign_member_level",
		"authFunctionName": "指派會員級別",
		"authFunctionCategory": "系統",
		"isActive": false
	}, {
		"authFunctionId": "7a27173b-dcc6-4407-bcdf-335cf406e812",
		"authFunctionCode": "create_member_group",
		"authFunctionName": "建立會員群組",
		"authFunctionCategory": "系統",
		"isActive": true
	}, {
		"authFunctionId": "b2b16657-dadf-465a-a538-51b10ae63380",
		"authFunctionCode": "edit_member_group",
		"authFunctionName": "編輯會員群組",
		"authFunctionCategory": "系統",
		"isActive": true
	}, {
		"authFunctionId": "6fcd8a7d-7b7c-411c-a6cc-d4668915a294",
		"authFunctionCode": "delete_member_group",
		"authFunctionName": "刪除會員群組",
		"authFunctionCategory": "系統",
		"isActive": true
	}],
	"totalPage": 2
}
```



#### 匯入授權碼

##### Request body

| KEY       | TYPE            | DESCRIPTION                                                  | MEMO |
| --------- | --------------- | ------------------------------------------------------------ | ---- |
| systemId* | string          | 欲匯入授權碼之服務的系統ID                                   |      |
| authFile* | File ? string ? | 上傳的檔案 → <strong style="color: tomato;">類型依上傳方式而定，待討論</strong> |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "authFile": ???
}
  
// Response data
  {}
```



#### 編輯單一授權碼

##### Request body

| KEY          | TYPE                                      | DESCRIPTION                | MEMO |
| ------------ | ----------------------------------------- | -------------------------- | ---- |
| systemId*    | string                                    | 欲編輯授權碼之服務的系統ID |      |
| authFunction | [AuthFunctionDetail](#AuthFunctionDetail) | 欲編輯的授權碼內容         |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "authFUnction": {
    "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
    "authFunctionCode": "create_new_member",
    "authFunctionName": "建立新會員",
    "authFunctionCategory": "系統",
    "isActive": true
  }
}

// Response data
{}
```



#### 刪除單一授權碼

##### Request body

| KEY             | TYPE   | DESCRIPTION                | MEMO |
| --------------- | ------ | -------------------------- | ---- |
| systemId*       | string | 欲刪除授權碼之服務的系統ID |      |
| authFunctionId* | string | 欲刪除之授權碼的系統ID     |      |

##### Response data

無

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291"
}

// Response data
{}
```



### Data Modal

###### AuthFunction

| FIELD NAME       | TYPE   | DESCRIPTION                              | MEMO |
| ---------------- | ------ | ---------------------------------------- | ---- |
| authFunctionId   | string | 該授權碼之系統ID                         |      |
| authFunctionCode | string | 使用者自訂之授權代碼（資料長度限制30字） |      |
| authFunctionName | string | 使用者自訂之功能名稱（資料長度限制15字） |      |



###### AuthFunctionDetail

| FIELD NAME           | TYPE    | DESCRIPTION                              | MEMO |
| -------------------- | ------- | ---------------------------------------- | ---- |
| authFunctionId       | string  | 該授權碼之系統ID                         |      |
| authFunctionCode     | string  | 使用者自訂之授權代碼（資料長度限制30字） |      |
| authFunctionName     | string  | 使用者自訂之功能名稱（資料長度限制15字） |      |
| authFunctionCategory | string  | 使用者自訂之功能分類（資料長度限制15字） |      |
| isActive             | boolean | 是否啟用該授權代碼                       |      |



## 群組設定

### API List

| METHOD | ENDPOINT | DESCRIPTION                   | MEMO                                                         |
| ------ | -------- | ----------------------------- | ------------------------------------------------------------ |
| POST   |          | [取得所有群組](#取得所有群組) | 此api由個別服務的管理員於sso portal或資安人員於sso admin個別服務設定管理之【群組設定】分頁呼叫 |
| POST   |          | [新增群組](#新增群組)         | 此api由個別服務的管理員於sso portal個別服務設定管理之【群組設定】分頁呼叫 |
| POST   |          | [編輯單一群組](#編輯單一群組) | 此api由個別服務的管理員於sso portal個別服務設定管理之【群組設定】分頁呼叫 |
| POST   |          | [刪除單一群組](#刪除單一群組) | 此api由個別服務的管理員於sso portal個別服務設定管理之【群組設定】分頁呼叫 |



#### 取得所有群組

##### Request body

| KEY         | TYPE            | DESCRIPTION                                      | MEMO |
| ----------- | --------------- | ------------------------------------------------ | ---- |
| systemId*   | string          | 欲查詢群組之服務的系統ID                         |      |
| query       | string          | 欲搜尋的群組代碼／群組名稱（英文字母不分大小寫） |      |
| page        | number          | 欲查詢的列表分頁頁碼                             |      |
| filterQuery | array of string | 欲篩選的授權碼系統ID列表                         |      |

##### Response data

| KEY        | TYPE                                       | DESCRIPTION          | MEMO |
| ---------- | ------------------------------------------ | -------------------- | ---- |
| totalPage* | number                                     | 所有查詢結果之總頁數 |      |
| authRoles* | array of [AuthRoleDetail](#AuthRoleDetail) | 已設定的群組列表     |      |

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "query": "",
  "page": 1,
  "filterQuery": [
    "66bcf35c-24bc-44be-9993-6a29789b6291",
    "1b088650-248c-46a3-8cd6-862ce2e075f9",
    "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
    "d274d4f7-d863-43c1-bd0b-3ae29e1bc968",
		"7a27173b-dcc6-4407-bcdf-335cf406e812"
  ]
}

// Response data
{
	"authRoles": [{
		"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
		"authRoleCode": "community_member",
		"authRoleName": "一般會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
		"authRoleCode": "advanced_member",
		"authRoleName": "進階會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
		"authRoleCode": "golden_member",
		"authRoleName": "金級會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "20b3b446-55b0-4920-b700-32f82e271475",
		"authRoleCode": "silver_member",
		"authRoleName": "銀級會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "31569a92-8312-4c47-8544-f143703ce627",
		"authRoleCode": "brass_member",
		"authRoleName": "銅級會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "30a2f2c9-fe0c-4329-986c-02df1d7eacf0",
		"authRoleCode": "newbie",
		"authRoleName": "貝比會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "46f679b5-5d5d-4936-af7e-4ff0f33c117c",
		"authRoleCode": "green_member",
		"authRoleName": "綠色會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "49c5d56b-6051-4e8e-a049-4fd2cf3f4bcd",
		"authRoleCode": "blue_member",
		"authRoleName": "藍色會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "b790e1dd-6684-46cd-8a61-56896de61110",
		"authRoleCode": "pink_member",
		"authRoleName": "粉色會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}, {
		"authRoleId": "fa2295a1-05f4-482e-b094-5c62829e35df",
		"authRoleCode": "black_member",
		"authRoleName": "黑色會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "1b088650-248c-46a3-8cd6-862ce2e075f9",
      "authFunctionCode": "edit_member",
      "authFunctionName": "編輯會員所有資訊"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
	}],
	"totalPage": 2
}
```



#### 新增群組

##### Request body

| KEY            | TYPE            | DESCRIPTION                        | MEMO |
| -------------- | --------------- | ---------------------------------- | ---- |
| systemId*      | string          | 欲新增群組之服務的系統ID           |      |
| authRoleCode*  | string          | 使用者自訂之群組代碼               |      |
| authRoleName*  | string          | 使用者自訂之群組名稱               |      |
| authFunctions* | array of string | 欲設定予該群組的授權代碼系統ID列表 |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "authRoleCode": "diamond_member",
  "authRoleName": "鑽石會員",
  "authFunctions": [
    "66bcf35c-24bc-44be-9993-6a29789b6291",
    "1b088650-248c-46a3-8cd6-862ce2e075f9",
    "d148d00f-84d7-41b4-97b8-4ad6e6a410e9"
  ]
}

// Response data
{}
```



#### 編輯單一群組

##### Request body

| KEY       | TYPE                              | DESCRIPTION              | MEMO |
| --------- | --------------------------------- | ------------------------ | ---- |
| systemId* | string                            | 欲編輯群組之服務的系統ID |      |
| authRole* | [AuthRoleDetail](#AuthRoleDetail) | 欲編輯之群組內容         |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "authRole": {
    "authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
		"authRoleCode": "golden_member",
		"authRoleName": "金級會員",
		"authRoleFunctions": [{
      "authFunctionId": "66bcf35c-24bc-44be-9993-6a29789b6291",
      "authFunctionCode": "create_new_member",
      "authFunctionName": "建立新的會員"
    }, {
      "authFunctionId": "d148d00f-84d7-41b4-97b8-4ad6e6a410e9",
      "authFunctionCode": "delete_member",
      "authFunctionName": "刪除會員"
    }, {
      "authFunctionId": "14913de4-78a6-468c-b279-bf9d85d1f682",
      "authFunctionCode": "edit_member_level",
      "authFunctionName": "編輯會員級別"
    }, {
      "authFunctionId": "f8b2f740-80d8-45f9-b142-cf3c52e32a8a",
      "authFunctionCode": "create_member_level",
      "authFunctionName": "建立會員級別"
    }]
  }
}

// Response data
{}
```



#### 刪除單一群組

##### Request body

| KEY         | TYPE   | DESCRIPTION              | MEMO |
| ----------- | ------ | ------------------------ | ---- |
| systemId*   | string | 欲刪除群組之服務的系統ID |      |
| authRoleId* | string | 欲刪除之群組的系統ID     |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395"
}

// Response data
{}
```



### Data Modal

###### AuthRole

| FIELD NAME   | TYPE   | DESCRIPTION                              | MEMO |
| ------------ | ------ | ---------------------------------------- | ---- |
| authRoleId   | string | 該群組的系統ID                           |      |
| authRoleCode | string | 使用者自訂的群組代碼（資料長度限制30字） |      |
| authRoleName | string | 使用者自訂的群組名稱（資料長度限制10字） |      |



###### AuthRoleDetail

| FIELD NAME        | TYPE                                   | DESCRIPTION                              | MEMO |
| ----------------- | -------------------------------------- | ---------------------------------------- | ---- |
| authRoleId        | string                                 | 該群組的系統ID                           |      |
| authRoleCode      | string                                 | 使用者自訂的群組代碼（資料長度限制30字） |      |
| authRoleName      | string                                 | 使用者自訂的群組名稱（資料長度限制10字） |      |
| authRoleFunctions | array of [AuthFunction](#AuthFunction) | 該群組所具備的權限代碼列表               |      |



## 成員群組管理

### API List

| METHOD | ENDPOINT | USAGE                                                 | MEMO                                                         |
| ------ | -------- | ----------------------------------------------------- | ------------------------------------------------------------ |
| POST   |          | [取得所有成員群組](#取得所有成員群組)                 | 此api由個別服務的管理員於sso portal或資安人員於sso admin個別服務設定管理之【成員群組設定】分頁呼叫 |
| POST   |          | [新增成員帳號](#新增成員帳號)                         | 此api由個別服務的管理員於sso portal個別服務設定管理之【成員群組設定】分頁呼叫 |
| POST   |          | [編輯單一成員群組](#編輯單一成員群組)                 | 此api由個別服務的管理員於sso portal個別服務設定管理之【成員群組設定】分頁呼叫 |
| POST   |          | [刪除單一成員帳號](#刪除單一成員帳號)                 | 此api由個別服務的管理員於sso portal個別服務設定管理之【成員群組設定】分頁呼叫 |
| POST   |          | [取得可設定的成員帳號清單](#取得可設定的成員帳號清單) | 此api由個別服務的管理員於sso portal個別服務設定管理之【成員群組設定】分頁呼叫 |



#### 取得所有成員群組

##### Request body

| KEY         | TYPE            | DESCRIPTION                                          | MEMO |
| ----------- | --------------- | ---------------------------------------------------- | ---- |
| systemId*   | string          | 欲查詢成員群組之服務的系統ID                         |      |
| query       | string          | 欲搜尋的成員之部門／帳號／姓名（英文字母不分大小寫） |      |
| page        | number          | 欲查詢之列表分頁頁碼                                 |      |
| filterQuery | array of string | 欲篩選的群組之系統ID列表                             |      |

##### Response data

| KEY          | TYPE                               | DESCRIPTION          | MEMO |
| ------------ | ---------------------------------- | -------------------- | ---- |
| totalPage*   | number                             | 所有查詢結果之總頁數 |      |
| authMembers* | array of [AuthMember](#AuthMember) | 已設定的成員群組列表 |      |

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "query": "",
  "page": 1,
  "filterQuery": [
    "1834e655-597b-48ee-bafa-991a8735c464",
    "500cbfc9-204f-4338-bd36-2796289f0f7b",
    "630069b6-dfbc-4457-91c2-ba35b674c395",
    "20b3b446-55b0-4920-b700-32f82e271475"
  ]
}

// Response data
{
	"authMembers": [{
		"authMemberId": "4068e2e5-b383-4eb9-b606-240038fccd34",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNE",
		"memberName": "anne",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "9a5e3e2e-0fab-4bd1-8042-2bff321b972c",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNEPRO2",
		"memberName": "anne pro 2",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "6617f196-1109-4651-8275-58a6a1fe17fa",
		"memberDepartment": "資訊服務處",
		"memberAccount": "MOJO68",
		"memberName": "mojo 68",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "d91712a8-a0b2-467e-82de-a3504c91b97b",
		"memberDepartment": "資訊服務處",
		"memberAccount": "MOJO84",
		"memberName": "mojo 84",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "6b52e237-4971-4210-a112-b6f685281380",
		"memberDepartment": "客戶服務處",
		"memberAccount": "TOFU65",
		"memberName": "tofu 65",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "41a945ad-e631-4d79-a17a-ac96f9839487",
		"memberDepartment": "資訊服務處",
		"memberAccount": "AUDIN75",
		"memberName": "audin 75",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "cd48e5b4-9bc3-4944-8755-3a4c5e5abfef",
		"memberDepartment": "客戶服務處",
		"memberAccount": "ZOOM65",
		"memberName": "zoom 65",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "c014b795-a7bf-4665-bc74-9945ae38c617",
		"memberDepartment": "客戶服務處",
		"memberAccount": "GLORIOUSPRO",
		"memberName": "Glorious Pro",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "3962974c-ac9d-41ef-b44a-eb90e98fdb39",
		"memberDepartment": "客戶服務處",
		"memberAccount": "VISSLES84",
		"memberName": "Vissles 84",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}, {
		"authMemberId": "77da0d49-cd16-4ec8-8ca4-22de54b0b05d",
		"memberDepartment": "資訊服務處",
		"memberAccount": "SPACE65",
		"memberName": "space 65",
		"memberRoles": [{
			"authRoleId": "1834e655-597b-48ee-bafa-991a8735c464",
			"authRoleCode": "community_member",
			"authRoleName": "一般會員"
		}, {
			"authRoleId": "500cbfc9-204f-4338-bd36-2796289f0f7b",
			"authRoleCode": "advanced_member",
			"authRoleName": "進階會員"
		}, {
			"authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
			"authRoleCode": "brass_member",
			"authRoleName": "銅級會員"
		}]
	}],
	"totalPage": 2
}
```



#### 新增成員帳號

##### Request body

| KEY         | TYPE            | DESCRIPTION              | MEMO |
| ----------- | --------------- | ------------------------ | ---- |
| systemId*   | string          | 欲新增成員之服務的系統ID |      |
| authRoleId* | string          | 欲指派之群組的系統ID     |      |
| accounts*   | array of string | 欲新增的成員帳號列表     |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "authRoleId": "630069b6-dfbc-4457-91c2-ba35b674c395",
  "accounts": [
    "ANNE",
    "ANNEPRO2",
    "MOJO68",
    "MOJO84"
  ]
}

// Response data
{}
```



#### 編輯單一成員群組

##### Request body

| KEY            | TYPE            | DESCRIPTION                  | MEMO |
| -------------- | --------------- | ---------------------------- | ---- |
| systemId*      | string          | 欲編輯成員群組之服務的系統ID |      |
| memberAccount* | string          | 欲編輯的成員帳號             |      |
| memberRoles*   | array of string | 欲指派之群組的系統ID列表     |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "memberAccount": "ANNE",
  "memberRoles": [
    "1834e655-597b-48ee-bafa-991a8735c464",
    "500cbfc9-204f-4338-bd36-2796289f0f7b",
    "630069b6-dfbc-4457-91c2-ba35b674c395",
    "20b3b446-55b0-4920-b700-32f82e271475"
  ]
}

// Response data
{}
```



#### 刪除單一成員群組

##### Request body

| KEY            | TYPE   | DESCRIPTION                  | MEMO |
| -------------- | ------ | ---------------------------- | ---- |
| systemId*      | string | 欲刪除成員帳號之服務的系統ID |      |
| memberAccount* | string | 欲刪除之成員的帳號           |      |

##### Response data

無

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "memberAccount": "ANNE"
}

// Response data
{}
```



#### 取得可設定的成員帳號清單

##### Request body

| KEY       | TYPE   | DESCRIPTION                                                  | MEMO |
| --------- | ------ | ------------------------------------------------------------ | ---- |
| systemId* | string | 欲取得成員帳號清單之服務的系統ID                             |      |
| query     | string | 欲搜尋的成員之部門／帳號／姓名（英文不分大小寫）             |      |
| page      | string | 欲查詢的列表分頁頁碼                                         |      |
| ???       |        | <strong style="color: tomato;">待確認AD資料結構後再另行討論是否需要加入其他篩選欄位</strong> |      |

##### Response data

| KEY           | TYPE                                             | DESCRIPTION          | MEMO |
| ------------- | ------------------------------------------------ | -------------------- | ---- |
| totalPages*   | number                                           | 所有查詢結果之總頁數 |      |
| authAccounts* | array of [AuthMemberAccount](#AuthMemberAccount) | 可設定的成員帳號列表 |      |

##### Example

```json
// Request body
{
  "systemId": "248e6886-f9c2-4e0f-a69c-47d9c6945e7c",
  "query": "",
  "page": 1
}

// Response data
{
	"authMembers": [{
		"authMemberId": "4068e2e5-b383-4eb9-b606-240038fccd34",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNE",
		"memberName": "anne",
		"isChecked": true
	}, {
		"authMemberId": "9a5e3e2e-0fab-4bd1-8042-2bff321b972c",
		"memberDepartment": "資訊服務處",
		"memberAccount": "ANNEPRO2",
		"memberName": "anne pro 2",
		"isChecked": true
	}, {
		"authMemberId": "6617f196-1109-4651-8275-58a6a1fe17fa",
		"memberDepartment": "資訊服務處",
		"memberAccount": "MOJO68",
		"memberName": "mojo 68",
		"isChecked": false
	}, {
		"authMemberId": "d91712a8-a0b2-467e-82de-a3504c91b97b",
		"memberDepartment": "資訊服務處",
		"memberAccount": "MOJO84",
		"memberName": "mojo 84",
		"isChecked": false
	}, {
		"authMemberId": "6b52e237-4971-4210-a112-b6f685281380",
		"memberDepartment": "客戶服務處",
		"memberAccount": "TOFU65",
		"memberName": "tofu 65",
		"isChecked": false
	}, {
		"authMemberId": "41a945ad-e631-4d79-a17a-ac96f9839487",
		"memberDepartment": "資訊服務處",
		"memberAccount": "AUDIN75",
		"memberName": "audin 75",
		"isChecked": true
	}, {
		"authMemberId": "cd48e5b4-9bc3-4944-8755-3a4c5e5abfef",
		"memberDepartment": "客戶服務處",
		"memberAccount": "ZOOM65",
		"memberName": "zoom 65",
		"isChecked": true
	}, {
		"authMemberId": "c014b795-a7bf-4665-bc74-9945ae38c617",
		"memberDepartment": "客戶服務處",
		"memberAccount": "GLORIOUSPRO",
		"memberName": "Glorious Pro",
		"isChecked": false
	}, {
		"authMemberId": "3962974c-ac9d-41ef-b44a-eb90e98fdb39",
		"memberDepartment": "客戶服務處",
		"memberAccount": "VISSLES84",
		"memberName": "Vissles 84",
		"isChecked": false
	}, {
		"authMemberId": "77da0d49-cd16-4ec8-8ca4-22de54b0b05d",
		"memberDepartment": "資訊服務處",
		"memberAccount": "SPACE65",
		"memberName": "space 65",
		"isChecked": false
	}],
	"totalPage": 2
}
```



### Data Modal

###### AuthMember

以下資料應該多數來自AD，暫無長度限制規劃

| FIELD NAME       | TYPE                           | DESCRIPTION                                                  | MEMO |
| ---------------- | ------------------------------ | ------------------------------------------------------------ | ---- |
| authMemberId     | string                         | 該成員帳號的系統ID → 是否會有此欄位？或直接以成員之AD帳號作為ID？ |      |
| memberDepartment | string                         | 該成員的部門                                                 |      |
| memberAccount    | string                         | 該成員的帳號                                                 |      |
| memberName       | string                         | 該成員的名稱                                                 |      |
| memberRoles      | array of [AuthRole](#AuthRole) | 該成員被指派的群組列表                                       |      |



###### AuthMemberAccount

| FIELD NAME       | TYPE    | DESCRIPTION                                                  | MEMO |
| ---------------- | ------- | ------------------------------------------------------------ | ---- |
| authMemberId     | string  | 該成員帳號的系統ID → 是否會有此欄位？或直接以成員之AD帳號作為ID？ |      |
| memberDepartment | string  | 該成員的部門                                                 |      |
| memberAccount    | string  | 該成員的帳號                                                 |      |
| memberName       | string  | 該成員的名稱                                                 |      |
| isChecked        | boolean | 是否已經被選取                                               |      |

