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
  GeneralMessage,
  GetAuthMembersResponse,
  PageRoutes,
  QueryCacheKey,
  getAuthMembersList,
  getPageQuery,
} from '@sso-platform/shared';
import { AuthMember, AuthRole } from '@sso-platform/types';
import { useRouter } from 'next/router';
import { ChangeEvent, useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import SearchIcon from '@mui/icons-material/Search';
import { MemberManagementRow } from './member-management-row';
import { AuthRoleFilterQuery } from './auth-role-filter-query';
import CreateMemberDialog from './create-member-dialog';
import { DeleteMemberDialog } from './delete-member-dialog';
import { UpdateMemberDialog } from './update-member-dialog';

interface MemberManagementProps {
  systemCode: string;
}

export const MemberManagement: React.FC<MemberManagementProps> = ({
  systemCode,
}) => {
  const currentPath = `${PageRoutes.SYSTEMS}/${systemCode}/${PageRoutes.SYSTEM_MEMBER_MANAGEMENT}`;
  const router = useRouter();
  const { page, q } = router.query;
  const [showCreateDialog, setShowCreateDialog] = useState<boolean>(false);
  const [deleteTargetMember, setDeleteTargetMember] = useState<AuthMember>();
  const [updateTargetMember, setUpdateTargetMember] = useState<AuthMember>();
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [filterQuery, setFilterQuery] = useState<AuthRole[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPage, setTotalPage] = useState<number>(1);
  const {
    data: authMembersData,
    isFetching: isAuthMembersLoading,
    refetch,
  } = useQuery<GetAuthMembersResponse, Error>(
    [QueryCacheKey.AUTH_MEMBERS_LIST, systemCode],
    () =>
      getAuthMembersList({
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
  const authMembersList = authMembersData?.data.authMembers ?? [];

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

  const handleCreateMemberSuccess = () => {
    handleCloseCreateDialog();
    refetch();
  };

  const handleCloseDeleteDialog = () => {
    setDeleteTargetMember(undefined);
  };

  const handleOpenDeleteDialog = (member: AuthMember) => {
    setDeleteTargetMember(member);
  };

  const handleDeleteMemberSuccess = () => {
    handleCloseDeleteDialog();
    refetch();
  };

  const handleCloseUpdateDialog = () => {
    setUpdateTargetMember(undefined);
  };

  const handleOpenUpdateDialog = (member: AuthMember) => {
    setUpdateTargetMember(member);
  };

  const handleUpdateMemberSuccess = () => {
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
                <Typography variant="h6">成員群組管理</Typography>
                <Stack direction="row" gap="1rem">
                  <Form onSubmit={handleSearch} disabled={isAuthMembersLoading}>
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
                    新增成員帳號
                  </Button>
                </Stack>
              </Stack>
              <AuthRoleFilterQuery
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
                <TableCell>部門</TableCell>
                <TableCell>帳號/姓名</TableCell>
                <TableCell colSpan={2}>群組名稱</TableCell>
                <TableCell align="right" colSpan={2}>
                  操作
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {isAuthMembersLoading && (
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
              {!isAuthMembersLoading && authMembersList.length === 0 && (
                <TableRow>
                  <TableCell colSpan={7}>
                    <Typography align="center" sx={{ py: 2 }}>
                      {GeneralMessage.EMPTY_MEMBER_LIST}
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {authMembersList.length > 0 &&
                authMembersList.map((authMember, idx) => (
                  <MemberManagementRow
                    key={`${authMember.memberAccount}-${idx}`}
                    index={currentPage * 10 - 10 + idx + 1}
                    authMember={authMember}
                    handleUpdateMember={handleOpenUpdateDialog}
                    handleDeleteMember={handleOpenDeleteDialog}
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
      <CreateMemberDialog
        isOpen={showCreateDialog}
        handleClose={handleCloseCreateDialog}
        handleSuccess={handleCreateMemberSuccess}
        systemCode={systemCode}
      />
      <DeleteMemberDialog
        isOpen={typeof deleteTargetMember !== 'undefined'}
        handleClose={handleCloseDeleteDialog}
        handleSuccess={handleDeleteMemberSuccess}
        authMember={deleteTargetMember as AuthMember}
        systemCode={systemCode}
      />
      {typeof updateTargetMember !== 'undefined' && (
        <UpdateMemberDialog
          isOpen={typeof updateTargetMember !== 'undefined'}
          handleClose={handleCloseUpdateDialog}
          handleSuccess={handleUpdateMemberSuccess}
          initialData={updateTargetMember as AuthMember}
          systemCode={systemCode}
        />
      )}
    </>
  );
};
