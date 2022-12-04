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
      underline="hover"
      color={isCurrentPage ? 'text.primary' : 'inherit'}
      href={href}
      aria-current={isCurrentPage ? 'page' : undefined}
    >
      {label}
    </Link>
  );
});
