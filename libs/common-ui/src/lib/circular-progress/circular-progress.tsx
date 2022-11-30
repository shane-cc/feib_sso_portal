import { CircularProgress as MuiCircularProgress } from '@mui/material';
import type { CircularProgressProps as MuiCircularProgressProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface CircularProgressProps extends MuiCircularProgressProps {}

export const CircularProgress = forwardRef<HTMLElement, CircularProgressProps>(
  (props, ref) => {
    return <MuiCircularProgress ref={ref} color="primary" {...props} />;
  }
);

export default CircularProgress;
