import {
  Checkbox,
  CircularProgress,
  Form,
  Pagination,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import {
  GeneralMessage,
  GetAuthFunctionsResponse,
  QueryCacheKey,
  getAuthFunctionsList,
} from '@sso-platform/shared';
import { AuthFunction } from '@sso-platform/types';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';

interface AuthFunctionSelectionProps {
  selectedAuthFunctions: AuthFunction[];
  setSelectedAuthFunctions: Dispatch<SetStateAction<AuthFunction[]>>;
  systemCode: string;
}

export const AuthFunctionSelection: React.FC<AuthFunctionSelectionProps> = ({
  selectedAuthFunctions,
  setSelectedAuthFunctions,
  systemCode,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const {
    data: authFunctionsData,
    isFetching: isAuthFunctionsLoading,
    refetch,
  } = useQuery<GetAuthFunctionsResponse, Error>(
    [QueryCacheKey.AUTH_FUNCTIONS_LIST, systemCode, currentPage],
    () =>
      getAuthFunctionsList({
        systemCode,
        page: currentPage,
        query: searchQuery,
      }),
    {
      enabled: false,
      onSuccess: (data) => {
        setTotalPage(data.data.totalPage ?? 1);
      },
    }
  );
  const authFunctionsList = authFunctionsData?.data.authFunctions ?? [];

  const isAuthFunctionSelected = (authFunction: AuthFunction) =>
    typeof selectedAuthFunctions.find(
      (selectedAuthFunction) =>
        selectedAuthFunction.authFunctionCode === authFunction.authFunctionCode
    ) !== 'undefined';

  const handleAuthFunctionSelection = (authFunction: AuthFunction) => {
    if (isAuthFunctionSelected(authFunction)) {
      setSelectedAuthFunctions(
        selectedAuthFunctions.filter(
          (selectedAuthFunction) =>
            selectedAuthFunction.authFunctionCode !==
            authFunction.authFunctionCode
        )
      );
    } else {
      setSelectedAuthFunctions([...selectedAuthFunctions, authFunction]);
    }
  };

  const handleSearchQueryChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = () => {
    setCurrentPage(1);
    refetch();
  };

  const handlePagination = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  useEffect(() => {
    refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <>
      <Stack
        direction="row"
        spacing={1}
        alignItems="center"
        justifyContent="space-between"
      >
        <Typography variant="h6">可設定功能授權碼</Typography>
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
      </Stack>
      <TableContainer sx={{ py: 0.5 }}>
        <Table>
          <TableHead>
            <TableRow hover={false}>
              <TableCell>勾選</TableCell>
              <TableCell colSpan={2}>授權代碼</TableCell>
              <TableCell colSpan={2}>功能名稱</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isAuthFunctionsLoading && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
                    <CircularProgress />
                  </Stack>
                </TableCell>
              </TableRow>
            )}
            {!isAuthFunctionsLoading && authFunctionsList.length === 0 && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography align="center" sx={{ py: 2 }}>
                    {GeneralMessage.EMPTY_AUTH_SELECTION_LIST}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {authFunctionsList.length > 0 &&
              authFunctionsList.map((authFunction, idx) => (
                <TableRow key={`${authFunction.authFunctionCode}-${idx}`}>
                  <TableCell>
                    <Checkbox
                      checked={isAuthFunctionSelected(authFunction)}
                      onChange={() => handleAuthFunctionSelection(authFunction)}
                      sx={{ p: 0 }}
                    />
                  </TableCell>
                  <TableCell colSpan={2}>
                    {authFunction.authFunctionCode}
                  </TableCell>
                  <TableCell colSpan={2}>
                    {authFunction.authFunctionName}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack direction="row" justifyContent="center" sx={{ py: 0 }}>
        <Pagination
          currentPage={currentPage}
          handlePagination={handlePagination}
          totalPage={totalPage}
        />
      </Stack>
    </>
  );
};
