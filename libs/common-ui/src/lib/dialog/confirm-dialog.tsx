import { Dialog, DialogActions, DialogContent, DialogTitle } from '../dialog';
import { Button } from '../button';
import { ReactNode } from 'react';

interface ConfirmDialogProps {
  isOpen: boolean;
  onClose: () => void;
  icon?: ReactNode;
  title: string;
  children: ReactNode[];
  cancelText?: string;
  onCancel?: () => void;
  confirmText?: string;
  onConfirm?: () => void;
  confirmButtonProps?: {
    variant?: 'text' | 'outlined' | 'contained' | 'soft';
    color?:
      | 'inherit'
      | 'primary'
      | 'secondary'
      | 'info'
      | 'success'
      | 'warning'
      | 'error';
  };
}

export const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  onClose,
  icon,
  title,
  children,
  cancelText = '取消',
  onCancel,
  confirmText = '確認',
  onConfirm,
  confirmButtonProps = {},
}) => {
  const { variant = 'contained', color = 'primary' } = confirmButtonProps;
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <DialogTitle onClose={onClose} icon={icon}>
        {title}
      </DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions divider>
        {onCancel && (
          <Button variant="outlined" color="inherit" onClick={onCancel}>
            {cancelText}
          </Button>
        )}
        <Button variant={variant} color={color} onClick={onConfirm || onClose}>
          {confirmText}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
