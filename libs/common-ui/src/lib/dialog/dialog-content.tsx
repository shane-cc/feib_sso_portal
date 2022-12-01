import { DialogContent as MuiDialogContent } from '@mui/material';
import type { DialogContentProps as MuiDialogContentProps } from '@mui/material';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface DialogContentProps extends MuiDialogContentProps {}

export const DialogContent = forwardRef<HTMLDivElement, DialogContentProps>(
  (props, ref) => {
    return (
      <MuiDialogContent {...props} ref={ref}>
        {props.children}
      </MuiDialogContent>
    );
  }
);
