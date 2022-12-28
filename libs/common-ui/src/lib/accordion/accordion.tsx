import { Accordion as MuiAccordion } from '@mui/material';
import type { AccordionProps as MuiAccordionProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface AccordionProps extends MuiAccordionProps {
  disableElevation?: boolean;
}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  ({ sx, children, disableElevation = false, ...rest }, ref) => {
    return (
      <MuiAccordion
        {...rest}
        ref={ref}
        sx={
          disableElevation
            ? {
                boxShadow: 'none',
                filter: 'none',
                border: (theme) => `1px solid ${theme.palette.grey[300]}`,
                '&::before': {
                  display: 'none',
                },
                ...sx,
              }
            : {
                '&::before': {
                  display: 'none',
                },
                ...sx,
              }
        }
      >
        {children}
      </MuiAccordion>
    );
  }
);

export default Accordion;
