import type { ComponentMeta } from '@storybook/react';
import { Menu } from './menu';
import { MenuItem } from './menu-item';
import styled from '@emotion/styled';
import { Button } from '../button';
import { MouseEvent, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PolicyIcon from '@mui/icons-material/Policy';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { COLORS } from '@sso-platform/theme';

const Story: ComponentMeta<typeof Menu> = {
  component: Menu,
  title: 'Menu',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
`;

export const General = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const open = Boolean(anchorEl);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledContainer>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleClick}
        sx={{
          margin: '0 auto',
        }}
      >
        Open Menu
      </Button>
      <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem icon={<EditIcon />} text="Menu Item" />
        <MenuItem icon={<ManageAccountsIcon />} text="Menu Item" />
        <MenuItem icon={<PolicyIcon />} divider text="Menu Item" />
        <MenuItem
          icon={<DeleteForeverIcon htmlColor={COLORS.secondary.dark} />}
          text="Menu Item"
          color="secondary.dark"
        />
      </Menu>
    </StyledContainer>
  );
};
