import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from '@sso-platform/common-ui';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { useMutation } from 'react-query';
import {
  ErrorMessage,
  ExportSystemAuthMemberResponse,
  exportSystemAuthMember,
} from '@sso-platform/shared';
import { ApiError } from '@sso-platform/types';
import { useState } from 'react';

interface ExportMemberDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  systemId: string;
}

export const ExportMemberDialog: React.FC<ExportMemberDialogProps> = ({
  isOpen,
  handleClose,
  systemId,
}) => {
  const [exportErrorMessage, setExportErrorMessage] = useState<string>('');

  const onClose = () => {
    setExportErrorMessage('');
    handleClose();
  };

  const mutation = useMutation(() => exportSystemAuthMember({ systemId }), {
    onSuccess: (data: ExportSystemAuthMemberResponse) => {
      const url = data.data.filePath;
      const link = document.createElement('a');
      link.setAttribute('href', url);
      link.setAttribute('download', data.data.filePath);
      link.setAttribute('target', '_blank');
      document.body.appendChild(link);
      link.click();
      link.remove();
      onClose();
    },
    onError: (error: ApiError) => {
      setExportErrorMessage(
        `${error.message} - ${ErrorMessage.EXPORT_MEMBER_FAILED}`
      );
    },
  });

  const handleConfirm = () => {
    mutation.mutate();
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <DialogTitle onClose={onClose} icon={<FileDownloadIcon />}>
        匯出成員群組設定
      </DialogTitle>
      <DialogContent>
        {exportErrorMessage.length > 0 && (
          <Typography variant="body1" color="error" mb=".5rem">
            {exportErrorMessage}
          </Typography>
        )}
        <Typography variant="body1">
          是否確定匯出成員群組設定資料？點擊【匯出】將自動下載所有成員群組設定的csv檔
        </Typography>
      </DialogContent>
      <DialogActions divider>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          取消
        </Button>
        <Button variant="contained" color="primary" onClick={handleConfirm}>
          匯出
        </Button>
      </DialogActions>
    </Dialog>
  );
};
