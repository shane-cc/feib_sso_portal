import {
  Box,
  BreadcrumbItem,
  Breadcrumbs,
  Container,
  Stack,
  Typography,
} from '@sso-platform/common-ui';
import Link from 'next/link';
import { ReactNode } from 'react';
import { Header } from '../header';
import { PageTitle } from '../page-title';
import { useStyles } from './layout.style';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();

  return (
    <Box component="main" className={classes.root}>
      <Header
        title="Bankee SSO Portal"
        activeAccountLink="/actions-history"
        activeAccountName="Daniel"
      />
      <Container maxWidth={false} className={classes.container}>
        {children}
      </Container>
    </Box>
  );
};

export default Layout;
