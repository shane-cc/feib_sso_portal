import { AppBar as MuiAppBar } from '@mui/material';
import type { AppBarProps as MuiAppBarProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface AppBarProps extends MuiAppBarProps {}

export const AppBar = forwardRef<HTMLDivElement, AppBarProps>((props, ref) => {
  return (
    <MuiAppBar {...props} ref={ref}>
      {props.children}
    </MuiAppBar>
  );
});

export default AppBar;
