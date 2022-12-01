import { Paper as MuiPaper } from '@mui/material';
import type { PaperProps as MuiPaperProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface PaperProps extends MuiPaperProps {}

export const Paper = forwardRef<HTMLDivElement, PaperProps>((props, ref) => {
  return (
    <MuiPaper {...props} ref={ref}>
      {props.children}
    </MuiPaper>
  );
});

export default Paper;
