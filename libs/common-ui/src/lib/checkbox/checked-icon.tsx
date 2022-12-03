import { SvgIcon as MuiSvgIcon } from '@mui/material';
import type { SvgIconProps as MuiSvgIconProps } from '@mui/material';

/* eslint-disable-next-line */
export interface CheckedIconProps extends MuiSvgIconProps {}

export const CheckedIcon: React.FC<CheckedIconProps> = (props) => {
  return (
    <MuiSvgIcon {...props}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M7 2C4.23858 2 2 4.23858 2 7V17C2 19.7614 4.23858 22 7 22H17C19.7614 22 22 19.7614 22 17V7C22 4.23858 19.7614 2 17 2H7ZM11.865 15.245L16.615 10.495C16.955 10.155 16.955 9.605 16.615 9.255C16.275 8.915 15.715 8.915 15.375 9.255L11.245 13.385L9.495 11.635C9.155 11.295 8.595 11.295 8.255 11.635C7.915 11.975 7.915 12.525 8.255 12.875L10.635 15.245C10.805 15.415 11.025 15.495 11.245 15.495C11.475 15.495 11.695 15.415 11.865 15.245Z"
      />
    </MuiSvgIcon>
  );
};
