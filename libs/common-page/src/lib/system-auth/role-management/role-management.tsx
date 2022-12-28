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
  GetAuthRolesResponse,
  PageRoutes,
  QueryCacheKey,
  getAuthRolesList,
  getPageQuery,
} from '@sso-platform/shared';
import { AuthFunction, AuthRole, AuthRoleDetail } from '@sso-platform/types';
import { useRouter } from 'next/router';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { FilterQuery } from './filter-query';
import { RoleManagementRow } from './role-management-row';

interface RoleManagementProps {
  systemCode: string;
}

const RoleManagement: React.FC<RoleManagementProps> = ({ systemCode }) => {
  const currentPath = `${PageRoutes.SYSTEMS}/${systemCode}/${PageRoutes.SYSTEM_ROLE_MANAGEMENT}`;
  const router = useRouter();
  const { page, q } = router.query;
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [deleteTargetRole, setDeleteTargetRole] = useState<AuthRole>();
  const [updateTargetRole, setUpdateTargetRole] = useState<AuthRole>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterQuery, setFilterQuery] = useState<AuthFunction[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const {
    data: authRolesData,
    isFetching: isAuthRolesLoading,
    refetch,
  } = useQuery<GetAuthRolesResponse, Error>(
    [QueryCacheKey.AUTH_ROLES_LIST, systemCode],
    () =>
      getAuthRolesList({
        systemCode,
        query: q ? (q as string) : '',
        page: getPageQuery(page),
        filterQuery,
      }),
    {
      onSuccess: (data) => {
        setTotalPage(data.data.totalPage ?? 1);
      },
    }
  );
  const authRolesList = authRolesData?.data.authRoles ?? [];

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

  const handleCloseDeleteDialog = () => {
    setDeleteTargetRole(undefined);
  };

  const handleOpenDeleteDialog = (role: AuthRole) => {
    setDeleteTargetRole(role);
  };

  const handleDeleteRoleSuccess = () => {
    handleCloseDeleteDialog();
    refetch();
  };

  const handleCloseUpdateDialog = () => {
    setUpdateTargetRole(undefined);
  };

  const handleOpenUpdateDialog = (role: AuthRole) => {
    setUpdateTargetRole(role);
  };

  const handleUpdateRoleSuccess = () => {
    handleCloseUpdateDialog();
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
            <Stack width="100%" sx={{ py: 2 }} gap="1rem">
              <Stack
                direction="row"
                justifyContent="space-between"
                width="100%"
                alignItems="center"
              >
                <Typography variant="h6">角色管理</Typography>
                <Stack direction="row" gap="1rem">
                  <Form onSubmit={handleSearch} disabled={isAuthRolesLoading}>
                    <TextField
                      label=""
                      name="authQuery"
                      size="small"
                      sx={{
                        width: '380px',
                      }}
                      value={searchQuery}
                      onChange={handleSearchQueryChange}
                      placeholder="搜尋角色代碼 / 角色名稱（英文字母不分大小寫）"
                      startIcon={<SearchIcon color="info" />}
                    />
                  </Form>
                  <Button
                    variant="contained"
                    color="secondary"
                    size="small"
                    onClick={handleOpenCreateDialog}
                  >
                    新增角色
                  </Button>
                </Stack>
              </Stack>
              <FilterQuery
                checkedList={filterQuery}
                setCheckedList={setFilterQuery}
                handleSearch={handleSearch}
                systemCode={systemCode}
              />
            </Stack>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow hover={false}>
                <TableCell>No.</TableCell>
                <TableCell>角色代碼</TableCell>
                <TableCell>角色名稱</TableCell>
                <TableCell align="right" colSpan={2}>
                  操作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isAuthRolesLoading && (
                <TableRow>
                  <TableCell colSpan={7}>
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
              {!isAuthRolesLoading && authRolesList.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography align="center" sx={{ py: 2 }}>
                      目前沒有已設定的權限，請點擊【新增角色】按鈕以新增角色。
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {authRolesList.length > 0 &&
                authRolesList.map((authRole, idx) => (
                  <RoleManagementRow
                    key={`${authRole.authRoleCode}-${idx}`}
                    index={currentPage * 10 - 10 + idx + 1}
                    authRole={authRole}
                    handleUpdateRole={handleOpenUpdateDialog}
                    handleDeleteRole={handleOpenDeleteDialog}
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
      {/* <ImportAuthDialog
        isOpen={showImportDialog}
        handleClose={handleCloseImportDialog}
        systemCode={systemCode}
      />
      <DeleteAuthDialog
        isOpen={typeof deleteTargetAuth !== 'undefined'}
        handleClose={handleCloseDeleteDialog}
        handleSuccess={handleDeleteAuthSuccess}
        authFunction={deleteTargetAuth as AuthFunction}
        systemCode={systemCode}
      />
      {typeof updateTargetAuth !== 'undefined' && (
        <UpdateAuthDialog
          isOpen={typeof updateTargetAuth !== 'undefined'}
          handleClose={handleCloseUpdateDialog}
          handleSuccess={handleUpdateAuthSuccess}
          initialData={updateTargetAuth as AuthFunction}
          systemCode={systemCode}
        />
      )} */}
    </>
  );
};

export default RoleManagement;