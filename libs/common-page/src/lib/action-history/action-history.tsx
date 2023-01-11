import { IBreadcrumb, Layout, PageTitle } from '@sso-platform/common-layout';
import {
  CircularProgress,
  Container,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@sso-platform/common-ui';
import {
  ErrorMessage,
  GeneralMessage,
  GetActionHistoryResponse,
  LoadingStateType,
  PageRoutes,
  QueryCacheKey,
  getActionHistory,
  useLoadingState,
} from '@sso-platform/shared';
import { ActionStatus } from '@sso-platform/types';
import { useEffect } from 'react';
import { useQuery } from 'react-query';

const breadcrumbs: IBreadcrumb[] = [
  {
    label: 'Dashboard',
    link: PageRoutes.HOME,
  },
  {
    label: '活動紀錄',
    link: PageRoutes.ACTION_HISTORY,
  },
];

/* eslint-disable-next-line */
export interface ActionHistoryProps {}

export const ActionHistory: React.FC<ActionHistoryProps> = () => {
  const { openDialog } = useLoadingState();
  const {
    data: actionHistoryData,
    isLoading: isActionHistoryLoading,
    isError,
    error,
  } = useQuery<GetActionHistoryResponse, Error>(
    [QueryCacheKey.ACTION_HISTORY_LIST],
    () => getActionHistory()
  );
  const actionHistory = actionHistoryData?.data.actionHistory ?? [];

  useEffect(() => {
    if (isError) {
      openDialog({
        message: error?.message || ErrorMessage.ACTION_HISTORY_FAILED,
        type: LoadingStateType.ERROR,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isError, error]);

  return (
    <Layout page="action-history" authFuncs={[]}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="flex-end"
        sx={{ mb: '2rem' }}
      >
        <PageTitle
          pageTitle="近一個月活動紀錄"
          showBreadcrumb
          breadcrumbs={breadcrumbs}
        />
      </Stack>
      <Container maxWidth="xl" sx={{ mb: 3 }}>
        <Paper>
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow hover={false}>
                  <TableCell>服務名稱</TableCell>
                  <TableCell>功能分類</TableCell>
                  <TableCell colSpan={2}>功能名稱／功能授權碼</TableCell>
                  <TableCell colSpan={1}>操作狀態</TableCell>
                  <TableCell colSpan={2}>IP Address</TableCell>
                  <TableCell colSpan={2}>紀錄時間</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {isActionHistoryLoading && (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ padding: 5 }}>
                      <CircularProgress />
                    </TableCell>
                  </TableRow>
                )}
                {((actionHistory.length === 0 && !isActionHistoryLoading) ||
                  isError) && (
                  <TableRow>
                    <TableCell colSpan={6} align="center" sx={{ padding: 5 }}>
                      <Typography>
                        {GeneralMessage.EMPTY_ACTION_HISTORY}
                      </Typography>
                    </TableCell>
                  </TableRow>
                )}
                {actionHistory.length > 0 &&
                  actionHistory.map(
                    (
                      {
                        platform,
                        authFunctionCategory,
                        authFunctionName,
                        authFunctionCode,
                        actionStatus,
                        actionIp,
                        actionDate,
                      },
                      idx
                    ) => (
                      <TableRow key={`${actionDate}-${idx}`}>
                        <TableCell>{platform}</TableCell>
                        <TableCell>{authFunctionCategory}</TableCell>
                        <TableCell
                          colSpan={2}
                        >{`${authFunctionName} / ${authFunctionCode}`}</TableCell>
                        <TableCell
                          colSpan={1}
                          sx={
                            actionStatus === ActionStatus.FAIL
                              ? {
                                  color: (theme) =>
                                    theme.palette.secondary.main,
                                  fontWeight: 'bold',
                                }
                              : {}
                          }
                        >
                          {actionStatus === ActionStatus.SUCCESS
                            ? '成功'
                            : '失敗'}
                        </TableCell>
                        <TableCell colSpan={2}>{actionIp}</TableCell>
                        <TableCell colSpan={2}>{actionDate}</TableCell>
                      </TableRow>
                    )
                  )}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Container>
    </Layout>
  );
};

export default ActionHistory;
