import {
  Button,
  Chip,
  IconButton,
  Stack,
  TableCell,
  TableRow,
  Typography,
} from '@sso-platform/common-ui';
import { AuthRoleDetail } from '@sso-platform/types';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useState } from 'react';
import { makeStyles } from 'tss-react/mui';

interface RoleManagementRowProps {
  authRole: AuthRoleDetail;
  index: number;
  handleUpdateRole: (authRole: AuthRoleDetail) => void;
  handleDeleteRole: (authRole: AuthRoleDetail) => void;
}

const useStyles = makeStyles<{ expanded: boolean }>()(
  (_theme, { expanded }) => ({
    expanded: {
      '& *': {
        transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
        transformOrigin: 'top',
        transition: 'all 0.3s ease-in-out',
        height: expanded ? 'auto' : 0,
        padding: expanded ? '' : 0,
      },
      '& .MuiTableCell-root': {
        borderBottom: expanded ? '1px solid rgba(224, 224, 224, 1)' : 'none',
      },
    },
    icon: {
      transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
      transition: 'all 0.3s ease-in-out',
    },
  })
);

export const RoleManagementRow: React.FC<RoleManagementRowProps> = ({
  authRole,
  index,
  handleUpdateRole,
  handleDeleteRole,
}) => {
  const [expanded, setExpanded] = useState<boolean>(false);
  const { classes } = useStyles({ expanded });

  const handleToggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return (
    <>
      <TableRow hover={false}>
        <TableCell>{index}</TableCell>
        <TableCell>{authRole.authRoleCode}</TableCell>
        <TableCell>{authRole.authRoleName}</TableCell>
        <TableCell align="right" colSpan={2}>
          <Stack direction="row" gap=".5rem" justifyContent="flex-end">
            <IconButton
              color="info"
              variant="contained"
              onClick={handleToggleExpanded}
              size="small"
            >
              <KeyboardArrowDownIcon className={classes.icon} />
            </IconButton>
            <Button
              variant="soft"
              color="inherit"
              size="small"
              startIcon={<EditIcon />}
              onClick={() => handleUpdateRole(authRole)}
            >
              編輯
            </Button>
            <Button
              variant="soft"
              color="secondary"
              size="small"
              startIcon={<DeleteForeverIcon />}
              onClick={() => handleDeleteRole(authRole)}
            >
              刪除
            </Button>
          </Stack>
        </TableCell>
      </TableRow>
      <TableRow
        sx={{
          backgroundColor: (theme) => theme.palette.grey[200],
          transform: expanded ? 'scaleY(1)' : 'scaleY(0)',
          transformOrigin: 'top',
          transition: 'all 0.3s ease-in-out',
          height: expanded ? 'auto' : 0,
        }}
        className={classes.expanded}
      >
        <TableCell colSpan={5}>
          <Stack>
            <Typography variant="body2" mb="1rem">
              所屬功能授權碼
            </Typography>
            <Stack direction="row" flexWrap="wrap" gap=".5rem">
              {authRole.authRoleFunctions.map((authFunction, idx) => (
                <Chip
                  key={`${authFunction.authFunctionCode}-${idx}`}
                  id={authFunction.authFunctionCode}
                  defaultCheckedStatus={false}
                  color="primary"
                  label={`${authFunction.authFunctionCode} / ${authFunction.authFunctionName}`}
                />
              ))}
            </Stack>
          </Stack>
        </TableCell>
      </TableRow>
    </>
  );
};
