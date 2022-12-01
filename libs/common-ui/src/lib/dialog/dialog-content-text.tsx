import { DialogContentText as MuiDialogContentText } from '@mui/material';
import type { DialogContentTextProps as MuiDialogContentTextProps } from '@mui/material';
import { forwardRef } from 'react';

// eslint-disable-next-line
export interface DialogContentTextProps extends MuiDialogContentTextProps {}

export const DialogContentText = forwardRef<
  HTMLDivElement,
  DialogContentTextProps
>((props, ref) => {
  return (
    <MuiDialogContentText {...props} ref={ref}>
      {props.children}
    </MuiDialogContentText>
  );
});
