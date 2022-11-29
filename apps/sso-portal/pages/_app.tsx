import { AppProps } from 'next/app';
import Head from 'next/head';
import '@fontsource/noto-sans-tc/300.css';
import '@fontsource/noto-sans-tc/400.css';
import '@fontsource/noto-sans-tc/500.css';
import '@fontsource/noto-sans-tc/700.css';
import { ThemeProvider } from '@emotion/react';
import { theme } from '@sso-platform/theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Welcome to sso-portal!</title>
      </Head>
      <ThemeProvider theme={theme}>
        <main className="app">
          <Component {...pageProps} />
        </main>
      </ThemeProvider>
    </>
  );
}

export default CustomApp;
