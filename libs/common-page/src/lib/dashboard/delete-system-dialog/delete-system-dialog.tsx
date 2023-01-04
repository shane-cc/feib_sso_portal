import { ConfirmDialog, DialogContentText } from '@sso-platform/common-ui';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useMutation, useQueryClient } from 'react-query';
import {
  deleteSystem,
  ErrorMessage,
  LoadingStateType,
  QueryCacheKey,
  useLoadingState,
} from '@sso-platform/shared';
import { ApiError } from '@sso-platform/types';

interface DeleteSystemDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  deleteTarget: string;
}

export const DeleteSystemDialog: React.FC<DeleteSystemDialogProps> = ({
  isOpen,
  handleClose,
  deleteTarget,
}) => {
  const queryClient = useQueryClient();
  const { openDialog } = useLoadingState();

  const mutation = useMutation((systemId: string) => deleteSystem(systemId), {
    onSuccess: () => {
      queryClient.invalidateQueries(QueryCacheKey.SYSTEM_LIST);
      handleClose();
    },
    onError: (error: ApiError) => {
      openDialog({
        type: LoadingStateType.ERROR,
        message: `${error.message} ${ErrorMessage.DELETE_SYSTEM_FAILED}`,
      });
    },
  });

  const onConfirm = () => {
    mutation.mutate(deleteTarget);
  };

  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={handleClose}
      title="確認刪除？"
      icon={<DeleteForeverIcon color="secondary" />}
      onCancel={handleClose}
      confirmText="刪除"
      confirmButtonProps={{
        color: 'secondary',
      }}
      onConfirm={onConfirm}
    >
      <DialogContentText>是否確認刪除以下服務？</DialogContentText>
      <DialogContentText
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {deleteTarget}
      </DialogContentText>
    </ConfirmDialog>
  );
};
