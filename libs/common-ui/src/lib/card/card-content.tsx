import { CardContent as MuiCardContent } from '@mui/material';
import type { CardContentProps as MuiCardContentProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface CardContentProps extends MuiCardContentProps {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  (props, ref) => {
    return (
      <MuiCardContent {...props} ref={ref}>
        {props.children}
      </MuiCardContent>
    );
  }
);
