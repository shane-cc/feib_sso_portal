import { SvgIcon as MuiSvgIcon } from '@mui/material';
import type { SvgIconProps as MuiSvgIconProps } from '@mui/material';

/* eslint-disable-next-line */
export interface UnCheckedIconProps extends MuiSvgIconProps {}

export const UnCheckedIcon: React.FC<UnCheckedIconProps> = (props) => {
  return (
    <MuiSvgIcon {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM7.5 3.5C5.29086 3.5 3.5 5.29086 3.5 7.5V16.5C3.5 18.7091 5.29086 20.5 7.5 20.5H16.5C18.7091 20.5 20.5 18.7091 20.5 16.5V7.5C20.5 5.29086 18.7091 3.5 16.5 3.5H7.5Z"
        fill="#919EAB"
        fill-opacity="0.8"
      />
    </MuiSvgIcon>
  );
};
