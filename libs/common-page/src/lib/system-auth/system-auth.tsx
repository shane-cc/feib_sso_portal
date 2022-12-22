import { IBreadcrumb, Layout, PageTitle } from '@sso-platform/common-layout';
import { Stack } from '@sso-platform/common-ui';
import {
  GetSystemDataResponse,
  PageRoutes,
  QueryCacheKey,
  getSystemData,
} from '@sso-platform/shared';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { SystemInfo } from './system-info';

/* eslint-disable-next-line */
export interface SystemAuthProps {}

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Dashboard',
    link: PageRoutes.HOME,
  },
];

type SystemAuthTabType =
  | PageRoutes.SYSTEM_AUTH_MANAGEMENT
  | PageRoutes.SYSTEM_ROLE_MANAGEMENT
  | PageRoutes.SYSTEM_MEMBER_MANAGEMENT
  | PageRoutes.SYSTEM_AUTH_ADMIN;

export const SystemAuth: React.FC<SystemAuthProps> = () => {
  const router = useRouter();
  const { systemCode } = router.query;
  const [currentTab, setCurrentTab] = useState<SystemAuthTabType>(
    PageRoutes.SYSTEM_AUTH_MANAGEMENT
  );
  const { data: systemData } = useQuery<GetSystemDataResponse, Error>(
    [QueryCacheKey.SYSTEM_LIST, systemCode],
    () => getSystemData(systemCode as string)
  );
  const system = systemData?.data;

  useEffect(() => {
    setCurrentTab(router.pathname.split('/').pop() as SystemAuthTabType);
  }, [router]);

  return (
    <Layout page={`${system?.systemCode}-auth-management`} authFuncs={[]}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        sx={{ mb: '2rem' }}
      >
        <PageTitle
          pageTitle={system?.systemName || ''}
          showBreadcrumb
          breadcrumbs={[
            ...breadcrumbs,
            { label: system?.systemName || '', link: router.asPath },
          ]}
        />
      </Stack>
      <Stack direction="row" gap={2}>
        <SystemInfo system={system} />
      </Stack>
    </Layout>
  );
};

export default SystemAuth;