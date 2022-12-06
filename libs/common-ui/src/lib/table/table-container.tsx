import { TableContainer as MuiTableContainer } from '@mui/material';
import type { TableContainerProps as MuiTableContainerProps } from '@mui/material';
import { forwardRef } from 'react';
import Box from '../box/box';

/* eslint-disable-next-line */
export interface TableContainerProps extends MuiTableContainerProps {
  component?: React.ElementType;
}

export const TableContainer = forwardRef<HTMLDivElement, TableContainerProps>(
  ({ component, children, ...rest }, ref) => {
    return (
      <MuiTableContainer {...rest} ref={ref} component={component || Box}>
        {children}
      </MuiTableContainer>
    );
  }
);
