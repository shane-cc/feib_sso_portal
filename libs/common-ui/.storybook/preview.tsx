import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@sso-platform/theme';
import '@fontsource/noto-sans-tc/300.css';
import '@fontsource/noto-sans-tc/400.css';
import '@fontsource/noto-sans-tc/500.css';
import '@fontsource/noto-sans-tc/700.css';

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/ban-types
  (Story: Function) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
