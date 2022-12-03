import { InputAdornment as MuiInputAdornment } from '@mui/material';
import type { InputAdornmentProps as MuiInputAdornmentProps } from '@mui/material';
import { forwardRef } from 'react';

export type InputIconProps = MuiInputAdornmentProps;

export const InputIcon = forwardRef<HTMLDivElement, InputIconProps>(
  (props, ref) => {
    return (
      <MuiInputAdornment ref={ref} {...props}>
        {props.children}
      </MuiInputAdornment>
    );
  }
);
