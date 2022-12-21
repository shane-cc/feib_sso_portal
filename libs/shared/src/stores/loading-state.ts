import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const enum LoadingStateType {
  LOADING = 'loading',
  ERROR = 'error',
  CONFIRM = 'confirm',
}

interface LoadingState {
  isLoading: boolean;
  isError: boolean;
  isConfirm: boolean;
  message: string;
  title: string;
  openDialog: (options?: {
    type: LoadingStateType;
    message?: string;
    title?: string;
    onConfirm?: () => void;
  }) => void;
  closeDialog: () => void;
  onConfirm?: () => void;
}

export const useLoadingState = create<LoadingState>()(
  devtools((set) => ({
    isLoading: false,
    isError: false,
    isConfirm: false,
    message: '',
    title: '',
    openDialog: (options) => {
      const { type, message = '', title = '', onConfirm } = options || {};
      if (
        type === LoadingStateType.CONFIRM &&
        typeof onConfirm !== 'function'
      ) {
        throw new Error(
          'onConfirm callback function is required for confirm dialog!'
        );
      }
      set({
        isLoading: type === LoadingStateType.LOADING,
        isError: type === LoadingStateType.ERROR,
        isConfirm: type === LoadingStateType.CONFIRM,
        message,
        title,
        onConfirm,
      });
    },
    closeDialog: () =>
      set({
        isLoading: false,
        isError: false,
        isConfirm: false,
        message: '',
        title: '',
        onConfirm: undefined,
      }),
  }))
);
