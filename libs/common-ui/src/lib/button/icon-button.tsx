import { IconButton as MuiIconButton } from '@mui/material';
import type { IconButtonProps as MuiIconButtonProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface IconButtonProps extends MuiIconButtonProps {}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    return (
      <MuiIconButton ref={ref} {...props}>
        {props.children}
      </MuiIconButton>
    );
  }
);

export default IconButton;
