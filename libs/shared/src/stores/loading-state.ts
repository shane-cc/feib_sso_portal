import create from 'zustand';
import { devtools } from 'zustand/middleware';

interface LoadingState {
  isLoading: boolean;
  isError: boolean;
  message: string;
  openDialog: (options?: { isError?: boolean; message?: string }) => void;
  closeDialog: () => void;
}

export const useLoadingState = create<LoadingState>()(
  devtools((set) => ({
    isLoading: false,
    isError: false,
    message: '',
    openDialog: (options) => {
      const { isError = false, message = '' } = options || {};
      set({ isLoading: true, isError, message });
    },
    closeDialog: () => set({ isLoading: false, isError: false, message: '' }),
  }))
);
