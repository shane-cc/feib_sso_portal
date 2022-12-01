import { Dialog as MuiDialog } from '@mui/material';
import type { DialogProps as MuiDialogProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface DialogProps extends MuiDialogProps {
  onClose: () => void;
}

export const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
  return (
    <MuiDialog {...props} ref={ref} scroll="paper">
      {props.children}
    </MuiDialog>
  );
});

export default Dialog;
