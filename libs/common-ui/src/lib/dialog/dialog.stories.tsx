import type { ComponentMeta } from '@storybook/react';
import { Dialog } from './dialog';
import { DialogTitle } from './dialog-title';
import { DialogContent } from './dialog-content';
import { DialogContentText } from './dialog-content-text';
import { DialogActions } from './dialog-actions';
import styled from '@emotion/styled';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Button from '../button/button';
import { useState } from 'react';

const Story: ComponentMeta<typeof Dialog> = {
  component: Dialog,
  title: 'Dialog',
};
export default Story;

const StyledContainer = styled.div`
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
