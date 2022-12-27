import {
  Button,
  CircularProgress,
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
import React, { ChangeEvent, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useQuery } from 'react-query';
import {
  GetAuthFunctionsResponse,
  QueryCacheKey,
  getAuthFunctionsList,
} from '@sso-platform/shared';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface AuthManagementProps {}

export const AuthManagement: React.FC<AuthManagementProps> = () => {
  const [searchQuery, setSearchQuery] = React.useState<string>('');
  const [currentPage, setCurrentPage] = React.useState<number>(1);
  const [totalPage, setTotalPage] = React.useState<number>(1);
  const {
    data: authFunctionsData,
    isLoading: isAuthFunctionsLoading,
    refetch,
  } = useQuery<GetAuthFunctionsResponse, Error>(
    [QueryCacheKey.AUTH_FUNCTIONS_LIST, searchQuery, currentPage],
    () => getAuthFunctionsList({ query: searchQuery, page: currentPage })
  );
  const authFunctionsList = authFunctionsData?.data?.authFunctions ?? [];

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
    refetch();
  };

  useEffect(() => {
    setTotalPage(authFunctionsData?.data?.totalPage ?? 1);
  }, [authFunctionsData]);

  return (
    <Paper>
      <TableContainer sx={{ py: 0.5 }}>
        <Toolbar>
          <Stack
            direction="row"
            justifyContent="space-between"
            width="100%"
            alignItems="center"
          >
            <Typography variant="h6">權限管理</Typography>
            <Stack direction="row" gap="1rem">
              <TextField
                label=""
                name="authQuery"
                size="small"
                sx={{
                  width: '380px',
                }}
                value={searchQuery}
                onChange={handleSearchQueryChange}
                placeholder="搜尋權限代碼／權限名稱（英文字母不分大小寫）"
                startIcon={<SearchIcon color="info" />}
              />
              <Button variant="contained" color="secondary" size="small">
                匯入權限
              </Button>
            </Stack>
          </Stack>
        </Toolbar>
        <Table>
          <TableHead>
            <TableRow hover={false}>
              <TableCell>No.</TableCell>
              <TableCell>權限代碼</TableCell>
              <TableCell>權限描述</TableCell>
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
                  <Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
                    <CircularProgress />
                  </Stack>
                </TableCell>
              </TableRow>
            )}
            {authFunctionsList.length === 0 && (
              <TableRow>
                <TableCell colSpan={7}>
                  <Typography align="center" sx={{ py: 2 }}>
                    目前沒有已設定的權限，請點擊【匯入權限】按鈕以匯入權限。
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
                      >
                        編輯
                      </Button>
                      <Button
                        variant="soft"
                        color="secondary"
                        size="small"
                        startIcon={<DeleteForeverIcon />}
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
  );
};
