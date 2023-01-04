import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import { ErrorMessage, updateSystemMember } from '@sso-platform/shared';
import { ApiError, AuthMember, AuthRole } from '@sso-platform/types';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import EditIcon from '@mui/icons-material/Edit';
import { AuthRoleSelection } from './auth-role-selection';

interface UpdateMemberDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  initialData?: AuthMember;
  systemCode: string;
}

export const UpdateMemberDialog: React.FC<UpdateMemberDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  initialData,
  systemCode,
}) => {
  let timer: NodeJS.Timeout | null = null;
  const [updateMemberError, setUpdateMemberError] = useState<string>();
  const [selectedAuthRoles, setSelectedAuthRoles] = useState<AuthRole[]>(
    initialData?.memberRoles || []
  );

  const onReset = () => {
    setSelectedAuthRoles(initialData?.memberRoles || []);
    setUpdateMemberError(undefined);
  };

  const onClose = () => {
    onReset();
    handleClose();
  };

  const onSuccess = () => {
    onReset();
    handleSuccess();
  };

  const onError = (error: ApiError) => {
    setUpdateMemberError(
      `${error.message} ${ErrorMessage.UPDATE_MEMBER_FAILED}`
    );
  };

  const handleDeleteAuthRole = (authRole: AuthRole) => {
    const targetRole = selectedAuthRoles.find(
      (role) => role.authRoleCode === authRole.authRoleCode
    );
    if (targetRole) {
      setSelectedAuthRoles(
        selectedAuthRoles.filter(
          (role) => role.authRoleCode !== authRole.authRoleCode
        )
      );
    }
  };

  const mutation = useMutation(
    () =>
      updateSystemMember({
        systemCode,
        memberAccount: initialData?.memberAccount || '',
        memberRoles: selectedAuthRoles,
      }),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = () => {
    if (selectedAuthRoles.length === 0) {
      setUpdateMemberError(ErrorMessage.NO_SELECTED_AUTH_ROLE);
      timer = setTimeout(() => {
        setUpdateMemberError(undefined);
      }, 2000);
      return;
    }
    mutation.mutate();
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
  }, [timer]);

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md">
      <DialogTitle onClose={onClose} icon={<EditIcon />}>
        編輯成員
      </DialogTitle>
      <DialogContent>
        {updateMemberError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {updateMemberError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <TextField
            label="成員帳號"
            disabled
            value={`${initialData?.memberDepartment} - ${initialData?.memberAccount}/${initialData?.memberName}`}
          />
          <Typography variant="h6">群組設定</Typography>
          <Stack direction="row" gap=".5rem" flexWrap="wrap">
            <Typography variant="body2">已指派群組</Typography>
            {selectedAuthRoles.length === 0 && (
              <Typography variant="body2" px="1rem">
                無
              </Typography>
            )}
            {selectedAuthRoles.map((authRole, idx) => {
              const isSelected =
                typeof selectedAuthRoles.find(
                  (item) => item.authRoleCode === authRole.authRoleCode
                ) !== 'undefined';
              return (
                <Chip
                  key={`${authRole.authRoleCode}-${idx}`}
                  id={authRole.authRoleCode}
                  size="small"
                  handleDelete={
                    isSelected
                      ? () => handleDeleteAuthRole(authRole)
                      : undefined
                  }
                  defaultCheckedStatus={isSelected}
                  label={`${authRole.authRoleCode} / ${authRole.authRoleName}`}
                />
              );
            })}
          </Stack>
          <Divider />
          <AuthRoleSelection
            selectedAuthRoles={selectedAuthRoles}
            setSelectedAuthRoles={setSelectedAuthRoles}
            systemCode={systemCode}
          />
        </Stack>
      </DialogContent>
      <DialogActions divider>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          取消
        </Button>
        <Button variant="outlined" color="inherit" onClick={onReset}>
          重設
        </Button>
        <Button variant="contained" color="primary" onClick={onConfirm}>
          儲存
        </Button>
      </DialogActions>
    </Dialog>
  );
};
