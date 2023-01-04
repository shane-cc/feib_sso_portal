import { ConfirmDialog, DialogContentText } from '@sso-platform/common-ui';
import {
  DeleteSystemAuthRoleRequest,
  ErrorMessage,
  LoadingStateType,
  deleteSystemAuthRole,
  useLoadingState,
} from '@sso-platform/shared';
import { ApiError, AuthRole } from '@sso-platform/types';
import { useMutation } from 'react-query';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface DeleteRoleDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  authRole?: AuthRole;
  systemCode: string;
}

export const DeleteRoleDialog: React.FC<DeleteRoleDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  authRole,
  systemCode,
}) => {
  const { openDialog } = useLoadingState();

  const mutation = useMutation(
    (data: DeleteSystemAuthRoleRequest) => deleteSystemAuthRole(data),
    {
      onSuccess: () => {
        handleSuccess();
      },
      onError: (error: ApiError) => {
        openDialog({
          type: LoadingStateType.ERROR,
          message: `${error.message} ${ErrorMessage.DELETE_ROLE_FAILED}`,
        });
      },
    }
  );

  const onConfirm = () => {
    mutation.mutate({
      systemCode,
      authRoleCode: authRole?.authRoleCode || '',
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
      <DialogContentText>是否確認刪除以下群組？</DialogContentText>
      <DialogContentText
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {authRole && `${authRole.authRoleCode}（${authRole.authRoleName}）`}
      </DialogContentText>
    </ConfirmDialog>
  );
};
