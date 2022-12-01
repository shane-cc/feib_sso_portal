import { Container as MuiContainer } from '@mui/material';
import type { ContainerProps as MuiContainerProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface ContainerProps extends MuiContainerProps {}

export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (props, ref) => {
    return (
      <MuiContainer {...props} ref={ref}>
        {props.children}
      </MuiContainer>
    );
  }
);

export default Container;
