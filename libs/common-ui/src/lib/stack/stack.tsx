import { Stack as MuiStack } from '@mui/material';
import type { StackProps as MuiStackProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface StackProps extends MuiStackProps {}

export const Stack = forwardRef<HTMLDivElement, MuiStackProps>((props, ref) => {
  return (
    <MuiStack {...props} ref={ref}>
      {props.children}
    </MuiStack>
  );
});

export default Stack;
