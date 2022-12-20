import { AuthFunc } from '@sso-platform/types';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { getAuthFuncs } from '../api/auth';

interface AuthState {
  page: string;
  authCodes: string[];
  authFuncs: AuthFunc[];
  setAuthCodes: (authCodes: string[]) => void;
  getAuthFuncs: (authCodes: string[]) => void;
  hasAuthFunc: (authCode: string) => boolean;
}

export const useAuthState = create<AuthState>()(
  devtools((set, get) => ({
    page: '',
    authCodes: [],
    authFuncs: [],
    setAuthCodes: (authCodes) => set((state) => ({ ...state, authCodes })),
    getAuthFuncs: async (authCodes) => {
      const { data } = await getAuthFuncs(authCodes);
      set({ authFuncs: data || [] });
    },
    hasAuthFunc: (authCode) => {
      const { authFuncs } = get();
      if (!authFuncs) return false;
      const target = authFuncs.find(
        (authFunc) => authFunc.authCode === authCode
      );
      return target ? target.isAuth : false;
    },
  }))
);
