import { Table as MuiTable } from '@mui/material';
import type { TableProps as MuiTableProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TableProps extends MuiTableProps {}

export const Table = forwardRef<HTMLTableElement, TableProps>((props, ref) => {
  return (
    <MuiTable {...props} ref={ref}>
      {props.children}
    </MuiTable>
  );
});

export default Table;
