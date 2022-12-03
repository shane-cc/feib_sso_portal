import { forwardRef } from 'react';
import { TextField, TextFieldProps } from '../text-field/text-field';
import { Option } from './option';

/* eslint-disable-next-line */
export type SelectProps = TextFieldProps & {
  endIcon?: null;
};

export const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ label, children, ...rest }, ref) => {
    return (
      <TextField {...rest} ref={ref} select label={label}>
        <Option value="" disabled>
          請選擇{label}
        </Option>
        {children}
      </TextField>
    );
  }
);

export default Select;
