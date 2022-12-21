import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const enum AppType {
  SSO_PORTAL = 'sso-portal',
  SSO_ADMIN = 'sso-admin',
}

interface BaseState {
  appType: AppType;
  setAppType: (appType: AppType) => void;
}

export const useBaseState = create<BaseState>()(
  devtools((set) => ({
    appType: AppType.SSO_PORTAL,
    setAppType: (appType) => set((state) => ({ ...state, appType })),
  }))
);
