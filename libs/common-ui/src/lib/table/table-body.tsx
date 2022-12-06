import { TableBody as MuiTableBody } from '@mui/material';
import type { TableBodyProps as MuiTableBodyProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TableBodyProps extends MuiTableBodyProps {}

export const TableBody = forwardRef<HTMLTableSectionElement, TableBodyProps>(
  (props, ref) => {
    return (
      <MuiTableBody {...props} ref={ref}>
        {props.children}
      </MuiTableBody>
    );
  }
);
