import { createTheme, SimplePaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColorOptions extends SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
    '100'?: string;
    '200'?: string;
    '300'?: string;
    '400'?: string;
    '500'?: string;
    '600'?: string;
    '700'?: string;
    '800'?: string;
    '900'?: string;
  }
}
const font = `'Noto Sans TC', sans-serif`;
export const theme = createTheme({
  typography: {
    fontFamily: font,
    h1: {
      fontSize: 40,
      fontWeight: 700,
      lineHeight: 2,
      color: '#2A2136',
    },
    h2: {
      fontSize: 32,
      fontWeight: 700,
      lineHeight: 2,
      color: '#2A2136',
    },
    h3: {
      fontSize: 24,
      fontWeight: 700,
      lineHeight: 2,
      color: '#2A2136',
    },
    h4: {
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.8,
      color: '#2A2136',
    },
    h5: {
      fontSize: 18,
      fontWeight: 700,
      lineHeight: 1.67,
      color: '#2A2136',
    },
    h6: {
      fontSize: 16,
      fontWeight: 700,
      lineHeight: 1.75,
      color: '#2A2136',
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.57,
      color: '#2A2136',
    },
    subtitle2: {
      fontSize: 14,
      fontWeight: 500,
      lineHeight: 1.57,
      color: '#2A2136',
    },
    body1: {
      fontSize: 16,
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#2A2136',
    },
    body2: {
      fontSize: 14,
      fontWeight: 400,
      lineHeight: 1.57,
      color: '#2A2136',
    },
    caption: {
      fontSize: 12,
      fontWeight: 400,
      lineHeight: 1.5,
      color: '#2A2136',
    },
  },
  palette: {
    primary: {
      lighter: '#E1C8FA',
      light: '#A898D6',
      main: '#8E75D6',
      dark: '#5209AE',
      darker: '#3E006F',
    },
    secondary: {
      lighter: '#FFD6EF',
      light: '#FF84B0',
      main: '#E5618D',
      dark: '#B71965',
      darker: '#7A094D',
    },
    info: {
      lighter: '#DAF5C4',
      light: '#C3E886',
      main: '#9DCB3B',
      dark: '#65A41E',
      darker: '#2B550A',
    },
    grey: {
      '100': '#F9FAFB',
      '200': '#F4F6F8',
      '300': '#DFE3E8',
      '400': '#C4CDD5',
      '500': '#919EAB',
      '600': '#637381',
      '700': '#454F5B',
      '800': '#212B36',
      '900': '#161C24',
    },
  },
});
