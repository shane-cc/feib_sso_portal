import { COLORS } from '@sso-platform/theme';
import { forwardRef } from 'react';
import { Link, LinkProps } from '../link/link';

export type BreadcrumbItemProps = LinkProps & {
  isCurrentPage?: boolean;
  label: string;
  href: string;
};

export const BreadcrumbItem = forwardRef<
  HTMLAnchorElement,
  BreadcrumbItemProps
>(({ isCurrentPage, label, href, ...rest }, ref) => {
  return (
    <Link
      {...rest}
      ref={ref}
      underline="none"
      color={isCurrentPage ? COLORS.black : COLORS.primary.greyish}
      href={href}
      aria-current={isCurrentPage ? 'page' : undefined}
      component="span"
    >
      {label}
    </Link>
  );
});
