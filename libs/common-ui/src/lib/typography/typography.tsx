import { Typography as MuiTypography } from '@mui/material';
import type { TypographyProps as MuiTypographyProps } from '@mui/material';

/* eslint-disable-next-line */
export interface TypographyProps extends MuiTypographyProps {}

export const Typography: React.FC<TypographyProps> = ({
  children,
  ...props
}) => {
  return <MuiTypography {...props}>{children}</MuiTypography>;
};

export default Typography;
