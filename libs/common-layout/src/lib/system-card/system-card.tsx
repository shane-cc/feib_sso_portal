import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PolicyIcon from '@mui/icons-material/Policy';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { COLORS } from '@sso-platform/theme';
import {
  Card,
  CardAdvancedMenu,
  CardImage,
  CardTitle,
  Divider,
  MenuItem,
} from '@sso-platform/common-ui';
import { System } from '@sso-platform/types';

/* eslint-disable-next-line */
export interface SystemCardProps {
  system: System;
}

export const SystemCard: React.FC<SystemCardProps> = ({ system }) => {
  return (
    <Card>
      {system.auth.isAuthEditable && (
        <CardAdvancedMenu>
          {system.auth.isEditable && (
            <MenuItem icon={<EditIcon />} text="編輯系統" />
          )}
          {system.auth.isAuthEditable && (
            <MenuItem icon={<EditIcon />} text="編輯權限" />
          )}
          {system.auth.isAdminAssignable && (
            <MenuItem icon={<ManageAccountsIcon />} text="管理員管理" />
          )}
          {system.auth.isViewable && (
            <MenuItem icon={<PolicyIcon />} text="查看權限" />
          )}
          {system.auth.isDeletable && (
            <MenuItem
              icon={<DeleteForeverIcon htmlColor={COLORS.secondary.dark} />}
              divider
              text="刪除系統"
              color="secondary.dark"
            />
          )}
        </CardAdvancedMenu>
      )}
      <CardImage
        image={system.systemImage}
        sx={{
          width: '8rem',
          height: '8rem',
        }}
        isClickable
      />
      <Divider />
      <CardTitle title={system.systemName} />
    </Card>
  );
};

export default SystemCard;
