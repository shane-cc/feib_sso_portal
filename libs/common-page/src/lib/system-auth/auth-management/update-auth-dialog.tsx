import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useMutation } from 'react-query';
import { useState } from 'react';
import { ApiError, AuthFunctionDetail } from '@sso-platform/types';
import {
  BooleanType,
  ErrorMessage,
  FormErrorMessage,
  updateSystemAuthFunction,
} from '@sso-platform/shared';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  RadioGroup,
  Stack,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import EditIcon from '@mui/icons-material/Edit';

const validationUpdateAuthSchema = z.object({
  authFunctionCode: z.string().min(1, FormErrorMessage.AUTH_FUNCTION_CODE),
  authFunctionName: z.string().min(1, FormErrorMessage.AUTH_FUNCTION_NAME),
  authFunctionCategory: z
    .string()
    .min(1, FormErrorMessage.AUTH_FUNCTION_CATEGORY),
  isActive: z.nativeEnum(BooleanType),
});
type ValidationUpdateAuthSchema = z.infer<typeof validationUpdateAuthSchema>;

interface UpdateAuthDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleSuccess: () => void;
  initialData: AuthFunctionDetail;
  systemCode: string;
}

const UpdateAuthDialog: React.FC<UpdateAuthDialogProps> = ({
  isOpen,
  handleClose,
  handleSuccess,
  systemCode,
  initialData,
}) => {
  const [updateAuthError, setUpdateAuthError] = useState<string>();
  const methods = useForm<ValidationUpdateAuthSchema>({
    resolver: zodResolver(validationUpdateAuthSchema),
    defaultValues: {
      authFunctionCode: initialData?.authFunctionCode || '',
      authFunctionName: initialData?.authFunctionName || '',
      authFunctionCategory: initialData?.authFunctionCategory || '',
      isActive:
        initialData && initialData.isActive
          ? BooleanType.TRUE
          : BooleanType.FALSE,
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
    reset();
    clearErrors();
    setUpdateAuthError(undefined);
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
    setUpdateAuthError(`${error.message} ${ErrorMessage.UPDATE_AUTH_FAILED}`);
  };

  const mutation = useMutation(
    (data: ValidationUpdateAuthSchema) =>
      updateSystemAuthFunction({
        systemCode,
        authFunction: {
          authFunctionCode: data.authFunctionCode,
          authFunctionName: data.authFunctionName,
          authFunctionCategory: data.authFunctionCategory,
          isActive: data.isActive === BooleanType.TRUE,
        },
      }),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = async (data: ValidationUpdateAuthSchema) => {
    mutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <DialogTitle onClose={onClose} icon={<EditIcon />}>
        編輯授權碼
      </DialogTitle>
      <DialogContent>
        {updateAuthError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {updateAuthError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <Controller
            control={control}
            name="authFunctionCode"
            render={({ field }) => (
              <TextField
                label="授權代碼*"
                disabled
                {...field}
                error={!!errors.authFunctionCode}
                helperText={errors.authFunctionCode?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="authFunctionName"
            render={({ field }) => (
              <TextField
                label="功能名稱*"
                {...field}
                error={!!errors.authFunctionName}
                helperText={errors.authFunctionName?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="authFunctionCategory"
            render={({ field }) => (
              <TextField
                label="功能分類*"
                {...field}
                error={!!errors.authFunctionCategory}
                helperText={errors.authFunctionCategory?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="isActive"
            render={({ field }) => (
              <Stack>
                <Typography variant="subtitle2">是否啟用*</Typography>
                <RadioGroup
                  {...field}
                  sx={{ display: 'flex', flexDirection: 'row' }}
                  options={[
                    { value: BooleanType.TRUE, label: '啟用' },
                    { value: BooleanType.FALSE, label: '不啟用' },
                  ]}
                  error={!!errors.isActive}
                  helperText={errors.isActive?.message}
                />
              </Stack>
            )}
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

export default UpdateAuthDialog;
