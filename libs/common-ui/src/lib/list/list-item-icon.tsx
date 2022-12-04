import { ListItemIcon as MuiListItemIcon } from '@mui/material';
import type { ListItemIconProps as MuiListItemIconProps } from '@mui/material';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ListItemIconProps extends MuiListItemIconProps {}

export const ListItemIcon = forwardRef<HTMLDivElement, ListItemIconProps>(
  (props, ref) => {
    return <MuiListItemIcon ref={ref} {...props} />;
  }
);
