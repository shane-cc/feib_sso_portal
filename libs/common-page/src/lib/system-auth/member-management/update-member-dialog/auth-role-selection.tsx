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
  GetAuthRolesResponse,
  QueryCacheKey,
  getAuthRolesList,
} from '@sso-platform/shared';
import { AuthRole } from '@sso-platform/types';
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';

interface AuthRoleSelectionProps {
  selectedAuthRoles: AuthRole[];
  setSelectedAuthRoles: Dispatch<SetStateAction<AuthRole[]>>;
  systemCode: string;
}

export const AuthRoleSelection: React.FC<AuthRoleSelectionProps> = ({
  selectedAuthRoles,
  setSelectedAuthRoles,
  systemCode,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const {
    data: authRolesData,
    isFetching: isAuthRolesLoading,
    refetch,
  } = useQuery<GetAuthRolesResponse, Error>(
    [QueryCacheKey.AUTH_ROLES_LIST, systemCode, currentPage],
    () =>
      getAuthRolesList({
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
  const authRolesList = authRolesData?.data.authRoles ?? [];

  const isAuthRoleSelected = (authRole: AuthRole) =>
    typeof selectedAuthRoles.find(
      (selectedAuthRole) =>
        selectedAuthRole.authRoleCode === authRole.authRoleCode
    ) !== 'undefined';

  const handleAuthRoleSelection = (authRole: AuthRole) => {
    if (isAuthRoleSelected(authRole)) {
      setSelectedAuthRoles(
        selectedAuthRoles.filter(
          (selectedAuthRole) =>
            selectedAuthRole.authRoleCode !== authRole.authRoleCode
        )
      );
    } else {
      setSelectedAuthRoles([...selectedAuthRoles, authRole]);
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
            placeholder="搜尋群組代碼／群組名稱（英文字母不分大小寫）"
            startIcon={<SearchIcon color="info" />}
          />
        </Form>
      </Stack>
      <TableContainer sx={{ py: 0.5 }}>
        <Table>
          <TableHead>
            <TableRow hover={false}>
              <TableCell>勾選</TableCell>
              <TableCell colSpan={2}>群組代碼</TableCell>
              <TableCell colSpan={2}>群組名稱</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {isAuthRolesLoading && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Stack direction="row" justifyContent="center" sx={{ py: 2 }}>
                    <CircularProgress />
                  </Stack>
                </TableCell>
              </TableRow>
            )}
            {!isAuthRolesLoading && authRolesList.length === 0 && (
              <TableRow>
                <TableCell colSpan={5}>
                  <Typography align="center" sx={{ py: 2 }}>
                    {GeneralMessage.EMPTY_ROLE_SELECTION_LIST}
                  </Typography>
                </TableCell>
              </TableRow>
            )}
            {authRolesList.length > 0 &&
              authRolesList.map((authRole, idx) => (
                <TableRow key={`${authRole.authRoleCode}-${idx}`}>
                  <TableCell>
                    <Checkbox
                      checked={isAuthRoleSelected(authRole)}
                      onChange={() => handleAuthRoleSelection(authRole)}
                      sx={{ p: 0 }}
                    />
                  </TableCell>
                  <TableCell colSpan={2}>{authRole.authRoleCode}</TableCell>
                  <TableCell colSpan={2}>{authRole.authRoleName}</TableCell>
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
