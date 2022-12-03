import { Radio as MuiRadio } from '@mui/material';
import type { RadioProps as MuiRadioProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface RadioProps extends MuiRadioProps {}

export const Radio = forwardRef<HTMLButtonElement, RadioProps>((props, ref) => {
  return <MuiRadio {...props} ref={ref} />;
});
