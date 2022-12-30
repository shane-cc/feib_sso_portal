import { ConfirmDialog, DialogContentText } from '@sso-platform/common-ui';
import {
  DeleteSystemAdminRequest,
  ErrorMessage,
  LoadingStateType,
  deleteSystemAdmin,
  useLoadingState,
} from '@sso-platform/shared';
import { ApiError, AuthAccount } from '@sso-platform/types';
import { useMutation } from 'react-query';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface DeleteAdminDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  authAdmin?: AuthAccount;
  systemCode: string;
}

export const DeleteAdminDialog: React.FC<DeleteAdminDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  authAdmin,
  systemCode,
}) => {
  const { openDialog } = useLoadingState();

  const mutation = useMutation(
    (data: DeleteSystemAdminRequest) => deleteSystemAdmin(data),
    {
      onSuccess: () => {
        handleSuccess();
      },
      onError: (error: ApiError) => {
        openDialog({
          type: LoadingStateType.ERROR,
          message: `${error.message} ${ErrorMessage.DELETE_ADMIN_FAILED}`,
        });
      },
    }
  );

  const onConfirm = () => {
    mutation.mutate({
      systemCode,
      memberAccount: authAdmin?.memberAccount || '',
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
      <DialogContentText>是否確認刪除以下管理員？</DialogContentText>
      <DialogContentText
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {authAdmin && `${authAdmin.memberAccount}（${authAdmin.memberName}）`}
      </DialogContentText>
    </ConfirmDialog>
  );
};
