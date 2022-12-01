import { Grid as MuiGrid } from '@mui/material';
import type { GridProps as MuiGridProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface GridProps extends MuiGridProps {}

export const Grid = forwardRef<HTMLDivElement, GridProps>((props, ref) => {
  return (
    <MuiGrid {...props} ref={ref}>
      {props.children}
    </MuiGrid>
  );
});

export default Grid;
