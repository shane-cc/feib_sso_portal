import { ConfirmDialog, DialogContentText } from '@sso-platform/common-ui';
import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface DeleteSystemDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
  deleteTarget: string;
}

export const DeleteSystemDialog: React.FC<DeleteSystemDialogProps> = ({
  isOpen,
  handleClose,
  handleConfirm,
  deleteTarget,
}) => {
  return (
    <ConfirmDialog
      isOpen={isOpen}
      onClose={handleClose}
      title="確認刪除？"
      icon={<DeleteForeverIcon color="secondary" />}
      onCancel={handleClose}
      confirmText="刪除"
      confirmButtonProps={{
        color: 'secondary',
      }}
      onConfirm={handleConfirm}
    >
      <DialogContentText>是否確認刪除以下權限？</DialogContentText>
      <DialogContentText
        sx={{
          fontWeight: 'bold',
          color: 'text.primary',
        }}
      >
        {deleteTarget}
      </DialogContentText>
    </ConfirmDialog>
  );
};
