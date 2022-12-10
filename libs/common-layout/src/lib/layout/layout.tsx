import { Box, Container } from '@sso-platform/common-ui';
import { ReactNode } from 'react';
import { Header } from '../header';
import { useStyles } from './layout.style';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box component="main" className={classes.root}>
      <Header title="Bankee SSO Portal" activeAccountName="Daniel" />
      <Container maxWidth={false} className={classes.container}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
