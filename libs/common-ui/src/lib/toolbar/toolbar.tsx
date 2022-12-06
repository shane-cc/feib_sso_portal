import { Toolbar as MuiToolbar } from '@mui/material';
import type { ToolbarProps as MuiToolbarProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface ToolbarProps extends MuiToolbarProps {}

export const Toolbar = forwardRef<HTMLDivElement, ToolbarProps>(
  (props, ref) => {
    return (
      <MuiToolbar {...props} ref={ref}>
        {props.children}
      </MuiToolbar>
    );
  }
);

export default Toolbar;
