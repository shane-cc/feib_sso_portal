import { AccordionSummary as MuiAccordionSummary } from '@mui/material';
import type { AccordionSummaryProps as MuiAccordionSummaryProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface AccordionSummaryProps extends MuiAccordionSummaryProps {}

export const AccordionSummary = forwardRef<
  HTMLDivElement,
  AccordionSummaryProps
>((props, ref) => {
  return (
    <MuiAccordionSummary {...props} ref={ref}>
      {props.children}
    </MuiAccordionSummary>
  );
});
