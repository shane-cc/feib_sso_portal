import { MenuItem as MuiMenuItem } from '@mui/material';
import type { MenuItemProps as MuiMenuItemProps } from '@mui/material';
import { forwardRef, ReactNode } from 'react';
import { ListItemIcon, ListItemText } from '@sso-platform/common-ui';
import { MenuDivider } from './menu-divider';
import { makeStyles } from 'tss-react/mui';

/* eslint-disable-next-line */
export interface MenuItemProps extends MuiMenuItemProps {
  icon?: ReactNode;
  text?: string;
  color?: string;
  divider?: boolean;
}

const useStyles = makeStyles()({
  root: {
    paddingLeft: '.5rem',
    paddingRight: '1.5rem',
    borderRadius: 6,
  },
});

export const MenuItem = forwardRef<HTMLLIElement, MenuItemProps>(
  ({ color = 'text.primary', divider, text, icon, children, ...rest }, ref) => {
    const { classes } = useStyles();
    return (
      <MuiMenuItem
        ref={ref}
        {...rest}
        className={classes.root}
        sx={
          divider
            ? {
                marginBottom: '.5rem',
              }
            : {}
        }
      >
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        {text ? <ListItemText color={color}>{text}</ListItemText> : children}
        {divider ? <MenuDivider /> : null}
      </MuiMenuItem>
    );
  }
);
