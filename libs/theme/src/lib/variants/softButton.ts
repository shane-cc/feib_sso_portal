import { ButtonProps, Interpolation, Theme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { COLORS } from '../colors';

export const softButton: {
  // eslint-disable-next-line @typescript-eslint/ban-types
  props: Partial<ButtonProps<'button', {}>>;
  style: Interpolation<{
    theme: Theme;
  }>;
}[] = [
  {
    props: { variant: 'soft' },
    style: {
      color: COLORS.grey[900],
      backgroundColor: alpha(COLORS.grey[500], 0.08),
      ':hover': {
        backgroundColor: alpha(COLORS.grey[500], 0.24),
      },
    },
  },
  {
    props: { variant: 'soft', color: 'primary' },
    style: {
      color: COLORS.primary.main,
      backgroundColor: alpha(COLORS.primary.main, 0.16),
      ':hover': {
        backgroundColor: alpha(COLORS.primary.main, 0.32),
      },
      ':disabled': {
        backgroundColor: alpha(COLORS.grey[500], 0.08),
      },
    },
  },
  {
    props: { variant: 'soft', color: 'secondary' },
    style: {
      color: COLORS.secondary.dark,
      backgroundColor: alpha(COLORS.secondary.main, 0.16),
      ':hover': {
        backgroundColor: alpha(COLORS.secondary.main, 0.32),
      },
      ':disabled': {
        backgroundColor: alpha(COLORS.grey[500], 0.08),
      },
    },
  },
  {
    props: { variant: 'soft', color: 'info' },
    style: {
      color: COLORS.info.dark,
      backgroundColor: alpha(COLORS.info.dark, 0.16),
      ':hover': {
        backgroundColor: alpha(COLORS.info.dark, 0.32),
      },
      ':disabled': {
        backgroundColor: alpha(COLORS.grey[500], 0.08),
      },
    },
  },
];
