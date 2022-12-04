import { alpha, Menu as MuiMenu } from '@mui/material';
import type { MenuProps as MuiMenuProps } from '@mui/material';
import { forwardRef } from 'react';
import { makeStyles } from 'tss-react/mui';
import { COLORS } from '@sso-platform/theme';

/* eslint-disable-next-line */
export interface MenuProps extends MuiMenuProps {}

const useStyles = makeStyles()({
  root: {
    boxShadow: `-20px 20px 40px -4px ${alpha(COLORS.grey[500], 0.36)}`,
    filter: `drop-shadow(0px 0px 2px ${alpha(COLORS.grey[500], 0.24)})`,
  },
  triangle: {
    position: 'absolute',
    top: '.75rem',
    right: '-.75rem',
    display: 'block',
    width: 15,
    height: 15,
    backgroundColor: 'white',
    border: 'inherit',
    clipPath: `polygon(0% 0%, 100% 100%, 0% 100%)`,
    transform: 'rotate(225deg)',
    borderRadius: '0 0 0 0.25em',
    filter: `drop-shadow(0px 0px 2px ${alpha(COLORS.grey[500], 0.24)})`,
    zIndex: 1,
  },
});

export const Menu = forwardRef<HTMLDivElement, MenuProps>(
  ({ anchorOrigin, transformOrigin, children, ...rest }, ref) => {
    const { classes } = useStyles();
    return (
      <MuiMenu
        {...rest}
        ref={ref}
        elevation={0}
        anchorOrigin={{
          vertical: anchorOrigin?.vertical || 'top',
          horizontal: anchorOrigin?.horizontal || 'left',
        }}
        transformOrigin={{
          vertical: transformOrigin?.vertical || 'top',
          horizontal: transformOrigin?.horizontal || 'right',
        }}
        PaperProps={{
          className: classes.root,
          sx: {
            paddingLeft: '.5rem',
            paddingRight: '.5rem',
            borderRadius: '6px',
            overflow: 'visible',
          },
        }}
        // className={classes.root}
      >
        {children}
        {!anchorOrigin && !transformOrigin ? (
          <span className={classes.triangle} />
        ) : null}
      </MuiMenu>
    );
  }
);

export default Menu;
