import { Accordion as MuiAccordion } from '@mui/material';
import type { AccordionProps as MuiAccordionProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface AccordionProps extends MuiAccordionProps {}

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (props, ref) => {
    return (
      <MuiAccordion {...props} ref={ref}>
        {props.children}
      </MuiAccordion>
    );
  }
);

export default Accordion;
