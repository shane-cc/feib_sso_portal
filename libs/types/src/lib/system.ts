export interface System {
  systemCode: string;
  systemName: string;
  systemUrl: string;
  systemImage: string;
  auth: {
    isAuthEditable: boolean; // Can the user edit the auth settings?
    isViewable: boolean; // Can the user view the auth settings?
    isEditable: boolean; // Can the user edit the system settings?
    isDeletable: boolean; // Can the user delete the system?
    isAdminAssignable: boolean; // Can the user assign admin rights to other users?
  };
}
