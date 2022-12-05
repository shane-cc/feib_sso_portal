import { Card as MuiCard } from '@mui/material';
import type { CardProps as MuiCardProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface CardProps extends MuiCardProps {}

export const Card = forwardRef<HTMLDivElement, MuiCardProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MuiCard {...rest} ref={ref} elevation={0}>
        {children}
      </MuiCard>
    );
  }
);

export default Card;
