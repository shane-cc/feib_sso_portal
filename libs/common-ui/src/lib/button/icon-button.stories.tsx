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

export const Outlined = () => {
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

export const Contained = () => {
  const theme = useTheme();
  return (
    <>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          PRIMARY
        </StyledTypography>
        <IconButton color="primary" size="large" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="primary" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="primary" size="small" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="primary" disabled variant="contained">
          <EditIcon />
        </IconButton>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          SECONDARY
        </StyledTypography>
        <IconButton color="secondary" size="large" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" size="small" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="secondary" disabled variant="contained">
          <EditIcon />
        </IconButton>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          INFO
        </StyledTypography>
        <IconButton color="info" size="large" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="info" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="info" size="small" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="info" disabled variant="contained">
          <EditIcon />
        </IconButton>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          DEFAULT
        </StyledTypography>
        <IconButton color="inherit" size="large" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit" size="small" variant="contained">
          <EditIcon />
        </IconButton>
        <IconButton color="inherit" disabled variant="contained">
          <EditIcon />
        </IconButton>
      </StyledContainer>
    </>
  );
};
