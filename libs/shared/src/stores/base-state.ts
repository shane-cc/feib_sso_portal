import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const enum AppType {
  SSO_PORTAL = 'sso-portal',
  SSO_ADMIN = 'sso-admin',
}

interface BaseState {
  appType: AppType | '';
  appTitle: string;
  setAppType: (appType: AppType) => void;
  setAppTitle: (appTitle: string) => void;
}

export const useBaseState = create<BaseState>()(
  devtools((set) => ({
    appType: '',
    appTitle: '',
    setAppType: (appType) => set((state) => ({ ...state, appType })),
    setAppTitle: (appTitle) => set((state) => ({ ...state, appTitle })),
  }))
);
