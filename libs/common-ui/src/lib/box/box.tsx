import { Box as MuiBox } from '@mui/material';
import type { BoxProps as MuiBoxProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface BoxProps extends MuiBoxProps {}

export const Box = forwardRef<HTMLDivElement, BoxProps>((props, ref) => {
  return (
    <MuiBox {...props} ref={ref}>
      {props.children}
    </MuiBox>
  );
});

export default Box;
