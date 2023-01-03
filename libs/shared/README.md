# shared

### api

| api function name        | api endpoint | api description                                                             |
| :----------------------- | :----------- | :-------------------------------------------------------------------------- |
| getAuthFuncs             |              | Get all specific auth function availability status                          |
| getAllAuthFuncs          |              | Get all available auth functions (currently NOT been used)                  |
| getActionHistory         |              | Get all (or limited amount) of personal action history records              |
| getAuthAccountsList      |              | Get all the available auth accounts for the specific system                 |
| getAuthAdminsList        |              | Get all the admin members for the specific system                           |
| createSystemAdmin        |              | Set a new member as admin for the specific system                           |
| deleteSystemAdmin        |              | Delete the specific admin for the specific system                           |
| getAuthFunctionsList     |              | Get all auth functions set fot the specific system                          |
| uploadSystemAuth         |              | Upload the auth functions template for the specific system                  |
| updateSystemAuthFunction |              | Update the specific auth function for the specific system                   |
| deleteSystemAuthFunction |              | Delete the specific auth function for the specific system                   |
| getAuthMembersList       |              | Get all the members and their roles in the specific system                  |
| createSystemMember       |              | Add a new account for the specific system as member                         |
| updateSystemMember       |              | Update the specific member's roles for the specific system                  |
| deleteSystemAuthMember   |              | Delete the specific member for the specific system                          |
| getAuthRolesList         |              | Get all the roles and their avalible auth functions for the specific system |
| createSystemRole         |              | Create a new role for the specific system                                   |
| updateSystemRole         |              | Update the specific role's avalible auth functions for the specific system  |
| deleteSystemAuthRole     |              | Delete the specific role for the specific system                            |
| getSystemList            |              | Get all the available systems for the current login user                    |
| getSystemData            |              | Get basic info for the specific system                                      |
| createSystem             |              | Create a new system (this is sso-admin only)                                |
| updateSystem             |              | Update the specific system info (this is sso-admin only)                    |
| updateSyStemImage        |              | Update the avatar image for the specific system                             |
| deleteSystem             |              | Delete the specific system (this is sso-admin only)                         |
