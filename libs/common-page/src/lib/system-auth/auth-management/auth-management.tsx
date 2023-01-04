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
import React, { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useQuery } from 'react-query';
import {
  GeneralMessage,
  GetAuthFunctionsResponse,
  PageRoutes,
  QueryCacheKey,
  getAuthFunctionsList,
} from '@sso-platform/shared';
import { ImportAuthDialog } from './import-auth-dialog';
import { useRouter } from 'next/router';
import { getPageQuery } from '@sso-platform/shared';
import { DeleteAuthDialog } from './delete-auth-dialog';
import { AuthFunctionDetail } from '@sso-platform/types';
import UpdateAuthDialog from './update-auth-dialog';

interface AuthManagementProps {
  systemCode: string;
}

export const AuthManagement: React.FC<AuthManagementProps> = ({
  systemCode,
}) => {
  const currentPath = `${PageRoutes.SYSTEMS}/${systemCode}/${PageRoutes.SYSTEM_AUTH_MANAGEMENT}`;
  const router = useRouter();
  const { page, q } = router.query;
  const [showImportDialog, setShowImportDialog] = useState<boolean>(false);
  const [deleteTargetAuth, setDeleteTargetAuth] =
    useState<AuthFunctionDetail>();
  const [updateTargetAuth, setUpdateTargetAuth] =
    useState<AuthFunctionDetail>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const {
    data: authFunctionsData,
    isFetching: isAuthFunctionsLoading,
    refetch,
  } = useQuery<GetAuthFunctionsResponse, Error>(
    [QueryCacheKey.AUTH_FUNCTIONS_LIST, systemCode],
    () =>
      getAuthFunctionsList({
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
  const authFunctionsList = authFunctionsData?.data.authFunctions ?? [];

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (_e: FormEvent<HTMLFormElement>) => {
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

  const handleCloseImportDialog = () => {
    setShowImportDialog(false);
  };

  const handleOpenImportDialog = () => {
    setShowImportDialog(true);
  };

  const handleCloseDeleteDialog = () => {
    setDeleteTargetAuth(undefined);
  };

  const handleDeleteAuthSuccess = () => {
    handleCloseDeleteDialog();
    refetch();
  };

  const handleShowDeleteDialog = (target: AuthFunctionDetail) => {
    setDeleteTargetAuth(target);
  };

  const handleShowUpdateDialog = (target: AuthFunctionDetail) => {
    setUpdateTargetAuth(target);
  };

  const handleCloseUpdateDialog = () => {
    setUpdateTargetAuth(undefined);
  };

  const handleUpdateAuthSuccess = () => {
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
            <Stack
              direction="row"
              justifyContent="space-between"
              width="100%"
              alignItems="center"
            >
              <Typography variant="h6">授權碼管理</Typography>
              <Stack direction="row" gap="1rem">
                <Form onSubmit={handleSearch} disabled={isAuthFunctionsLoading}>
                  <TextField
                    label=""
                    name="authQuery"
                    size="small"
                    sx={{
                      width: '380px',
                    }}
                    value={searchQuery}
                    onChange={handleSearchQueryChange}
                    placeholder="搜尋授權代碼／功能名稱（英文字母不分大小寫）"
                    startIcon={<SearchIcon color="info" />}
                  />
                </Form>
                <Button
                  variant="contained"
                  color="secondary"
                  size="small"
                  onClick={handleOpenImportDialog}
                >
                  匯入授權碼
                </Button>
              </Stack>
            </Stack>
          </Toolbar>
          <Table>
            <TableHead>
              <TableRow hover={false}>
                <TableCell>No.</TableCell>
                <TableCell>授權代碼</TableCell>
                <TableCell>功能名稱</TableCell>
                <TableCell>功能分類</TableCell>
                <TableCell>是否啟用</TableCell>
                <TableCell align="right" colSpan={2}>
                  操作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isAuthFunctionsLoading && (
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
              {!isAuthFunctionsLoading && authFunctionsList.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography align="center" sx={{ py: 2 }}>
                      {GeneralMessage.EMPTY_AUTH_LIST}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {authFunctionsList.length > 0 &&
                authFunctionsList.map((authFunction, idx) => (
                  <TableRow key={`${authFunction.authFunctionCode}-${idx}`}>
                    <TableCell>{currentPage * 10 - 10 + idx + 1}</TableCell>
                    <TableCell>{authFunction.authFunctionCode}</TableCell>
                    <TableCell>{authFunction.authFunctionName}</TableCell>
                    <TableCell>{authFunction.authFunctionCategory}</TableCell>
                    <TableCell>{authFunction.isActive ? 'Y' : 'N'}</TableCell>
                    <TableCell align="right" colSpan={2}>
                      <Stack
                        direction="row"
                        gap=".5rem"
                        justifyContent="flex-end"
                      >
                        <Button
                          variant="soft"
                          color="inherit"
                          size="small"
                          startIcon={<EditIcon />}
                          onClick={() => handleShowUpdateDialog(authFunction)}
                        >
                          編輯
                        </Button>
                        <Button
                          variant="soft"
                          color="secondary"
                          size="small"
                          startIcon={<DeleteForeverIcon />}
                          onClick={() => handleShowDeleteDialog(authFunction)}
                        >
                          刪除
                        </Button>
                      </Stack>
                    </TableCell>
                  </TableRow>
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
      <ImportAuthDialog
        isOpen={showImportDialog}
        handleClose={handleCloseImportDialog}
        systemCode={systemCode}
      />
      <DeleteAuthDialog
        isOpen={typeof deleteTargetAuth !== 'undefined'}
        handleClose={handleCloseDeleteDialog}
        handleSuccess={handleDeleteAuthSuccess}
        authFunction={deleteTargetAuth as AuthFunctionDetail}
        systemCode={systemCode}
      />
      {typeof updateTargetAuth !== 'undefined' && (
        <UpdateAuthDialog
          isOpen={typeof updateTargetAuth !== 'undefined'}
          handleClose={handleCloseUpdateDialog}
          handleSuccess={handleUpdateAuthSuccess}
          initialData={updateTargetAuth as AuthFunctionDetail}
          systemCode={systemCode}
        />
      )}
    </>
  );
};
