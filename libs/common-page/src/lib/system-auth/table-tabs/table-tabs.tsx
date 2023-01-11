import React, { SyntheticEvent } from 'react';
import { SystemAuthTabType } from '../system-auth';
import { Box, Tab, Tabs } from '@sso-platform/common-ui';
import { useRouter } from 'next/router';
import { AppType, PageRoutes, useBaseState } from '@sso-platform/shared';
import { useStyles } from './table-tabs.style';

interface TableTabsProps {
  currentTab: SystemAuthTabType;
}

export const TableTabs: React.FC<TableTabsProps> = ({ currentTab }) => {
  const { classes } = useStyles();
  const router = useRouter();
  const { systemCode } = router.query;
  const { appType } = useBaseState();
  const isSSOAdmin = appType === AppType.SSO_ADMIN;

  const handleChange = (_e: SyntheticEvent, newValue: SystemAuthTabType) => {
    router.push(`/systems/${systemCode}/${newValue}`, undefined, {
      shallow: true,
    });
  };

  return (
    <Box className={classes.root}>
      <Tabs
        value={currentTab || PageRoutes.SYSTEM_AUTH_MANAGEMENT}
        onChange={handleChange}
        sx={{ backgroundColor: 'transparent' }}
      >
        {isSSOAdmin && (
          <Tab label="管理員設定" value={PageRoutes.SYSTEM_AUTH_ADMIN} />
        )}
        <Tab label="授權碼管理" value={PageRoutes.SYSTEM_AUTH_MANAGEMENT} />
        <Tab label="群組設定" value={PageRoutes.SYSTEM_ROLE_MANAGEMENT} />
        <Tab label="成員群組設定" value={PageRoutes.SYSTEM_MEMBER_MANAGEMENT} />
      </Tabs>
    </Box>
  );
};
