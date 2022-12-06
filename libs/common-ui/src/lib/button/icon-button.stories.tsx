import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import type { ComponentMeta } from '@storybook/react';
import { Typography } from '../typography';
import { IconButton } from './icon-button';
import EditIcon from '@mui/icons-material/Edit';

const Story: ComponentMeta<typeof IconButton> = {
  component: IconButton,
  title: 'IconButton',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2rem;
  align-items: center;
`;

const StyledTypography = styled(Typography)`
  width: 6rem;
`;

export const Contained = () => {
  const theme = useTheme();
  return (
    <>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          PRIMARY
        </StyledTypography>
        <IconButton color="primary" size="large">
          <EditIcon />
        </IconButton>
        <IconButton color="primary">
          <EditIcon />
        </IconButton>
        <IconButton color="primary" size="small">
          <EditIcon />
        </IconButton>
        <IconButton color="primary" disabled>
          <EditIcon />
        </IconButton>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          SECONDARY
        </StyledTypography>
        <IconButton color="secondary" size="large">
          <EditIcon />
        </IconButton>
        <IconButton color="secondary">
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" size="small">
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" disabled>
          <EditIcon />
        </IconButton>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          INFO
        </StyledTypography>
        <IconButton color="info" size="large">
          <EditIcon />
        </IconButton>
        <IconButton color="info">
          <EditIcon />
        </IconButton>
        <IconButton color="info" size="small">
          <EditIcon />
        </IconButton>
        <IconButton color="info" disabled>
          <EditIcon />
        </IconButton>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          DEFAULT
        </StyledTypography>
        <IconButton color="inherit" size="large">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit" size="small">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit" disabled>
          <EditIcon />
        </IconButton>
      </StyledContainer>
    </>
  );
};
