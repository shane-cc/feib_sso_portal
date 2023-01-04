import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FileInput,
  Stack,
  Typography,
} from '@sso-platform/common-ui';
import FileUploadRoundedIcon from '@mui/icons-material/FileUploadRounded';
import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import {
  ErrorMessage,
  QueryCacheKey,
  uploadSystemAuth,
} from '@sso-platform/shared';
import { ApiError } from '@sso-platform/types';

interface ImportAuthDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  systemCode: string;
}

export const ImportAuthDialog: React.FC<ImportAuthDialogProps> = ({
  isOpen,
  handleClose,
  systemCode,
}) => {
  const queryClient = useQueryClient();
  const [file, setFile] = useState<File>();
  const [importAuthError, setImportAuthError] = useState<string>();

  const onReset = () => {
    setFile(undefined);
    setImportAuthError(undefined);
  };

  const onClose = () => {
    onReset();
    handleClose();
  };

  const onSuccess = () => {
    queryClient.invalidateQueries([QueryCacheKey.AUTH_FUNCTIONS_LIST]);
    onClose();
  };

  const onError = (error: ApiError) => {
    setImportAuthError(`${error.message} ${ErrorMessage.UPLOAD_AUTH_FAILED}`);
  };

  const updateMutation = useMutation(
    () =>
      uploadSystemAuth({
        authFile: file as File,
        systemCode,
      }),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = () => {
    updateMutation.mutate();
  };

  const handleFileUpload = (file?: File) => {
    if (file) {
      setFile(file);
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <DialogTitle onClose={onClose} icon={<FileUploadRoundedIcon />}>
        匯入授權碼
      </DialogTitle>
      <DialogContent>
        {importAuthError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {importAuthError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <FileInput
            label="檔案上傳"
            name="authFile"
            value={file ? file.name : ''}
            onChange={handleFileUpload}
            accept=".json, .csv"
          />
        </Stack>
      </DialogContent>
      <DialogActions divider>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          取消
        </Button>
        <Button variant="outlined" color="inherit" onClick={onReset}>
          清除重設
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onConfirm}
          disabled={typeof file === 'undefined'}
        >
          確認上傳
        </Button>
      </DialogActions>
    </Dialog>
  );
};
