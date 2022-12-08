import { Typography as MuiTypography } from '@mui/material';
import type { TypographyProps as MuiTypographyProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TypographyProps extends MuiTypographyProps {}

export const Typography = forwardRef<HTMLElement, TypographyProps>(
  ({ children, ...rest }, ref) => {
    return (
      <MuiTypography {...rest} ref={ref}>
        {children}
      </MuiTypography>
    );
  }
);

export default Typography;
