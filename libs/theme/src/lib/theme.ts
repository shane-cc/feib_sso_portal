import {
  createTheme,
  SimplePaletteColorOptions,
  alpha,
} from '@mui/material/styles';
import { COLORS } from './colors';
import { softButton } from './variants/softButton';

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

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    soft: true;
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
      lighter: COLORS.primary.lighter,
      light: COLORS.primary.light,
      main: COLORS.primary.main,
      dark: COLORS.primary.dark,
      darker: COLORS.primary.darker,
    },
    secondary: {
      lighter: COLORS.secondary.lighter,
      light: COLORS.secondary.light,
      main: COLORS.secondary.main,
      dark: COLORS.secondary.dark,
      darker: COLORS.secondary.darker,
    },
    info: {
      lighter: COLORS.info.lighter,
      light: COLORS.info.light,
      main: COLORS.info.main,
      dark: COLORS.info.dark,
      darker: COLORS.info.darker,
    },
    grey: {
      '100': COLORS.grey['100'],
      '200': COLORS.grey['200'],
      '300': COLORS.grey['300'],
      '400': COLORS.grey['400'],
      '500': COLORS.grey['500'],
      '600': COLORS.grey['600'],
      '700': COLORS.grey['700'],
      '800': COLORS.grey['800'],
      '900': COLORS.grey['900'],
    },
  },
  components: {
    MuiButton: {
      variants: [...softButton],
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 6,
          padding: '6px 22px',
          fontSize: 14,
          lineHeight: 1.7,
        },
        containedInfo: {
          color: '#fff',
        },
        sizeLarge: {
          fontSize: 15,
          lineHeight: 1.75,
        },
        sizeSmall: {
          fontSize: 13,
          lineHeight: 1.25,
          padding: '5px 10px',
        },
        outlinedInherit: {
          borderColor: alpha(COLORS.grey[500], 0.32),
        },
        outlinedInfo: {
          ':hover': {
            backgroundColor: alpha(COLORS.info.main, 0.08),
          },
        },
        textInfo: {
          ':hover': {
            backgroundColor: alpha(COLORS.info.main, 0.08),
          },
        },
        colorInherit: {
          color: COLORS.black,
        },
      },
    },
  },
});
