import type {} from '@mui/lab/themeAugmentation';
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
    text: {
      primary: COLORS.black,
      secondary: COLORS.primary.greyish,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          fontFamily: font,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 6,
          filter: `drop-shadow(0px 9px 16px ${alpha(
            COLORS.primary.label,
            0.18
          )}) drop-shadow(0px 2px 2px ${alpha(COLORS.primary.label, 0.32)})`,
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: COLORS.black,
          wordBreak: 'break-word',
        },
      },
    },
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
          padding: '5px 20px',
          width: 'fit-content',
          '&.MuiButton-soft': {
            padding: '5px 15px',
          },
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
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: COLORS.black,
          borderColor: 'currentcolor',
          borderWidth: 1,
          borderStyle: 'solid',
        },
        colorPrimary: {
          color: COLORS.primary.main,
          ':hover': {
            backgroundColor: alpha(COLORS.primary.main, 0.08),
          },
        },
        colorSecondary: {
          color: COLORS.secondary.main,
          ':hover': {
            backgroundColor: alpha(COLORS.secondary.main, 0.08),
          },
        },
        colorInfo: {
          color: COLORS.info.main,
          ':hover': {
            backgroundColor: alpha(COLORS.info.main, 0.08),
          },
        },
        colorInherit: {
          color: COLORS.black,
          ':hover': {
            backgroundColor: alpha(COLORS.black, 0.08),
          },
        },
      },
    },
    MuiPagination: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          '.Mui-selected[aria-current="true"]': {
            color: COLORS.primary.dark,
            backgroundColor: alpha(COLORS.primary.dark, 0.16),
            ':hover': {
              backgroundColor: alpha(COLORS.primary.dark, 0.32),
            },
          },
          '.MuiPaginationItem-root': {
            borderRadius: 8,
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          padding: '0px 2.5px',
          fontSize: 12,
          lightHeight: 1.25,
        },
        filledPrimary: {
          '&.Mui-disabled': {
            color: COLORS.black,
            fontWeight: 300,
            borderColor: alpha(COLORS.grey[900], 0.32),
            backgroundColor: COLORS.white,
            borderWidth: 1,
            borderStyle: 'solid',
          },
        },
      },
    },
    MuiTimelineDot: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '.MuiOutlinedInput-root': {
            borderRadius: 8,
          },
          '.MuiFormHelperText-root': {
            fontSize: 12,
            color: COLORS.primary.greyish,
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontSize: 16,
          lineHeight: 1.5,
          backgroundColor: COLORS.white,
          '&.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.secondary.main,
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.black,
            borderWidth: 1,
            color: COLORS.black,
          },
          '&.Mui-error:hover .MuiOutlinedInput-notchedOutline': {
            borderWidth: 2,
          },
          '&.Mui-focused.Mui-error .MuiOutlinedInput-notchedOutline': {
            borderColor: COLORS.secondary.main,
            borderWidth: 2,
            color: COLORS.secondary.main,
          },
          '&.Mui-disabled': {
            backgroundColor: COLORS.grey[100],
          },
        },
        sizeSmall: {
          fontSize: 14,
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: COLORS.primary.label,
          '&.Mui-focused': {
            color: COLORS.black,
          },
          '&.Mui-error.Mui-focused': {
            color: COLORS.secondary.main,
          },
          '&.Mui-error': {
            color: COLORS.primary.label,
          },
          '&.Mui-error.MuiInputLabel-shrink': {
            color: COLORS.secondary.main,
          },
        },
        sizeSmall: {
          fontSize: 14,
        },
      },
    },
    MuiBreadcrumbs: {
      styleOverrides: {
        root: {
          fontSize: 14,
          lineHeight: 1.6,
          color: COLORS.primary.greyish,
        },
        separator: {
          marginLeft: '1rem',
          marginRight: '1rem',
          color: COLORS.primary.label,
          fontSize: 14,
          lineHeight: 1.6,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          position: 'relative',
          filter: `drop-shadow(0px 9px 16px ${alpha(
            COLORS.primary.label,
            0.18
          )}) drop-shadow(0px 2px 2px ${alpha(COLORS.primary.label, 0.32)})`,
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          '&:last-child': {
            paddingBottom: 18,
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.white,
          border: 'none',
          minHeight: 'unset',
        },
        flexContainer: {
          backgroundColor: COLORS.white,
          justifyContent: 'flex-end',
          height: '100%',
          minHeight: 'inherit',
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          color: COLORS.primary.greyish,
          backgroundColor: COLORS.grey[300],
          width: '10rem',
          textTransform: 'none',
          fontSize: 14,
          lineHeight: 1.6,
          fontWeight: 500,
          opacity: 0.4,
          paddingTop: 9,
          paddingBottom: 9,
          height: '100%',
          minHeight: 'inherit',
          '&:first-of-type': {
            borderTopLeftRadius: 8,
          },
          '&:last-of-type': {
            borderTopRightRadius: 8,
          },
          '&:not(:last-child)': {
            borderRight: `2px dashed ${alpha(COLORS.grey[400], 1)}`,
            borderOffset: 2,
          },
          '&.Mui-selected': {
            opacity: 1,
            color: COLORS.white,
            backgroundColor: COLORS.primary.main,
            '&:not(:last-child)': {
              borderRight: `2px dashed ${alpha(COLORS.primary.main, 0.5)}`,
            },
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        content: {
          margin: '.5rem 0',
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          paddingBottom: '.8rem',
        },
      },
    },
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(COLORS.primary.main, 0.08),
          '.MuiTableCell-root': {
            color: COLORS.primary.greyish,
          },
          '.MuiTableCell-head.MuiTableCell-sizeSmall': {
            padding: '1rem 1.25rem',
          },
        },
      },
    },
    MuiTableCell: {
      styleOverrides: {
        root: {
          padding: '1rem 1.25rem',
        },
        sizeSmall: {
          padding: '.5rem 1.25rem',
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: COLORS.white,
        },
      },
    },
  },
});
