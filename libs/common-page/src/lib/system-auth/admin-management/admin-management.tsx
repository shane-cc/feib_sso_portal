import {
  Button,
  CircularProgress,
  Form,
  Pagination,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Toolbar,
  Typography,
} from '@sso-platform/common-ui';
import {
  GetAuthAdminsResponse,
  PageRoutes,
  QueryCacheKey,
  getAuthAdminsList,
  getPageQuery,
} from '@sso-platform/shared';
import { AuthAccount } from '@sso-platform/types';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';
import { AdminManagementRow } from './admin-management-row';
import { CreateAdminDialog } from './create-admin-dialog';
import { DeleteAdminDialog } from './delete-admin-dialog';

interface AdminManagementProps {
  systemCode: string;
}

export const AdminManagement: React.FC<AdminManagementProps> = ({
  systemCode,
}) => {
  const currentPath = `${PageRoutes.SYSTEMS}/${systemCode}/${PageRoutes.SYSTEM_AUTH_ADMIN}`;
  const router = useRouter();
  const { page, q } = router.query;
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [deleteTargetMember, setDeleteTargetMember] = useState<AuthAccount>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const {
    data: authAdminsData,
    isFetching: isAuthAdminsLoading,
    refetch,
  } = useQuery<GetAuthAdminsResponse, Error>(
    [QueryCacheKey.AUTH_ADMINS_LIST, systemCode],
    () =>
      getAuthAdminsList({
        systemCode,
        query: q ? (q as string) : '',
        page: getPageQuery(page),
      }),
    {
      onSuccess: (data) => {
        setTotalPage(data.data.totalPage ?? 1);
      },
    }
  );
  const authAdminsList = authAdminsData?.data.authAdmins ?? [];

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    router.push(
      {
        pathname: currentPath,
        query: {
          page: 1,
          q: searchQuery,
        },
      },
      undefined,
      { shallow: true }
    );
    refetch();
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    router.push(
      {
        pathname: currentPath,
        query: {
          page: pageNumber,
          q: searchQuery,
        },
      },
      undefined,
      { shallow: true }
    );
    refetch();
  };

  const handleCloseCreateDialog = () => {
    setShowCreateDialog(false);
  };

  const handleOpenCreateDialog = () => {
    setShowCreateDialog(true);
  };

  const handleCreateAdminSuccess = () => {
    handleCloseCreateDialog();
    refetch();
  };

  const handleCloseDeleteDialog = () => {
    setDeleteTargetMember(undefined);
  };

  const handleOpenDeleteDialog = (member: AuthAccount) => {
    setDeleteTargetMember(member);
  };

  const handleDeleteAdminSuccess = () => {
    handleCloseDeleteDialog();
    refetch();
  };

  useEffect(() => {
    setCurrentPage(getPageQuery(page));
    setSearchQuery(q ? (q as string) : '');
    refetch();
  }, [page, q, refetch]);

  return (
    <>
      <Paper>
        <TableContainer sx={{ py: 0.5 }}>
          <Toolbar>
            <Stack
              direction="row"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <Typography variant="h6">管理員管理</Typography>
              <Stack direction="row" gap="1rem">
                <Form onSubmit={handleSearch} disabled={isAuthAdminsLoading}>
                  <TextField
                    label=""
                    name="authQuery"
                    size="small"
                    sx={{
                      width: '380px',
                    }}
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                    placeholder="搜尋部門 / 帳號 / 姓名（英文字母不分大小寫）"
                    startIcon={<SearchIcon color="info" />}
                  />
                </Form>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={handleOpenCreateDialog}
                >
                  新增管理員
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow hover={false}>
                <TableCell>No.</TableCell>
                <TableCell>部門</TableCell>
                <TableCell>帳號/姓名</TableCell>
                <TableCell align="right" colSpan={2}>
                  操作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isAuthAdminsLoading && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Stack
                      direction="row"
                      justifyContent="center"
                      sx={{ py: 2 }}
                    >
                      <CircularProgress />
                    </Stack>
                  </TableCell>
                </TableRow>
              )}
              {!isAuthAdminsLoading && authAdminsList.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5}>
                    <Typography align="center" sx={{ py: 2 }}>
                      目前沒有已設定的系統管理員，請點擊【新增管理員】按鈕以新增管理員。
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {authAdminsList.length > 0 &&
                authAdminsList.map((account, idx) => (
                  <AdminManagementRow
                    key={`${account.memberAccount}-${idx}`}
                    index={currentPage * 10 - 10 + idx + 1}
                    authAdmin={account}
                    handleDeleteAdmin={handleOpenDeleteDialog}
                  />
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
          <Pagination
            currentPage={currentPage}
            handlePagination={handlePagination}
            totalPage={totalPage}
          />
        </Stack>
      </Paper>
      <CreateAdminDialog
        isOpen={showCreateDialog}
        handleClose={handleCloseCreateDialog}
        handleSuccess={handleCreateAdminSuccess}
        systemCode={systemCode}
      />
      <DeleteAdminDialog
        isOpen={typeof deleteTargetMember !== 'undefined'}
        handleClose={handleCloseDeleteDialog}
        handleSuccess={handleDeleteAdminSuccess}
        authAdmin={deleteTargetMember as AuthAccount}
        systemCode={systemCode}
      />
    </>
  );
};
