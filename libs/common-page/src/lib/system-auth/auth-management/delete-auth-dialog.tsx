import { ConfirmDialog, DialogContentText } from '@sso-platform/common-ui';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { ApiError, AuthFunction } from '@sso-platform/types';
import { useMutation } from 'react-query';
import {
  ErrorMessage,
  LoadingStateType,
  deleteSystemAuthFunction,
  useLoadingState,
} from '@sso-platform/shared';

interface DeleteAuthDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  authFunction?: AuthFunction;
  systemCode: string;
}

export const DeleteAuthDialog: React.FC<DeleteAuthDialogProps> = ({
  isOpen,
  handleClose,
  authFunction,
  systemCode,
}) => {
  const { openDialog } = useLoadingState();

  const mutation = useMutation(
    (data: { systemCode: string; authFunctionCode: string }) =>
      deleteSystemAuthFunction(data),
    {
      onSuccess: () => {
        handleClose();
      },
      onError: (error: ApiError) => {
        openDialog({
          type: LoadingStateType.ERROR,
          message: `${error.message} ${ErrorMessage.DELETE_AUTH_FAILED}`,
        });
      },
    }
  );

  const onConfirm = () => {
    mutation.mutate({
      systemCode,
      authFunctionCode: authFunction?.authFunctionCode || '',
    });
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
      <DialogContentText>是否確認刪除以下權限？</DialogContentText>
      <DialogContentText
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {authFunction &&
          `${authFunction.authFunctionCode}（${authFunction.authFunctionName}）`}
      </DialogContentText>
    </ConfirmDialog>
  );
};
