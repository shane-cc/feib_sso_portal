import { COLORS } from '@sso-platform/theme';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: COLORS.body,
    width: '100vw',
    height: '100%',
    minHeight: '100vh',
  },
  container: {
    padding: '2rem 2.5rem',
    [theme.breakpoints.up('md')]: {
      padding: '2rem 2.5rem',
    },
  },
}));
