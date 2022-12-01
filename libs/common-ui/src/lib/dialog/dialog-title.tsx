import { alpha, DialogTitle as MuiDialogTitle } from '@mui/material';
import type { DialogTitleProps as MuiDialogTitleProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';
import { makeStyles } from 'tss-react/mui';
import { COLORS } from '@sso-platform/theme';
import CloseIcon from '@mui/icons-material/Close';

export interface DialogTitleProps extends MuiDialogTitleProps {
  onClose?: () => void;
  icon?: ReactNode;
}

const useStyles = makeStyles()({
  root: {
    borderBottom: `1px solid ${alpha(COLORS.grey[400], 0.48)}`,
    marginBottom: '1rem',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    gap: '.75rem',
  },
  closeButton: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: 'translateY(-50%)',
    color: COLORS.grey[600],
    cursor: 'pointer',
  },
});

export const DialogTitle = forwardRef<HTMLDivElement, DialogTitleProps>(
  ({ icon, onClose, className, children, ...rest }, ref) => {
    const { classes, cx } = useStyles();
    return (
      <MuiDialogTitle
        {...rest}
        ref={ref}
        className={
          className ? cx(classes.root, ...className) : cx(classes.root)
        }
      >
        {icon || null}
        {children}
        {onClose ? (
          <CloseIcon
            className={classes.closeButton}
            onClick={onClose}
            aria-label="close"
          />
        ) : null}
      </MuiDialogTitle>
    );
  }
);
