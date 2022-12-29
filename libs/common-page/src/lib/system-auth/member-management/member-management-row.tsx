import {
  Button,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@sso-platform/common-ui';
import { AuthMember } from '@sso-platform/types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface MemberManagementRowProps {
  authMember: AuthMember;
  index: number;
  handleUpdateMember: (authMember: AuthMember) => void;
  handleDeleteMember: (authMember: AuthMember) => void;
}

export const MemberManagementRow: React.FC<MemberManagementRowProps> = ({
  authMember,
  index,
  handleUpdateMember,
  handleDeleteMember,
}) => {
  return (
    <TableRow hover={false}>
      <TableCell>{index}</TableCell>
      <TableCell>{authMember.memberDepartment}</TableCell>
      <TableCell>
        {authMember.memberAccount} / {authMember.memberName}
      </TableCell>
      <TableCell colSpan={2}>
        <Stack direction="row" gap=".5rem">
          {authMember.memberRoles?.map((authRole, idx) => (
            <Typography key={`${authRole.authRoleCode}-${index}`}>
              {authRole.authRoleName}
              {idx < authMember.memberRoles.length - 1 ? ', ' : ''}
            </Typography>
          ))}
        </Stack>
      </TableCell>
      <TableCell align="right" colSpan={2}>
        <Stack direction="row" gap=".5rem" justifyContent="flex-end">
          <Button
            variant="soft"
            color="inherit"
            size="small"
            startIcon={<EditIcon />}
            onClick={() => handleUpdateMember(authMember)}
          >
            編輯
          </Button>
          <Button
            variant="soft"
            color="secondary"
            size="small"
            startIcon={<DeleteForeverIcon />}
            onClick={() => handleDeleteMember(authMember)}
          >
            刪除
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
};
