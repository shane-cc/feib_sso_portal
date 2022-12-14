import React, { useState } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import {
  createSystem,
  ErrorMessage,
  FormErrorMessage,
  QueryCacheKey,
  updateSystem,
} from '@sso-platform/shared';
import { useMutation, useQueryClient } from 'react-query';
import { ApiError } from 'next/dist/server/api-utils';

const validationUpdateSchema = z.object({
  systemCode: z.string().min(1, FormErrorMessage.SYSTEM_CODE),
  systemName: z.string().min(1, FormErrorMessage.SYSTEM_NAME),
  systemUrl: z.string().url({ message: FormErrorMessage.SYSTEM_URL }),
});

export type ValidationUpdateSchema = z.infer<typeof validationUpdateSchema>;

interface UpdateSystemDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  type: 'create' | 'edit';
  initialData?: ValidationUpdateSchema;
}

export const UpdateSystemDialog: React.FC<UpdateSystemDialogProps> = ({
  isOpen,
  handleClose,
  type,
  initialData,
}) => {
  const queryClient = useQueryClient();
  const [updateSystemError, setUpdateSystemError] = useState<string>();
  const methods = useForm<ValidationUpdateSchema>({
    resolver: zodResolver(validationUpdateSchema),
    defaultValues: {
      systemCode: initialData?.systemCode || '',
      systemName: initialData?.systemName || '',
      systemUrl: initialData?.systemUrl || '',
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
    setUpdateSystemError(undefined);
  };

  const onClose = () => {
    onReset();
    handleClose();
  };

  const onSuccess = () => {
    queryClient.invalidateQueries(QueryCacheKey.SYSTEM_LIST);
    onClose();
  };

  const onError = (error: ApiError) => {
    setUpdateSystemError(
      `${error.message} ${
        type === 'create'
          ? ErrorMessage.CREATE_SYSTEM_FAILED
          : ErrorMessage.UPDATE_SYSTEM_FAILED
      }`
    );
  };

  const createMutation = useMutation(
    (data: ValidationUpdateSchema) => createSystem(data),
    {
      onSuccess,
      onError,
    }
  );
  const updateMutation = useMutation(
    (data: ValidationUpdateSchema) => updateSystem(data),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = (data: ValidationUpdateSchema) => {
    type === 'create'
      ? createMutation.mutate(data)
      : updateMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <DialogTitle onClose={onClose} icon={<AddCircleIcon />}>
        {type === 'create' ? '????????????' : '????????????'}
      </DialogTitle>
      <DialogContent>
        {updateSystemError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {updateSystemError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <Controller
            control={control}
            name="systemCode"
            render={({ field }) => (
              <TextField
                label="????????????*"
                disabled={type === 'edit'}
                {...field}
                error={!!errors.systemCode}
                helperText={errors.systemCode?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="systemName"
            render={({ field }) => (
              <TextField
                label="????????????*"
                {...field}
                error={!!errors.systemName}
                helperText={errors.systemName?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="systemUrl"
            render={({ field }) => (
              <TextField
                label="URL*"
                {...field}
                error={!!errors.systemUrl}
                helperText={errors.systemUrl?.message}
              />
            )}
          />
        </Stack>
      </DialogContent>
      <DialogActions divider>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          ??????
        </Button>
        <Button variant="outlined" color="inherit" onClick={onReset}>
          ??????
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSubmit(onConfirm)}
        >
          ??????
        </Button>
      </DialogActions>
    </Dialog>
  );
};
