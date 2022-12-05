import { CardActions as MuiCardActions } from '@mui/material';
import type { CardActionsProps as MuiCardActionsProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface CardActionsProps extends MuiCardActionsProps {}

export const CardActions = forwardRef<HTMLDivElement, CardActionsProps>(
  (props, ref) => {
    return (
      <MuiCardActions {...props} ref={ref}>
        {props.children}
      </MuiCardActions>
    );
  }
);
