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
  MenuItemData,
} from '@sso-platform/common-ui';
import { System } from '@sso-platform/types';
import { useState } from 'react';
import { UpdateSystemDialog } from '../update-system-dialog/update-system-dialog';
import { DeleteSystemDialog } from '../delete-system-dialog/delete-system-dialog';

/* eslint-disable-next-line */
export interface SystemCardProps {
  system: System;
  isSSOPortal: boolean;
}

export const SystemCard: React.FC<SystemCardProps> = ({
  system,
  isSSOPortal,
}) => {
  const [showUpdateDialog, setShowUpdateDialog] = useState<boolean>(false);
  const [showDeleteConfirmDialog, setShowDeleteConfirmDialog] =
    useState<boolean>(false);

  const handleUpdateDialog = () => {
    setShowUpdateDialog(true);
  };

  const handleCloseUpdateDialog = () => {
    setShowUpdateDialog(false);
  };

  const handleDeleteConfirmDialog = () => {
    setShowDeleteConfirmDialog(true);
  };

  const handleCloseDeleteConfirmDialog = () => {
    setShowDeleteConfirmDialog(false);
  };

  const menuItemList: MenuItemData[] = [
    {
      icon: <EditIcon />,
      text: '編輯系統',
      show: system.auth?.isEditable,
      onClick: handleUpdateDialog,
    },
    {
      icon: <EditIcon />,
      text: '編輯系統',
      show: system.auth?.isAuthEditable && isSSOPortal,
      onClick: () => null,
    },
    {
      icon: <ManageAccountsIcon />,
      text: '管理員管理',
      show: system.auth?.isAdminAssignable,
      onClick: () => null,
    },
    {
      icon: <PolicyIcon />,
      text: '查看權限',
      show: system.auth?.isViewable,
      onClick: () => null,
    },
    {
      icon: <DeleteForeverIcon htmlColor={COLORS.secondary.dark} />,
      text: '刪除系統',
      show: system.auth?.isDeletable,
      onClick: handleDeleteConfirmDialog,
      divider: true,
    },
  ];

  const handleClick = () => {
    // TODO: Go to the system page with access_token using new tab
    window.open(system.systemUrl, '_blank');
  };

  const handleDeleteSystem = async () => {
    // TODO: call api to delete system
    handleCloseDeleteConfirmDialog();
  };

  return (
    <>
      <Card>
        {system.auth?.isAuthEditable && (
          <CardAdvancedMenu menuItemList={menuItemList} />
        )}
        <CardImage
          image={system.systemImage || ''}
          sx={{
            width: '8rem',
            height: '8rem',
          }}
          isClickable
          onClick={handleClick}
        />
        <Divider />
        <CardTitle title={system.systemName} />
      </Card>
      {showUpdateDialog && (
        <UpdateSystemDialog
          type="edit"
          isOpen={showUpdateDialog}
          handleClose={handleCloseUpdateDialog}
          initialData={system}
        />
      )}
      {showDeleteConfirmDialog && (
        <DeleteSystemDialog
          isOpen={showDeleteConfirmDialog}
          handleClose={handleCloseDeleteConfirmDialog}
          handleConfirm={handleDeleteSystem}
          deleteTarget={`${system.systemCode} ${system.systemName}`}
        />
      )}
    </>
  );
};

export default SystemCard;
