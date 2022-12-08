import { Container as MuiContainer } from '@mui/material';
import type { ContainerProps as MuiContainerProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface ContainerProps extends MuiContainerProps {
  // maxWidth?: string;
}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MuiContainer {...rest} ref={ref}>
        {children}
      </MuiContainer>
    );
  }
);

export default Container;
