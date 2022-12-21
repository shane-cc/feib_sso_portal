import {
  Box,
  ConfirmDialog,
  Container,
  ErrorDialog,
  LoadingDialog,
  Typography,
} from '@sso-platform/common-ui';
import {
  useAuthState,
  useBaseState,
  useLoadingState,
} from '@sso-platform/shared';
import { ReactNode, useEffect } from 'react';
import { Header } from '../header';
import { useStyles } from './layout.style';

/* eslint-disable-next-line */
export interface LayoutProps {
  children: ReactNode;
  page: string;
  authFuncs: string[];
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  page,
  authFuncs,
}) => {
  const { classes } = useStyles();
  const {
    isError,
    isLoading,
    isConfirm,
    message,
    closeDialog,
    onConfirm,
    title,
  } = useLoadingState();
  const { getAuthFuncs, setAuthCodes } = useAuthState();
  const { appTitle } = useBaseState();

  useEffect(() => {
    setAuthCodes(authFuncs);
    getAuthFuncs(authFuncs);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <>
      <Box component="main" className={classes.root}>
        <Header title={appTitle} activeAccountName="Daniel" />
        <Container maxWidth={false} className={classes.container}>
          {children}
        </Container>
      </Box>
      {isLoading && <LoadingDialog isOpen={isLoading} />}
      {isError && (
        <ErrorDialog isOpen={isError} onClose={closeDialog} message={message} />
      )}
      {isConfirm && (
        <ConfirmDialog
          isOpen={isConfirm}
          onClose={closeDialog}
          title={title}
          onConfirm={onConfirm}
          onCancel={closeDialog}
        >
          <Typography>{message}</Typography>
        </ConfirmDialog>
      )}
    </>
  );
};

export default Layout;
