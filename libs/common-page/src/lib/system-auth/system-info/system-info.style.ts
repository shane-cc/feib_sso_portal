import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    maxWidth: '12.5rem',
    minWidth: '12.5rem',
    minHeight: '10rem',
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  url: {
    lineHeight: 1.2,
    textDecoration: 'underline',
    mb: '.5rem',
  },
}));
