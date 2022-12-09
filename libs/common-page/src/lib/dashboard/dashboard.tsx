import {
  IBreadcrumb,
  Layout,
  PageTitle,
  SystemCard,
} from '@sso-platform/common-layout';
import {
  Button,
  Grid,
  Stack,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import SearchIcon from '@mui/icons-material/Search';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import { KeyboardEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CreateSystemDialog } from './create-system-dialog/create-system-dialog';
import { System } from '@sso-platform/types';
import { getSystemList } from '@sso-platform/shared';

/* eslint-disable-next-line */
export interface DashboardProps {}

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Dashboard',
    link: '/',
  },
];

const validationQuerySchema = z.object({
  systemQuery: z.string().min(1, '請填寫系統代碼／系統名稱'),
});

type ValidationQuerySchema = z.infer<typeof validationQuerySchema>;

export const Dashboard: React.FC<DashboardProps> = () => {
  const router = useRouter();
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [systemList, setSystemList] = useState<System[]>([]);

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
    clearErrors,
  } = methods;

  const onSearch = (data: ValidationQuerySchema) => {
    // TODO: call api
    console.log(data);
  };

  const handleKeyUp = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') return;
    if (errors.systemQuery) {
      clearErrors();
    }
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

  useEffect(() => {
    const fetchSystemList = async () => {
      const systemList = await getSystemList();
      setSystemList(systemList);
      console.log(systemList);
    };
    fetchSystemList();
  }, []);

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
        <Stack direction="row" gap="1rem">
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
                  onKeyUp={handleKeyUp}
                />
              )}
            />
          </form>
          <Button
            variant="contained"
            color="secondary"
            size="small"
            onClick={handleCreateSystem}
          >
            新增子系統
          </Button>
          <Button
            variant="soft"
            color="info"
            size="small"
            onClick={handleGoToHistory}
          >
            操作記錄查詢
          </Button>
        </Stack>
      </Stack>
      <Grid container spacing={2}>
        {systemList.map((system) => (
          <Grid item xs={6} sm={4} md={3} key={system.systemId}>
            <SystemCard system={system} />
          </Grid>
        ))}
      </Grid>
      <CreateSystemDialog
        isOpen={showCreateDialog}
        handleClose={handleCloseCreateDialog}
      />
    </Layout>
  );
};

export default Dashboard;
