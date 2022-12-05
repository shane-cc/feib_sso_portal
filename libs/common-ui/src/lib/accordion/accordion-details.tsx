import { AccordionDetails as MuiAccordionDetails } from '@mui/material';
import type { AccordionDetailsProps as MuiAccordionDetailsProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface AccordionDetailsProps extends MuiAccordionDetailsProps {}

export const AccordionDetails = forwardRef<
  HTMLDivElement,
  AccordionDetailsProps
>((props, ref) => {
  return (
    <MuiAccordionDetails {...props} ref={ref}>
      {props.children}
    </MuiAccordionDetails>
  );
});
