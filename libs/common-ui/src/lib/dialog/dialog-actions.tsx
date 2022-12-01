import { alpha, DialogActions as MuiDialogActions } from '@mui/material';
import type { DialogActionsProps as MuiDialogActionsProps } from '@mui/material';
import { forwardRef } from 'react';
import { makeStyles } from 'tss-react/mui';
import { COLORS } from '@sso-platform/theme';

/* eslint-disable-next-line */
export interface DialogActionsProps extends MuiDialogActionsProps {
  divider?: boolean;
}

const useStyles = makeStyles()({
  root: {
    padding: '.75rem',
  },
  divider: {
    borderTop: `1px solid ${alpha(COLORS.grey[400], 0.48)}`,
  },
});

export const DialogActions = forwardRef<HTMLDivElement, DialogActionsProps>(
  ({ divider = false, children, ...rest }, ref) => {
    const { classes, cx } = useStyles();
    return (
      <MuiDialogActions
        {...rest}
        ref={ref}
        className={divider ? cx(classes.divider, classes.root) : classes.root}
      >
        {children}
      </MuiDialogActions>
    );
  }
);
