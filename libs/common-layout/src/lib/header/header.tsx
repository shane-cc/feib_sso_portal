import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from '@sso-platform/common-ui';
import {
  AppType,
  LoadingStateType,
  PageRoutes,
  useBaseState,
  useLoadingState,
} from '@sso-platform/shared';
import Image from 'next/image';
import Link from 'next/link';
import { useStyles } from './header.style';
import { useRouter } from 'next/router';

export interface HeaderProps {
  title: string;
  activeAccountName: string;
}

export const Header: React.FC<HeaderProps> = ({ title, activeAccountName }) => {
  const { classes } = useStyles();
  const router = useRouter();
  const { openDialog } = useLoadingState();
  const { appType } = useBaseState();
  const isSSOPortal = appType === AppType.SSO_PORTAL;

  const onLogout = () => {
    openDialog({
      type: LoadingStateType.CONFIRM,
      message: '您是否確定登出？',
      title: '是否確定登出？',
      onConfirm: handleLogout,
    });
  };

  const handleLogout = () => {
    // TODO: call logout api(?)
    console.log('logout');
    if (isSSOPortal) {
      router.replace(PageRoutes.SSO_LOGIN);
      return;
    }
    // TODO: redirect to loged out page?
  };

  return (
    <AppBar className={classes.root} position="sticky">
      <Toolbar className={classes.container}>
        <Box className={classes.logoBackground} />
        <Box className={classes.logoBackground} />
        <Box className={classes.logoBackground} />
        <Link href={PageRoutes.HOME}>
          <Box className={classes.logo}>
            <Image src="/assets/feib_logo.svg" alt="遠東銀行" fill />
          </Box>
        </Link>
        <Typography variant="h1" fontSize={27}>
          {title}
        </Typography>
        <Stack direction="row" alignItems="center" gap="2rem">
          <Link href={PageRoutes.ACTION_HISTORY}>
            <Typography
              variant="body1"
              color="primary"
              className={classes.activeAccount}
            >
              Hi, {activeAccountName}
            </Typography>
          </Link>
          <Button
            variant="contained"
            color="primary"
            size="small"
            onClick={onLogout}
            sx={{ padding: '.5rem 2rem' }}
          >
            登出
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
