import { IconButton as MuiIconButton, alpha } from '@mui/material';
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { COLORS } from '@sso-platform/theme';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface IconButtonProps extends MuiIconButtonProps {
  variant?: 'contained' | 'outlined';
  color?: 'primary' | 'secondary' | 'info' | 'inherit';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ variant = 'outlined', children, sx, color, ...rest }, ref) => {
    const backgroundColor = {
      primary: alpha(COLORS.primary.lighter, 0.6),
      secondary: alpha(COLORS.secondary.lighter, 0.6),
      info: alpha(COLORS.info.lighter, 0.6),
      inherit: alpha(COLORS.grey[400], 0.6),
    };
    return (
      <MuiIconButton
        ref={ref}
        {...rest}
        color={color}
        sx={
          variant === 'contained'
            ? {
                border: 'none',
                backgroundColor: color
                  ? backgroundColor[color]
                  : backgroundColor.primary,
                ...sx,
              }
            : { ...sx }
        }
      >
        {children}
      </MuiIconButton>
    );
  }
);

export default IconButton;
