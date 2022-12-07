import { COLORS } from '@sso-platform/theme';
import { makeStyles } from 'tss-react/mui';

export const useStyles = makeStyles()((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
    width: '100vw',
    height: '100vh',
    backgroundImage: `url(/login-bg.jpg)`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    objectFit: 'cover',
  },
  header: {
    padding: '2rem 4rem',
    width: '100%',
  },
  logo: {
    width: 215,
    position: 'relative',
    height: 60,
  },
  formBackground: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: `${theme.spacing(156)}`,
    height: `${theme.spacing(118.5)}`,
    background: `radial-gradient(50% 50% at 50% 50%, ${COLORS.primary.main} 0%, ${COLORS.skin.main} 43.75%)`,
    opacity: 0.5,
    filter: 'blur(100px)',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  form: {
    width: theme.spacing(62.5),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    padding: theme.spacing(4.5),
  },
  formContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    gap: '1.5rem',
    margin: `${theme.spacing(4.5)} auto 0`,
  },
}));
