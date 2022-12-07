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

const clientSideEmotionCache = createEmotionCache();

interface CustomAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function CustomApp({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}: CustomAppProps) {
  return (
    <>
      <CacheProvider value={emotionCache}>
        <Head>
          <title>Welcome to sso-portal!</title>
        </Head>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <main>
            <Component {...pageProps} />
          </main>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}

export default CustomApp;
