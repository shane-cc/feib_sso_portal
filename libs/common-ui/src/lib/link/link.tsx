import { Link as MuiLink } from '@mui/material';
import { LinkProps as MuiLinkProps } from '@mui/material/Link';
import { ElementType, forwardRef } from 'react';

/* eslint-disable-next-line */
export interface LinkProps extends MuiLinkProps {
  component?: ElementType;
}

export const Link = forwardRef<HTMLAnchorElement, LinkProps>((props, ref) => {
  return (
    <MuiLink
      {...props}
      ref={ref}
      component={props.component || 'a'}
      sx={{ cursor: 'pointer' }}
    >
      {props.children}
    </MuiLink>
  );
});

export default Link;
