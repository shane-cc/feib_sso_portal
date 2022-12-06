import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '../dialog';
import { Button } from '../button';
import { ReactNode } from 'react';
import ErrorIcon from '@mui/icons-material/Error';

interface ErrorDialogProps {
  isOpen: boolean;
  onClose: () => void;
  icon?: ReactNode;
  title?: string;
  children?: ReactNode[];
  message?: string;
  cancelText?: string;
  onCancel?: () => void;
  confirmText?: string;
  onConfirm?: () => void;
}

export const ErrorDialog: React.FC<ErrorDialogProps> = ({
  isOpen,
  onClose,
  icon = <ErrorIcon color="secondary" />,
  title = '錯誤訊息',
  message,
  children,
  cancelText = '取消',
  onCancel,
  confirmText = '確認',
  onConfirm,
}) => {
  if (!children && !message)
    throw new Error('Please pass in at least message or children!');

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="xs">
      <DialogTitle onClose={onClose} icon={icon}>
        {title}
      </DialogTitle>
      <DialogContent>
        {message && <DialogContentText>{message}</DialogContentText>}
        {children}
      </DialogContent>
      <DialogActions>
        <Button
          variant="outlined"
          color="inherit"
          onClick={onCancel || onClose}
        >
          {cancelText}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={onConfirm || onClose}
        >
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
