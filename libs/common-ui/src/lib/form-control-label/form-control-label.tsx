import { FormControlLabel as MuiFormControlLabel } from '@mui/material';
import type { FormControlLabelProps as MuiFormControlLabelProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface FormControlLabelProps extends MuiFormControlLabelProps {}

export const FormControlLabel = forwardRef<HTMLElement, FormControlLabelProps>(
  (props, ref) => {
    return <MuiFormControlLabel {...props} ref={ref} />;
  }
);

export default FormControlLabel;
