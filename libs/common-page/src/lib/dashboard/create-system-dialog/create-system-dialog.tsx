import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
} from '@sso-platform/common-ui';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';

interface CreateSystemDialogProps {
  isOpen: boolean;
  handleClose: () => void;
}

const validationCreateSchema = z.object({
  systemCode: z.string().min(1, '請填寫系統代碼'),
  systemName: z.string().min(1, '請填寫系統名稱'),
  systemUrl: z.string().url({ message: '請填寫正確的網址' }),
});

type ValidationCreateSchema = z.infer<typeof validationCreateSchema>;

export const CreateSystemDialog: React.FC<CreateSystemDialogProps> = ({
  isOpen,
  handleClose,
}) => {
  const methods = useForm<ValidationCreateSchema>({
    resolver: zodResolver(validationCreateSchema),
    defaultValues: {
      systemCode: '',
      systemName: '',
      systemUrl: '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
    clearErrors,
    reset,
  } = methods;

  const onClose = () => {
    reset();
    clearErrors();
    handleClose();
  };

  const onReset = () => {
    reset();
    clearErrors();
  };

  const onConfirm = (data: ValidationCreateSchema) => {
    // TODO: call api
    console.log('onConfirm: ', data);
    onClose();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <DialogTitle onClose={onClose} icon={<AddCircleIcon />}>
        新增系統
      </DialogTitle>
      <DialogContent>
        <Stack my=".5rem" gap="1rem">
          <Controller
            control={control}
            name="systemCode"
            render={({ field }) => (
              <TextField
                label="系統代碼*"
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
                label="系統名稱*"
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
