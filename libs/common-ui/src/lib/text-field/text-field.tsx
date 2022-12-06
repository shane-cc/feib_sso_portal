import { TextField as MuiTextField } from '@mui/material';
import type { TextFieldProps as MuiTextFieldProps } from '@mui/material';
import {
  FocusEventHandler,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import { InputIcon } from './input-icon';

/* eslint-disable-next-line */
export type TextFieldProps = MuiTextFieldProps & {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  label: string;
};

const getLabelText = (options: {
  value?: string;
  label: string;
  placeholder?: string;
  withIcon?: boolean;
}): string => {
  const { value, label, placeholder, withIcon = false } = options;
  return (typeof value !== 'undefined' && value.length > 0) || withIcon
    ? label || ''
    : `${label}${placeholder}`;
};

export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(
  (
    {
      startIcon,
      endIcon,
      error,
      value,
      label,
      placeholder,
      onChange,
      onBlur,
      ...rest
    },
    ref
  ) => {
    const [customLabel, setCustomLabel] = useState<string>(
      getLabelText({
        value: value as string,
        label,
        placeholder,
        withIcon: Boolean(startIcon || endIcon),
      })
    );

    const handleFocus: FocusEventHandler<
      HTMLInputElement | HTMLTextAreaElement
    > = (e) => {
      setCustomLabel(label);
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setCustomLabel(
        getLabelText({
          value: e.target.value,
          label,
          placeholder,
          withIcon: Boolean(startIcon || endIcon),
        })
      );
      typeof onBlur === 'function' && onBlur(e);
    };

    return (
      <MuiTextField
        {...rest}
        fullWidth
        ref={ref}
        variant="outlined"
        color={error ? 'secondary' : 'primary'}
        error={error}
        value={value}
        label={customLabel}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        InputProps={{
          startAdornment: startIcon ? (
            <InputIcon position="start">{startIcon}</InputIcon>
          ) : null,
          endAdornment: endIcon ? (
            <InputIcon position="end">{endIcon}</InputIcon>
          ) : null,
        }}
        InputLabelProps={
          endIcon
            ? {
                shrink: true,
              }
            : {}
        }
      />
    );
  }
);

export default TextField;
