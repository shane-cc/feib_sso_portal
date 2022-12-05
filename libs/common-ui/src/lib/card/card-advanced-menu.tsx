import MoreVertIcon from '@mui/icons-material/MoreVert';
import { alpha } from '@mui/material';
import { COLORS } from '@sso-platform/theme';
import { MouseEvent, ReactNode, useState } from 'react';
import { makeStyles } from 'tss-react/mui';
import { IconButton } from '../button';
import { Menu } from '../menu';

export interface CardAdvancedMenuProps {
  children: ReactNode;
}

const useStyles = makeStyles<{ isActive: boolean }>()(
  (_theme, { isActive }) => ({
    root: {
      position: 'absolute',
      borderRadius: 6,
      width: 26,
      height: 26,
      top: 12,
      right: 12,
      padding: 5,
      boxSizing: 'border-box',
      backgroundColor: isActive
        ? alpha(COLORS.primary.main, 1)
        : alpha(COLORS.primary.main, 0.16),
      color: isActive ? COLORS.white : COLORS.primary.main,
      border: 'none',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: alpha(COLORS.primary.main, 1),
        color: COLORS.white,
      },
    },
  })
);

export const CardAdvancedMenu: React.FC<CardAdvancedMenuProps> = ({
  children,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLButtonElement>(null);
  const open = Boolean(anchorEl);
  const { classes } = useStyles({ isActive: open });

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton className={classes.root} onClick={handleClick}>
        <MoreVertIcon fontSize="small" />
      </IconButton>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        {children}
      </Menu>
    </>
  );
};
