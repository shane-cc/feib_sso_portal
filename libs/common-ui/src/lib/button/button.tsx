import { Button as MuiButton } from '@mui/material';
import type { ButtonProps as MuiButtonProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface ButtonProps extends MuiButtonProps {}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    return (
      <MuiButton ref={ref} {...props} disableElevation>
        {props.children}
      </MuiButton>
    );
  }
);

export default Button;
