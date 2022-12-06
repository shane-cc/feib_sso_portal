import { RadioGroup as MuiRadioGroup } from '@mui/material';
import type { RadioGroupProps as MuiRadioGroupProps } from '@mui/material';
import { FormControlLabel } from '../form-control-label';
import { Radio } from './radio';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface RadioGroupProps extends MuiRadioGroupProps {
  options: IRadioGroupOption[];
  color?: 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
}

export interface IRadioGroupOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export const RadioGroup = forwardRef<HTMLDivElement, RadioGroupProps>(
  ({ options, color = 'info', ...rest }, ref) => {
    return (
      <MuiRadioGroup {...rest} ref={ref}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            value={option.value}
            label={option.label}
            control={<Radio color={color} />}
            disabled={option.disabled}
          />
        ))}
      </MuiRadioGroup>
    );
  }
);

export default RadioGroup;
