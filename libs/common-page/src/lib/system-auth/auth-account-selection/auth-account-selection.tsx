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
  GetAuthAccountsResponse,
  QueryCacheKey,
  getAuthAccountsList,
} from '@sso-platform/shared';
import { AuthAccount } from '@sso-platform/types';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';

interface AuthAccountSelectionProps {
  selectedAuthAccounts: AuthAccount[];
  setSelectedAuthAccounts: Dispatch<SetStateAction<AuthAccount[]>>;
  systemCode: string;
}

export const AuthAccountSelection: React.FC<AuthAccountSelectionProps> = ({
  selectedAuthAccounts,
  setSelectedAuthAccounts,
  systemCode,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const {
    data: authAccountsData,
    isFetching: isAuthAccountsLoading,
    refetch,
  } = useQuery<GetAuthAccountsResponse, Error>(
    [QueryCacheKey.AUTH_ACCOUNTS_LIST, systemCode, currentPage],
    () =>
      getAuthAccountsList({
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
  const authAccountsList = authAccountsData?.data.authAccounts ?? [];

  const isAuthAccountSelected = (authAccount: AuthAccount) =>
    typeof selectedAuthAccounts.find(
      (selectedAuthAccount) =>
        selectedAuthAccount.memberAccount === authAccount.memberAccount
    ) !== 'undefined';

  const handleAuthAccountSelection = (authAccount: AuthAccount) => {
    if (isAuthAccountSelected(authAccount)) {
      setSelectedAuthAccounts(
        selectedAuthAccounts.filter(
          (selectedAuthAccount) =>
            selectedAuthAccount.memberAccount !== authAccount.memberAccount
        )
      );
    } else {
      setSelectedAuthAccounts([...selectedAuthAccounts, authAccount]);
    }
  };

  const handleSearchQueryChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
        justifyContent="flex-end"
      >
        <Form onSubmit={handleSearch} disabled={isAuthAccountsLoading}>
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
      </Stack>
      <TableContainer sx={{ py: 0.5 }}>
        <Table>
          <TableHead>
            <TableRow hover={false}>
              <TableCell>勾選</TableCell>
              <TableCell colSpan={2}>部門</TableCell>
              <TableCell colSpan={2}>帳號/名稱</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isAuthAccountsLoading && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
                    <CircularProgress />
                  </Stack>
                </TableCell>
              </TableRow>
            )}
            {!isAuthAccountsLoading && authAccountsList.length === 0 && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography align="center" sx={{ py: 2 }}>
                    {GeneralMessage.EMPTY_ACCOUNT_LIST}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {authAccountsList.length > 0 &&
              authAccountsList.map((account, idx) => (
                <TableRow key={`${account.memberAccount}-${idx}`}>
                  <TableCell>
                    <Checkbox
                      checked={isAuthAccountSelected(account)}
                      onChange={() => handleAuthAccountSelection(account)}
                      sx={{ p: 0 }}
                    />
                  </TableCell>
                  <TableCell colSpan={2}>{account.memberDepartment}</TableCell>
                  <TableCell colSpan={2}>
                    {account.memberAccount} / {account.memberName}
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
