import { Checkbox as MuiCheckBox } from '@mui/material';
import type { CheckboxProps as MuiCheckboxProps } from '@mui/material';
import { forwardRef } from 'react';
import FormControlLabel from '../form-control-label/form-control-label';
import { CheckedIcon } from './checked-icon';
import { UnCheckedIcon } from './unchecked-icon';

/* eslint-disable-next-line */
export interface CheckboxProps extends MuiCheckboxProps {
  label?: string;
}

const CheckboxComponent = forwardRef<HTMLButtonElement, CheckboxProps>(
  (props, ref) => (
    <MuiCheckBox
      {...props}
      ref={ref}
      checkedIcon={<CheckedIcon />}
      icon={<UnCheckedIcon />}
    />
  )
);

export const Checkbox = forwardRef<HTMLButtonElement, CheckboxProps>(
  ({ label, ...rest }, ref) => {
    return label ? (
      <FormControlLabel
        label={label}
        control={<CheckboxComponent {...rest} ref={ref} />}
      />
    ) : (
      <CheckboxComponent {...rest} ref={ref} />
    );
  }
);

export default Checkbox;
