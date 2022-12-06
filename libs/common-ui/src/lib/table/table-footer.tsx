import { TableFooter as MuiTableFooter } from '@mui/material';
import type { TableFooterProps as MuiTableFooterProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TableFooterProps extends MuiTableFooterProps {}

export const TableFooter = forwardRef<
  HTMLTableSectionElement,
  TableFooterProps
>((props, ref) => {
  return (
    <MuiTableFooter {...props} ref={ref}>
      {props.children}
    </MuiTableFooter>
  );
});
