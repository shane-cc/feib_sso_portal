import styled from '@emotion/styled';
import {
  BreadcrumbItem,
  Breadcrumbs,
  Stack,
  Typography,
} from '@sso-platform/common-ui';
import Link from 'next/link';

/* eslint-disable-next-line */
export interface PageTitleProps {
  pageTitle: string;
  showBreadcrumb?: boolean;
  breadcrumbs?: IBreadcrumb[];
}

export interface IBreadcrumb {
  label: string;
  link: string;
}

export const PageTitle: React.FC<PageTitleProps> = ({
  pageTitle,
  showBreadcrumb = false,
  breadcrumbs = [],
}) => {
  return (
    <Stack>
      <Typography variant="h4">{pageTitle}</Typography>
      {showBreadcrumb && breadcrumbs.length > 0 && (
        <Breadcrumbs aria-label="breadcrumb" sx={{ marginTop: '.5rem' }}>
          {breadcrumbs.map((breadcrumb, idx) => (
            <Link key={breadcrumb.link} href={breadcrumb.link}>
              <BreadcrumbItem
                label={breadcrumb.label}
                href={breadcrumb.link}
                isCurrentPage={idx === breadcrumbs.length - 1}
              />
            </Link>
          ))}
        </Breadcrumbs>
      )}
    </Stack>
  );
};

export default PageTitle;
