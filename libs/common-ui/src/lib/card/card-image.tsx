import { alpha, CardMedia as MuiCardMedia } from '@mui/material';
import type { CardMediaProps as MuiCardMediaProps } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { forwardRef } from 'react';
import { COLORS } from '@sso-platform/theme';
import { Box } from '../box';

export type CardImageProps = MuiCardMediaProps & {
  image: string;
  isEditable?: boolean;
  isClickable?: boolean;
};

const useStyles = makeStyles<{
  useDefaultImage?: boolean;
  isEditable?: boolean;
  isClickable?: boolean;
}>()((_theme, { useDefaultImage, isEditable, isClickable }) => ({
  root: {
    borderRadius: '50%',
    borderColor: alpha(COLORS.primary.main, 0.32),
    borderWidth: 1,
    borderStyle: 'solid',
    backgroundColor: alpha(COLORS.primary.main, 0.16),
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    aspectRatio: '1 / 1',
    padding: useDefaultImage ? '1.5rem' : '0',
    maxWidth: '10rem',
    maxHeight: '10rem',
    minWidth: '8rem',
    minHeight: '8rem',
    boxSizing: 'border-box',
    margin: '1.75rem 2.5rem',
    outline: `0px solid ${alpha(COLORS.primary.main, 0.06)}`,
    transition: 'outline 0.2s ease-in-out',
    overflow: 'hidden',
    position: 'relative',
    cursor: isClickable || isEditable ? 'pointer' : 'initial',
    '&:hover':
      isClickable || isEditable
        ? {
            outline: `16px solid ${alpha(COLORS.primary.main, 0.06)}`,
          }
        : {},
    '&:after': {
      content: '"編輯圖片"',
      display: isEditable ? 'flex' : 'none',
      alignItems: 'flex-end',
      justifyContent: 'center',
      fontSize: 13,
      fontWeight: 500,
      paddingBottom: '.8rem',
      boxSizing: 'border-box',
      position: 'absolute',
      width: '100%',
      height: '100%',
      color: COLORS.white,
      top: 0,
      left: 0,
      background: `linear-gradient(180deg, ${alpha(
        COLORS.primary.lighter,
        0
      )} 0%, ${alpha(COLORS.primary.lighter, 0)} 45%, ${alpha(
        COLORS.primary.main,
        0.9
      )} 100%)`,
    },
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 'auto',
  },
}));

export const CardImage = forwardRef<HTMLImageElement, CardImageProps>(
  ({ isEditable = false, isClickable, sx, image, children, ...rest }, ref) => {
    const { classes } = useStyles({
      useDefaultImage: image.length === 0,
      isEditable,
      isClickable,
    });
    return (
      <Box className={classes.container}>
        <Box className={classes.root} sx={sx}>
          <MuiCardMedia
            {...rest}
            ref={ref}
            image={image.length === 0 ? '/card-default-image.png' : image}
            component="img"
          >
            {children}
          </MuiCardMedia>
        </Box>
      </Box>
    );
  }
);
