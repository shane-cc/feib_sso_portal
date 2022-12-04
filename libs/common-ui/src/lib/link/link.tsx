import { Link as MuiLink } from '@mui/material';
import { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface LinkProps extends MuiLinkProps {}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return (
    <MuiLink {...props} ref={ref}>
      {props.children}
    </MuiLink>
  );
});

export default Link;
