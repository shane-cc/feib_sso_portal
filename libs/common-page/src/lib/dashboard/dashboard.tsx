import { IBreadcrumb, Layout, PageTitle } from '@sso-platform/common-layout';
import {
  Button,
  CircularProgress,
  Grid,
  Paper,
  Stack,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import SearchIcon from '@mui/icons-material/Search';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { useState } from 'react';
import {
  AdminAuth,
  AppType,
  GeneralMessage,
  getActionHistory,
  GetActionHistoryResponse,
  getSystemList,
  GetSystemListResponse,
  PageRoutes,
  QueryCacheKey,
  useAuthState,
  useBaseState,
} from '@sso-platform/shared';
import { useQuery } from 'react-query';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { COLORS } from '@sso-platform/theme';
import { UpdateSystemDialog } from './update-system-dialog';
import { SystemCard } from './system-card';
import { ActionHistorySummary } from './action-history-summary';

/* eslint-disable-next-line */
export interface DashboardProps {}

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Dashboard',
    link: PageRoutes.HOME,
  },
];

const validationQuerySchema = z.object({
  systemQuery: z.string(),
});

type ValidationQuerySchema = z.infer<typeof validationQuerySchema>;

export const Dashboard: React.FC<DashboardProps> = () => {
  const { hasAuthFunc } = useAuthState();
  const { appType } = useBaseState();
  const isSSOPortal = appType === AppType.SSO_PORTAL;
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>();

  const { data: systemListData, isLoading: isSystemListLoading } = useQuery<
    GetSystemListResponse,
    Error
  >([QueryCacheKey.SYSTEM_LIST, searchQuery], () =>
    getSystemList({ query: searchQuery })
  );
  const systemList = systemListData?.data?.systems ?? [];

  const { data: actionHistoryData, isLoading: isActionHistoryLoading } =
    useQuery<GetActionHistoryResponse, Error>(
      QueryCacheKey.ACTION_HISTORY_SUMMARY,
      () => getActionHistory({ limit: 5 })
    );
  const actionHistoryList = actionHistoryData?.data?.actionHistory ?? [];

  const methods = useForm<ValidationQuerySchema>({
    resolver: zodResolver(validationQuerySchema),
    defaultValues: {
      systemQuery: '',
    },
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSearch = (data: ValidationQuerySchema) => {
    setSearchQuery(data.systemQuery);
  };

  const handleCreateSystem = () => {
    setShowCreateDialog(true);
  };

  const handleCloseCreateDialog = () => {
    setShowCreateDialog(false);
  };

  return (
    <Layout
      page={isSSOPortal ? 'sso-portal-dashboard' : 'sso-admin-dashboard'}
      authFuncs={
        isSSOPortal
          ? []
          : [
              AdminAuth.CREATE_SYSTEM,
              AdminAuth.DELETE_SYSTEM,
              AdminAuth.ASSIGN_SYSTEM_ADMIN,
              AdminAuth.EDIT_SYSTEM,
              AdminAuth.READ_SYSTEM_ADMIN,
              AdminAuth.READ_SYSTEM_AUTH,
            ]
      }
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        sx={{ mb: '2rem' }}
      >
        <PageTitle
          pageTitle="Dashboard"
          showBreadcrumb
          breadcrumbs={breadcrumbs}
        />
        <Stack direction="row" gap="1rem" alignItems="flex-start">
          <form onSubmit={handleSubmit(onSearch)}>
            <Controller
              control={control}
              name="systemQuery"
              render={({ field }) => (
                <TextField
                  label=""
                  {...field}
                  size="small"
                  sx={{
                    width: '500px',
                  }}
                  placeholder="搜尋服務代碼／服務名稱（英文字母不分大小寫）"
                  startIcon={<SearchIcon color="info" />}
                  error={!!errors.systemQuery}
                  helperText={errors.systemQuery?.message}
                  onSubmit={handleSubmit(onSearch)}
                />
              )}
            />
          </form>
          {!isSSOPortal && hasAuthFunc(AdminAuth.CREATE_SYSTEM) && (
            <Button
              variant="contained"
              color="secondary"
              onClick={handleCreateSystem}
            >
              新增服務
            </Button>
          )}
          {!isSSOPortal && (
            <Link href={PageRoutes.HISTORY_QUERY}>
              <Button variant="soft" color="info">
                操作記錄查詢
              </Button>
            </Link>
          )}
        </Stack>
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={9} container spacing={2}>
          {isSystemListLoading && <CircularProgress />}
          {!isSystemListLoading && systemList.length === 0 && (
            <Typography
              variant="body1"
              sx={{ padding: '1rem', margin: '2rem auto' }}
            >
              {GeneralMessage.EMPTY_SYSTEM_LIST}
            </Typography>
          )}
          {systemList.length > 0 &&
            systemList?.map((system, idx) => (
              <Grid
                item
                xs={6}
                md={4}
                lg={3}
                key={`${system.systemCode}-${idx}`}
              >
                <SystemCard system={system} />
              </Grid>
            ))}
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Paper
            sx={{
              padding: '1rem',
              minWidth: {
                lg: '300px',
              },
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              paddingX="1rem"
              paddingY="1rem"
            >
              <Typography variant="h6">近5次活動紀錄</Typography>
              <Link href={PageRoutes.ACTION_HISTORY}>
                <Stack
                  direction="row"
                  alignItems="center"
                  gap=".3rem"
                  sx={{
                    borderBottom: `1px solid transparent`,
                    transition: 'all .3s ease',
                    '&:hover': {
                      borderBottom: `1px solid ${COLORS.black}`,
                    },
                  }}
                >
                  <Typography variant="body2">查看完整紀錄</Typography>
                  <ArrowForwardIosIcon
                    sx={{ fontSize: '1rem' }}
                    htmlColor={COLORS.black}
                  />
                </Stack>
              </Link>
            </Stack>
            {isActionHistoryLoading && <CircularProgress />}
            {!isActionHistoryLoading && actionHistoryList.length === 0 && (
              <Typography sx={{ padding: '2rem 1rem' }}>
                {GeneralMessage.EMPTY_ACTION_HISTORY}
              </Typography>
            )}
            {actionHistoryList.length > 0 && (
              <ActionHistorySummary actionHistoryList={actionHistoryList} />
            )}
          </Paper>
        </Grid>
      </Grid>
      <UpdateSystemDialog
        type="create"
        isOpen={showCreateDialog}
        handleClose={handleCloseCreateDialog}
      />
    </Layout>
  );
};

export default Dashboard;
