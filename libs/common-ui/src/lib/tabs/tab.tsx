import { Tab as MuiTab } from '@mui/material';
import type { TabProps as MuiTabProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TabProps extends MuiTabProps {}

export const Tab = forwardRef<HTMLSpanElement, TabProps>((props, ref) => {
  return (
    <MuiTab {...props} ref={ref} component="span">
      {props.children}
    </MuiTab>
  );
});
