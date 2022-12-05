import { CardActionArea as MuiCardActionArea } from '@mui/material';
import type { CardActionAreaProps as MuiCardActionAreaProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface CardActionAreaProps extends MuiCardActionAreaProps {}

export const CardActionArea = forwardRef<
  HTMLButtonElement,
  CardActionAreaProps
>((props, ref) => {
  return (
    <MuiCardActionArea {...props} ref={ref}>
      {props.children}
    </MuiCardActionArea>
  );
});
