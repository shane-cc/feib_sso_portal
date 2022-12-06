import { Collapse as MuiCollapse } from '@mui/material';
import type { CollapseProps as MuiCollapseProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface CollapseProps extends MuiCollapseProps {}

export const Collapse = forwardRef<HTMLDivElement, CollapseProps>(
  (props, ref) => {
    return (
      <MuiCollapse {...props} ref={ref}>
        {props.children}
      </MuiCollapse>
    );
  }
);

export default Collapse;
