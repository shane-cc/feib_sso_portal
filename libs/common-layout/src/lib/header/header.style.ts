import { alpha } from '@mui/material';
import { COLORS } from '@sso-platform/theme';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    height: 80,
    overflow: 'hidden',
    borderRadius: 0,
    boxShadow: '0px 4px 4px rgba(239, 239, 239, 0.25), 0px 2px 5px #EFEFEF',
    filter: 'none',
    boxSizing: 'border-box',
  },
  logoBackground: {
    display: 'flex',
    width: 450,
    height: 80,
    background: `radial-gradient(circle, rgba(230,0,0,1) 0%, rgba(179,47,102,1) 51%, rgba(130,93,199,1) 100%)`,
    filter: `blur(50px)`,
    borderRadius: '0px 0px 50px 0px',
    position: 'absolute',
    top: 0,
    left: 0,
    transform: 'translateX(-50%)',
    zIndex: -1,
    '&:nth-of-type(2)': {
      filter: `blur(25px)`,
    },
    '&:nth-of-type(3)': {
      background: `linear-gradient(90deg, ${alpha(COLORS.white, 1)} 0%, ${alpha(
        COLORS.white,
        0
      )} 60%)`,
    },
  },
  logo: {
    width: 148,
    height: 34,
    position: 'relative',
    cursor: 'pointer',
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    boxSizing: 'border-box',
  },
  actions: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  activeAccount: {
    display: 'block',
    position: 'relative',
    cursor: 'pointer',
    '&:after': {
      content: '""',
      display: 'block',
      width: '100%',
      height: '2px',
      position: 'absolute',
      bottom: '-3px',
      left: 0,
      backgroundColor: theme.palette.primary.main,
    },
  },
}));
