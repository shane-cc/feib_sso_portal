import { TableRow as MuiTableRow } from '@mui/material';
import type { TableRowProps as MuiTableRowProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TableRowProps extends MuiTableRowProps {}

export const TableRow = forwardRef<HTMLTableRowElement, TableRowProps>(
  (props, ref) => {
    return (
      <MuiTableRow
        {...props}
        ref={ref}
        hover={typeof props.hover !== 'undefined' ? props.hover : true}
      >
        {props.children}
      </MuiTableRow>
    );
  }
);
