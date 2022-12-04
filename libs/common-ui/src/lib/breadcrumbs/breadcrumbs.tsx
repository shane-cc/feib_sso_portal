import { Breadcrumbs as MuiBreadcrumbs } from '@mui/material';
import type { BreadcrumbsProps as MuiBreadcrumbsProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface BreadcrumbsProps extends MuiBreadcrumbsProps {}

export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  (props, ref) => {
    return (
      <MuiBreadcrumbs {...props} ref={ref} aria-label="breadcrumb">
        {props.children}
      </MuiBreadcrumbs>
    );
  }
);

export default Breadcrumbs;
