import {
  AppBar,
  Box,
  Button,
  Stack,
  Toolbar,
  Typography,
} from '@sso-platform/common-ui';
import { PageRoutes } from '@sso-platform/shared';
import Image from 'next/image';
import Link from 'next/link';
import { useStyles } from './header.style';

export interface HeaderProps {
  title: string;
  activeAccountName: string;
}

export const Header: React.FC<HeaderProps> = ({ title, activeAccountName }) => {
  const { classes } = useStyles();

  const handleLogout = () => {
    // TODO: logout function implementation
    console.log('logout');
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
            onClick={handleLogout}
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
