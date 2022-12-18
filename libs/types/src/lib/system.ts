export interface System {
  systemCode: string;
  systemName: string;
  systemUrl: string;
  systemImage: string;
  auth: {
    isAuthEditable: boolean; // Can the user edit the auth settings?
  };
}
