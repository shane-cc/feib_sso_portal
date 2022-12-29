import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { ApiError, AuthAccount } from '@sso-platform/types';
import {
  ErrorMessage,
  GetAuthRolesResponse,
  QueryCacheKey,
  createSystemMember,
  getAuthRolesList,
} from '@sso-platform/shared';
import { useMutation, useQuery } from 'react-query';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Select,
  Option,
  Stack,
  Typography,
  Chip,
  Divider,
  DialogActions,
  Button,
} from '@sso-platform/common-ui';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { AuthAccountSelection } from './auth-account-selection';

const validatioCreateSchema = z.object({
  authRoleCode: z.string().min(1, '請選擇要指派的角色'),
});

type ValidationUpdateSchema = z.infer<typeof validatioCreateSchema>;

interface CreateMemberDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  systemCode: string;
}

const CreateMemberDialog: React.FC<CreateMemberDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  systemCode,
}) => {
  let timer: NodeJS.Timeout | null = null;
  const [createMemberError, setCreateMemberError] = useState<string>();
  const [selectedAuthAccounts, setSelectedAuthAccounts] = useState<
    AuthAccount[]
  >([]);
  const methods = useForm<ValidationUpdateSchema>({
    resolver: zodResolver(validatioCreateSchema),
    defaultValues: {
      authRoleCode: '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = methods;
  const { data: authRolesData, isFetching: isAuthRolesLoading } = useQuery<
    GetAuthRolesResponse,
    Error
  >([QueryCacheKey.AUTH_ROLES_LIST, systemCode], () =>
    getAuthRolesList({
      systemCode,
    })
  );
  const authRolesList = authRolesData?.data.authRoles ?? [];

  const onReset = () => {
    setSelectedAuthAccounts([]);
    reset();
    clearErrors();
    setCreateMemberError(undefined);
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
    setCreateMemberError(
      `${error.message} ${ErrorMessage.CREATE_MEMBER_FAILED}`
    );
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
    (data: ValidationUpdateSchema) =>
      createSystemMember({
        systemCode,
        accounts: selectedAuthAccounts,
        ...data,
      }),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = (data: ValidationUpdateSchema) => {
    if (selectedAuthAccounts.length === 0) {
      setCreateMemberError(ErrorMessage.NO_SELECTED_ACCOUNT);
      timer = setTimeout(() => {
        setCreateMemberError(undefined);
      }, 2000);
      return;
    }
    mutation.mutate(data);
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
  }, [timer]);

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md">
      <DialogTitle onClose={onClose} icon={<AddCircleIcon />}>
        新增成員
      </DialogTitle>
      <DialogContent>
        {createMemberError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {createMemberError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <Controller
            control={control}
            name="authRoleCode"
            render={({ field }) => (
              <Select
                label="指派角色*"
                {...field}
                disabled={isAuthRolesLoading}
                error={!!errors.authRoleCode}
                helperText={errors.authRoleCode?.message}
                InputLabelProps={{
                  shrink: true,
                }}
              >
                {authRolesList.map((item) => (
                  <Option key={item.authRoleCode} value={item.authRoleCode}>
                    {item.authRoleName}
                  </Option>
                ))}
              </Select>
            )}
          />
          <Typography variant="h6">選取帳號</Typography>
          <Stack direction="row" gap=".5rem" flexWrap="wrap">
            <Typography variant="body2">已選擇成員</Typography>
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
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onConfirm)}
        >
          儲存
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateMemberDialog;
