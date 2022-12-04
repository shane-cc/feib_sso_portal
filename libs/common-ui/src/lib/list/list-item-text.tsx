import { ListItemText as MuiListItemText } from '@mui/material';
import type { ListItemTextProps as MuiListItemTextProps } from '@mui/material';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListItemTextProps extends MuiListItemTextProps {
  color?: string;
}

export const ListItemText = forwardRef<HTMLDivElement, ListItemTextProps>(
  ({ color = 'text.primary', children, ...rest }, ref) => {
    return (
      <MuiListItemText
        {...rest}
        ref={ref}
        sx={{
          span: {
            color,
          },
        }}
      >
        {children}
      </MuiListItemText>
    );
  }
);
