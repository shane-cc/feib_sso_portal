import { ConfirmDialog, DialogContentText } from '@sso-platform/common-ui';
import {
  DeleteSystemMemberRequest,
  ErrorMessage,
  LoadingStateType,
  deleteSystemAuthMember,
  useLoadingState,
} from '@sso-platform/shared';
import { ApiError, AuthMember } from '@sso-platform/types';
import { useMutation } from 'react-query';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface DeleteMemberDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  authMember?: AuthMember;
  systemCode: string;
}

export const DeleteMemberDialog: React.FC<DeleteMemberDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  authMember,
  systemCode,
}) => {
  const { openDialog } = useLoadingState();

  const mutation = useMutation(
    (data: DeleteSystemMemberRequest) => deleteSystemAuthMember(data),
    {
      onSuccess: () => {
        handleSuccess();
      },
      onError: (error: ApiError) => {
        openDialog({
          type: LoadingStateType.ERROR,
          message: `${error.message} ${ErrorMessage.DELETE_MEMBER_FAILED}`,
        });
      },
    }
  );

  const onConfirm = () => {
    mutation.mutate({
      systemCode,
      memberAccount: authMember?.memberAccount || '',
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
      <DialogContentText>是否確認刪除以下成員？</DialogContentText>
      <DialogContentText
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {authMember &&
          `${authMember.memberAccount}（${authMember.memberName}）`}
      </DialogContentText>
    </ConfirmDialog>
  );
};
