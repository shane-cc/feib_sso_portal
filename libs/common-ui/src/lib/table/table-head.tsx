import { TableHead as MuiTableHead } from '@mui/material';
import type { TableHeadProps as MuiTableHeadProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TableHeadProps extends MuiTableHeadProps {}

export const TableHead = forwardRef<HTMLTableSectionElement, TableHeadProps>(
  (props, ref) => {
    return (
      <MuiTableHead {...props} ref={ref}>
        {props.children}
      </MuiTableHead>
    );
  }
);
