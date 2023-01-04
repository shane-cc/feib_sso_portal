import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/noto-sans-tc/300.css';
import '@fontsource/noto-sans-tc/400.css';
import '@fontsource/noto-sans-tc/500.css';
import '@fontsource/noto-sans-tc/700.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@sso-platform/theme';
import { CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { createEmotionCache } from '@sso-platform/theme';
import styled from '@emotion/styled';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppType, useBaseState } from '@sso-platform/shared';
import { useEffect } from 'react';

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const StyledMain = styled.main`
  a {
    text-decoration: none;
    '&:hover': {
      text-decoration: none;
    }
  }
`;

function CustomApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: CustomAppProps) {
  const { setAppType, setAppTitle } = useBaseState();

  useEffect(() => {
    setAppType(AppType.SSO_ADMIN);
    setAppTitle('Bankee 服務管理與稽核系統');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Bankee 服務管理與稽核系統</title>
        </Head>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <StyledMain>
              <Component {...pageProps} />
            </StyledMain>
          </ThemeProvider>
        </QueryClientProvider>
      </CacheProvider>
    </>
  );
}

export default CustomApp;
