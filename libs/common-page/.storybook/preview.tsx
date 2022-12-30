import { RouterContext } from 'next/dist/shared/lib/router-context';
import { useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@sso-platform/theme';
import '@fontsource/noto-sans-tc/300.css';
import '@fontsource/noto-sans-tc/400.css';
import '@fontsource/noto-sans-tc/500.css';
import '@fontsource/noto-sans-tc/700.css';
import { QueryClient, QueryClientProvider } from 'react-query';
import { AppType, useBaseState } from '@sso-platform/shared';

const queryClient = new QueryClient();

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/ban-types
  (Story: Function) => {
    const { setAppTitle, setAppType } = useBaseState();
    useEffect(() => {
      setAppTitle('SSO Admin');
      setAppType(AppType.SSO_ADMIN);
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (
      <QueryClientProvider client={queryClient}>
        <ThemeProvider theme={theme}>
          <Story />
        </ThemeProvider>
      </QueryClientProvider>
    );
  },
];

export const parameters = {
  layout: 'fullscreen',
  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
