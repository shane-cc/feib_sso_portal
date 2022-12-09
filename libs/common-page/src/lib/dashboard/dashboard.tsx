import {
  ActionHistorySummary,
  IBreadcrumb,
  Layout,
  PageTitle,
  SystemCard,
} from '@sso-platform/common-layout';
import {
  Button,
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
import { useRouter } from 'next/router';
import { CreateSystemDialog } from './create-system-dialog/create-system-dialog';
import {
  getActionHistory,
  GetActionHistoryResponse,
  getSystemList,
  GetSystemListResponse,
} from '@sso-platform/shared';
import { useQuery } from 'react-query';
import Link from 'next/link';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { COLORS } from '@sso-platform/theme';

/* eslint-disable-next-line */
export interface DashboardProps {}

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Dashboard',
    link: '/',
  },
];

const validationQuerySchema = z.object({
  systemQuery: z.string(),
});

type ValidationQuerySchema = z.infer<typeof validationQuerySchema>;

export const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>();
  const { data: systemListData } = useQuery<GetSystemListResponse, Error>(
    ['systemList', searchQuery],
    () => getSystemList({ query: searchQuery })
  );
  const systemList = systemListData?.data ?? [];
  const { data: actionHistoryData } = useQuery<GetActionHistoryResponse, Error>(
    'actionHistorySummary',
    () => getActionHistory({ limit: 5 })
  );
  const actionHistoryList = actionHistoryData?.data ?? [];

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

  const handleGoToHistory = () => {
    return router.push('/history-query');
  };

  const handleCloseCreateDialog = () => {
    setShowCreateDialog(false);
  };

  return (
    <Layout>
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
                  placeholder="搜尋系統代碼／系統名稱（英文字母不分大小寫）"
                  startIcon={<SearchIcon color="info" />}
                  error={!!errors.systemQuery}
                  helperText={errors.systemQuery?.message}
                  onSubmit={handleSubmit(onSearch)}
                />
              )}
            />
          </form>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCreateSystem}
          >
            新增子系統
          </Button>
          <Button variant="soft" color="info" onClick={handleGoToHistory}>
            操作記錄查詢
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={9} container spacing={2}>
          {systemList.map((system) => (
            <Grid item xs={6} sm={4} md={3} key={system.systemId}>
              <SystemCard system={system} />
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          <Paper
            sx={{
              padding: '1rem',
            }}
          >
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
              paddingX="1rem"
              paddingTop="1rem"
            >
              <Typography variant="h6">近5次活動紀錄</Typography>
              <Link href="/action-history">
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
            <ActionHistorySummary actionHistoryList={actionHistoryList} />
          </Paper>
        </Grid>
      </Grid>
      <CreateSystemDialog
        isOpen={showCreateDialog}
        handleClose={handleCloseCreateDialog}
      />
    </Layout>
  );
};

export default Dashboard;
