import { AuthFunc } from '@sso-platform/types';
import create from 'zustand';
import { devtools } from 'zustand/middleware';
import { getAuthFuncs } from '../api/auth';

interface AuthState {
  page: string;
  authFunctionCodes: string[];
  authFunctions: AuthFunc[];
  setAuthCodes: (authFunctionCodes: string[]) => void;
  getAuthFuncs: (authFunctionCodes: string[]) => void;
  hasAuthFunc: (authFunctionCode: string) => boolean;
}

export const useAuthState = create<AuthState>()(
  devtools((set, get) => ({
    page: '',
    authFunctionCodes: [],
    authFunctions: [],
    setAuthCodes: (authFunctionCodes) =>
      set((state) => ({ ...state, authFunctionCodes })),
    getAuthFuncs: async (authFunctionCodes) => {
      const { data } = await getAuthFuncs(authFunctionCodes);
      set({ authFunctions: data?.auths || [] });
    },
    hasAuthFunc: (authFunctionCode) => {
      const { authFunctions } = get();
      if (!authFunctions) return false;
      const target = authFunctions.find(
        (authFunc) => authFunc.authFunctionCode === authFunctionCode
      );
      return target ? target.isAuth : false;
    },
  }))
);
