import { ThemeProvider } from '@mui/material/styles';
import { theme } from '@sso-platform/theme';

export const decorators = [
  // eslint-disable-next-line @typescript-eslint/ban-types
  (Story: Function) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];
