import {
  Button,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  Stack,
  Typography,
} from '@sso-platform/common-ui';
import { ErrorMessage, createSystemAdmin } from '@sso-platform/shared';
import { ApiError, AuthAccount } from '@sso-platform/types';
import { useEffect, useState } from 'react';
import { useMutation } from 'react-query';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AuthAccountSelection } from '../auth-account-selection';

interface CreateAdminDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  systemCode: string;
}

export const CreateAdminDialog: React.FC<CreateAdminDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  systemCode,
}) => {
  let timer: NodeJS.Timeout | null = null;
  const [createAdminError, setCreateAdminError] = useState<string>();
  const [selectedAuthAccounts, setSelectedAuthAccounts] = useState<
    AuthAccount[]
  >([]);

  const onReset = () => {
    setSelectedAuthAccounts([]);
    setCreateAdminError(undefined);
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
    setCreateAdminError(`${error.message} ${ErrorMessage.CREATE_ADMIN_FAILED}`);
  };

  const handleDeleteAccount = (account: AuthAccount) => {
    const targetAccount = selectedAuthAccounts.find(
      (item) => item.memberAccount === account.memberAccount
    );
    if (targetAccount) {
      setSelectedAuthAccounts(
        selectedAuthAccounts.filter(
          (item) => item.memberAccount !== targetAccount.memberAccount
        )
      );
    }
  };

  const mutation = useMutation(
    () =>
      createSystemAdmin({
        systemCode,
        accounts: selectedAuthAccounts,
      }),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = () => {
    if (selectedAuthAccounts.length === 0) {
      setCreateAdminError(ErrorMessage.NO_SELECTED_ACCOUNT);
      timer = setTimeout(() => {
        setCreateAdminError(undefined);
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
      <DialogTitle onClose={onClose} icon={<AddCircleIcon />}>
        新增管理員
      </DialogTitle>
      <DialogContent>
        {createAdminError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {createAdminError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <Typography variant="h6">選取帳號</Typography>
          <Stack direction="row" gap=".5rem" flexWrap="wrap">
            <Typography variant="body2">已選擇管理員</Typography>
            {selectedAuthAccounts.length === 0 && (
              <Typography variant="body2" px="1rem">
                無
              </Typography>
            )}
            {selectedAuthAccounts.map((account, idx) => {
              const isSelected =
                typeof selectedAuthAccounts.find(
                  (item) => item.memberAccount === account.memberAccount
                ) !== 'undefined';
              return (
                <Chip
                  key={`${account.memberAccount}-${idx}`}
                  id={account.memberAccount}
                  size="small"
                  handleDelete={
                    isSelected ? () => handleDeleteAccount(account) : undefined
                  }
                  defaultCheckedStatus={isSelected}
                  label={`${account.memberDepartment} - ${account.memberAccount} / ${account.memberName}`}
                />
              );
            })}
          </Stack>
          <Divider />
          <AuthAccountSelection
            selectedAuthAccounts={selectedAuthAccounts}
            setSelectedAuthAccounts={setSelectedAuthAccounts}
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
