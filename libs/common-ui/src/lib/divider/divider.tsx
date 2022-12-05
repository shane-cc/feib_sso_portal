import { Divider as MuiDivider } from '@mui/material';
import type { DividerProps as MuiDividerProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface DividerProps extends MuiDividerProps {}

export const Divider = forwardRef<HTMLHRElement, DividerProps>((props, ref) => {
  return <MuiDivider {...props} ref={ref} />;
});

export default Divider;
