import type { ComponentMeta } from '@storybook/react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Dialog } from './dialog';
import { DialogTitle } from './dialog-title';
import { DialogContent } from './dialog-content';
import { DialogContentText } from './dialog-content-text';
import { DialogActions } from './dialog-actions';
import { ConfirmDialog } from './confirm-dialog';
import { Box } from '../box/box';
import { Button } from '../button';
import { ErrorDialog } from './error-dialog';
import { LoadingDialog } from './loading-dialog';

const Story: ComponentMeta<typeof Dialog> = {
  component: Dialog,
  title: 'Dialog',
};
export default Story;

const StyledContainer = styled(Box)`
  display: flex;
  gap: 2rem;
`;

export const General = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <StyledContainer>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle
          onClose={handleClose}
          icon={<DeleteForeverIcon color="secondary" />}
        >
          Dialog Title
        </DialogTitle>
        <DialogContent>
          <DialogContentText>This is the dialog content text</DialogContentText>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            omnis fugiat nesciunt! Tenetur veritatis animi molestiae, nulla
            dolorum officiis expedita sapiente consectetur recusandae adipisci
            maxime. Quos reprehenderit excepturi explicabo eos? Dolore incidunt
            ducimus nobis cupiditate laboriosam officia voluptatem possimus,
            suscipit eveniet rerum temporibus dolorum cumque labore hic, aliquam
            dolorem rem quibusdam, doloremque magni. Illum, necessitatibus?
            Saepe nisi tempore eum ratione!
          </DialogContentText>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            omnis fugiat nesciunt! Tenetur veritatis animi molestiae, nulla
            dolorum officiis expedita sapiente consectetur recusandae adipisci
            maxime. Quos reprehenderit excepturi explicabo eos? Dolore incidunt
            ducimus nobis cupiditate laboriosam officia voluptatem possimus,
            suscipit eveniet rerum temporibus dolorum cumque labore hic, aliquam
            dolorem rem quibusdam, doloremque magni. Illum, necessitatibus?
            Saepe nisi tempore eum ratione!
          </DialogContentText>
          <DialogContentText>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Velit
            omnis fugiat nesciunt! Tenetur veritatis animi molestiae, nulla
            dolorum officiis expedita sapiente consectetur recusandae adipisci
            maxime. Quos reprehenderit excepturi explicabo eos? Dolore incidunt
            ducimus nobis cupiditate laboriosam officia voluptatem possimus,
            suscipit eveniet rerum temporibus dolorum cumque labore hic, aliquam
            dolorem rem quibusdam, doloremque magni. Illum, necessitatibus?
            Saepe nisi tempore eum ratione!
          </DialogContentText>
        </DialogContent>
        <DialogActions divider>
          <Button variant="outlined" color="inherit" onClick={handleClose}>
            cancel
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </StyledContainer>
  );
};

export const DeleteConfirmation = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <StyledContainer>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
      <ConfirmDialog
        isOpen={isOpen}
        onClose={handleClose}
        title="確認刪除？"
        icon={<DeleteForeverIcon color="secondary" />}
        onCancel={handleClose}
        confirmText="刪除"
        confirmButtonProps={{
          color: 'secondary',
        }}
      >
        <DialogContentText>是否確認刪除以下權限？</DialogContentText>
        <DialogContentText
          sx={{
            fontWeight: 'bold',
            color: 'text.primary',
          }}
        >
          create_new_member （新建新的會員）
        </DialogContentText>
      </ConfirmDialog>
    </StyledContainer>
  );
};

export const ErrorMessage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <StyledContainer>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
      <ErrorDialog
        isOpen={isOpen}
        onClose={handleClose}
        message="匯入資料錯誤"
      />
    </StyledContainer>
  );
};

export const Loading = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let timer: NodeJS.Timeout | null = null;

  const handleOpen = () => {
    setIsOpen(true);
    timer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);
  };

  useEffect(
    () => () => {
      timer && clearTimeout(timer);
    },
    [timer]
  );

  return (
    <StyledContainer>
      <Button variant="outlined" color="primary" onClick={handleOpen}>
        Open Dialog
      </Button>
      <LoadingDialog isOpen={isOpen} />
    </StyledContainer>
  );
};
