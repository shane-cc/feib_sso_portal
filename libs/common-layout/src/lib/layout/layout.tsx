import {
  Box,
  Container,
  ErrorDialog,
  LoadingDialog,
} from '@sso-platform/common-ui';
import { useLoadingState } from '@sso-platform/shared';
import { ReactNode } from 'react';
import { Header } from '../header';
import { useStyles } from './layout.style';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { classes } = useStyles();
  const { isError, isLoading, message, closeDialog } = useLoadingState();

  return (
    <>
      <Box component="main" className={classes.root}>
        <Header title="Bankee SSO Portal" activeAccountName="Daniel" />
        <Container maxWidth={false} className={classes.container}>
          {children}
        </Container>
      </Box>
      {isLoading && <LoadingDialog isOpen={isLoading} />}
      {isError && (
        <ErrorDialog isOpen={isError} onClose={closeDialog} message={message} />
      )}
    </>
  );
};

export default Layout;
