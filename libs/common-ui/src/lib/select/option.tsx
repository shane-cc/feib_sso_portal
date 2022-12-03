import { MenuItem as MuiMenuItem } from '@mui/material';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material';
import { forwardRef } from 'react';

export type OptionProps = MuiMenuItemProps & {
  value: string;
};

export const Option = forwardRef<HTMLLIElement, OptionProps>(
  ({ value, children, ...rest }, ref) => {
    return (
      <MuiMenuItem {...rest} ref={ref} value={value}>
        {children}
      </MuiMenuItem>
    );
  }
);
