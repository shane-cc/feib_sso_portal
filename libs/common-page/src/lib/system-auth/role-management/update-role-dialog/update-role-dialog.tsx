import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { ApiError, AuthFunction } from '@sso-platform/types';
import { useEffect, useState } from 'react';
import {
  ErrorMessage,
  FormErrorMessage,
  createSystemRole,
  updateSystemRole,
} from '@sso-platform/shared';
import { useMutation } from 'react-query';
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
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import { AuthFunctionSelection } from './auth-functions-selection';

const validationUpdateSchema = z.object({
  authRoleCode: z.string().min(1, FormErrorMessage.AUTH_ROLE_CODE),
  authRoleName: z.string().min(1, FormErrorMessage.AUTH_ROLE_NAME),
});

type ValidationUpdateSchema = z.infer<typeof validationUpdateSchema>;

interface UpdateRoleDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  type: 'create' | 'edit';
  initialData?: ValidationUpdateSchema;
  authRoleFunctions?: AuthFunction[];
  systemCode: string;
}

export const UpdateRoleDialog: React.FC<UpdateRoleDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  type,
  initialData,
  authRoleFunctions = [],
  systemCode,
}) => {
  let timer: NodeJS.Timeout | null = null;
  const [updateRoleError, setUpdateRoleError] = useState<string>();
  const [selectedAuthFunctions, setSelectedAuthFunctions] =
    useState<AuthFunction[]>(authRoleFunctions);
  const methods = useForm<ValidationUpdateSchema>({
    resolver: zodResolver(validationUpdateSchema),
    defaultValues: {
      authRoleCode: initialData?.authRoleCode || '',
      authRoleName: initialData?.authRoleName || '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = methods;

  const onReset = () => {
    setSelectedAuthFunctions(type === 'create' ? [] : authRoleFunctions);
    reset();
    clearErrors();
    setUpdateRoleError(undefined);
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
    setUpdateRoleError(
      `${error.message} ${
        type === 'create'
          ? ErrorMessage.CREATE_ROLE_FAILED
          : ErrorMessage.UPDATE_ROLE_FAILED
      }`
    );
  };

  const handleDeleteAuthFunction = (authFunction: AuthFunction) => {
    const targetAuth = selectedAuthFunctions.find(
      (item) => item.authFunctionCode === authFunction.authFunctionCode
    );
    if (targetAuth) {
      setSelectedAuthFunctions(
        selectedAuthFunctions.filter(
          (item) => item.authFunctionCode !== targetAuth.authFunctionCode
        )
      );
    }
  };

  const createMutation = useMutation(
    (data: ValidationUpdateSchema) =>
      createSystemRole({
        systemCode,
        authFunctions: selectedAuthFunctions,
        authRoleCode: data.authRoleCode,
        authRoleName: data.authRoleName,
      }),
    {
      onSuccess,
      onError,
    }
  );

  const updateMutation = useMutation(
    (data: ValidationUpdateSchema) =>
      updateSystemRole({
        systemCode,
        authFunctions: selectedAuthFunctions,
        authRoleCode: data.authRoleCode,
        authRoleName: data.authRoleName,
      }),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = (data: ValidationUpdateSchema) => {
    if (selectedAuthFunctions.length === 0) {
      setUpdateRoleError(ErrorMessage.NO_SELECTED_AUTH_FUNCTION);
      timer = setTimeout(() => {
        setUpdateRoleError(undefined);
      }, 2000);
      return;
    }
    type === 'create'
      ? createMutation.mutate(data)
      : updateMutation.mutate(data);
  };

  useEffect(() => {
    if (timer) {
      clearTimeout(timer);
    }
  }, [timer]);

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="md">
      <DialogTitle
        onClose={onClose}
        icon={type === 'create' ? <AddCircleIcon /> : <EditIcon />}
      >
        {type === 'create' ? '新增群組' : '編輯群組'}
      </DialogTitle>
      <DialogContent>
        {updateRoleError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {updateRoleError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <Controller
            control={control}
            name="authRoleCode"
            render={({ field }) => (
              <TextField
                label="群組代碼*"
                disabled={type === 'edit'}
                {...field}
                error={!!errors.authRoleCode}
                helperText={errors.authRoleCode?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="authRoleName"
            render={({ field }) => (
              <TextField
                label="群組名稱*"
                {...field}
                error={!!errors.authRoleName}
                helperText={errors.authRoleName?.message}
              />
            )}
          />
          <Typography variant="h6">功能授權碼設定</Typography>
          <Stack direction="row" gap=".5rem" flexWrap="wrap">
            <Typography variant="body2">已設定授權碼</Typography>
            {selectedAuthFunctions.length === 0 && (
              <Typography variant="body2" px="1rem">
                無
              </Typography>
            )}
            {selectedAuthFunctions.map((authFunction, idx) => {
              const isSelected =
                typeof selectedAuthFunctions.find(
                  (item) =>
                    item.authFunctionCode === authFunction.authFunctionCode
                ) !== 'undefined';
              return (
                <Chip
                  key={`${authFunction.authFunctionCode}-${idx}`}
                  id={authFunction.authFunctionCode}
                  size="small"
                  handleDelete={
                    isSelected
                      ? () => handleDeleteAuthFunction(authFunction)
                      : undefined
                  }
                  defaultCheckedStatus={isSelected}
                  label={`${authFunction.authFunctionCode} / ${authFunction.authFunctionName}`}
                />
              );
            })}
          </Stack>
          <Divider />
          <AuthFunctionSelection
            selectedAuthFunctions={selectedAuthFunctions}
            setSelectedAuthFunctions={setSelectedAuthFunctions}
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
