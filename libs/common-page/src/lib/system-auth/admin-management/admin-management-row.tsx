import {
  Button,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@sso-platform/common-ui';
import { AuthAccount } from '@sso-platform/types';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

interface AdminManagementRowProps {
  authAdmin: AuthAccount;
  index: number;
  handleDeleteAdmin: (authAdmin: AuthAccount) => void;
}

export const AdminManagementRow: React.FC<AdminManagementRowProps> = ({
  authAdmin,
  index,
  handleDeleteAdmin,
}) => {
  return (
    <TableRow hover={false}>
      <TableCell>{index}</TableCell>
      <TableCell>{authAdmin.memberDepartment}</TableCell>
      <TableCell>
        {authAdmin.memberAccount} / {authAdmin.memberName}
      </TableCell>
      <TableCell align="right" colSpan={2}>
        <Stack direction="row" gap=".5rem" justifyContent="flex-end">
          <Button
            variant="soft"
            color="secondary"
            size="small"
            startIcon={<DeleteForeverIcon />}
            onClick={() => handleDeleteAdmin(authAdmin)}
          >
            刪除
          </Button>
        </Stack>
      </TableCell>
    </TableRow>
  );
};
