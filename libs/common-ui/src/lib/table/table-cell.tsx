import { TableCell as MuiTableCell } from '@mui/material';
import type { TableCellProps as MuiTableCellProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TableCellProps extends MuiTableCellProps {}

export const TableCell = forwardRef<HTMLTableCellElement, TableCellProps>(
  (props, ref) => {
    return (
      <MuiTableCell {...props} ref={ref}>
        {props.children}
      </MuiTableCell>
    );
  }
);
