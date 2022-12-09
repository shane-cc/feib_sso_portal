import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@sso-platform/theme';
import '@fontsource/noto-sans-tc/300.css';
import '@fontsource/noto-sans-tc/400.css';
import '@fontsource/noto-sans-tc/500.css';
import '@fontsource/noto-sans-tc/700.css';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/ban-types
  (Story: Function) => {
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
};
