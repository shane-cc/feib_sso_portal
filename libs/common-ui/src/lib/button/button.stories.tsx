import styled from '@emotion/styled';
import { useTheme } from '@mui/material/styles';
import type { ComponentMeta } from '@storybook/react';
import Typography from '../typography/typography';
import { Button } from './button';
import EditIcon from '@mui/icons-material/Edit';

const Story: ComponentMeta<typeof Button> = {
  component: Button,
  title: 'Button',
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
        <Button variant="contained" color="primary" size="large">
          Large
        </Button>
        <Button variant="contained" color="primary">
          Medium
        </Button>
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button variant="contained" color="primary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          SECONDARY
        </StyledTypography>
        <Button variant="contained" color="secondary" size="large">
          Large
        </Button>
        <Button variant="contained" color="secondary">
          Medium
        </Button>
        <Button variant="contained" color="secondary" size="small">
          Small
        </Button>
        <Button variant="contained" color="secondary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          INFO
        </StyledTypography>
        <Button variant="contained" color="info" size="large">
          Large
        </Button>
        <Button variant="contained" color="info">
          Medium
        </Button>
        <Button variant="contained" color="info" size="small">
          Small
        </Button>
        <Button variant="contained" color="info" disabled>
          Disabled
        </Button>
      </StyledContainer>
    </>
  );
};

export const Outlined = () => {
  const theme = useTheme();
  return (
    <>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          PRIMARY
        </StyledTypography>
        <Button variant="outlined" color="primary" size="large">
          Large
        </Button>
        <Button variant="outlined" color="primary">
          Medium
        </Button>
        <Button variant="outlined" color="primary" size="small">
          Small
        </Button>
        <Button variant="outlined" color="primary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          SECONDARY
        </StyledTypography>
        <Button variant="outlined" color="secondary" size="large">
          Large
        </Button>
        <Button variant="outlined" color="secondary">
          Medium
        </Button>
        <Button variant="outlined" color="secondary" size="small">
          Small
        </Button>
        <Button variant="outlined" color="secondary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          INFO
        </StyledTypography>
        <Button variant="outlined" color="info" size="large">
          Large
        </Button>
        <Button variant="outlined" color="info">
          Medium
        </Button>
        <Button variant="outlined" color="info" size="small">
          Small
        </Button>
        <Button variant="outlined" color="info" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          DEFAULT
        </StyledTypography>
        <Button variant="outlined" color="inherit" size="large">
          Large
        </Button>
        <Button variant="outlined" color="inherit">
          Medium
        </Button>
        <Button variant="outlined" color="inherit" size="small">
          Small
        </Button>
        <Button variant="outlined" color="inherit" disabled>
          Disabled
        </Button>
      </StyledContainer>
    </>
  );
};

export const Text = () => {
  const theme = useTheme();
  return (
    <>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          PRIMARY
        </StyledTypography>
        <Button variant="text" color="primary" size="large">
          Large
        </Button>
        <Button variant="text" color="primary">
          Medium
        </Button>
        <Button variant="text" color="primary" size="small">
          Small
        </Button>
        <Button variant="text" color="primary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          SECONDARY
        </StyledTypography>
        <Button variant="text" color="secondary" size="large">
          Large
        </Button>
        <Button variant="text" color="secondary">
          Medium
        </Button>
        <Button variant="text" color="secondary" size="small">
          Small
        </Button>
        <Button variant="text" color="secondary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          INFO
        </StyledTypography>
        <Button variant="text" color="info" size="large">
          Large
        </Button>
        <Button variant="text" color="info">
          Medium
        </Button>
        <Button variant="text" color="info" size="small">
          Small
        </Button>
        <Button variant="text" color="info" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          DEFAULT
        </StyledTypography>
        <Button variant="text" color="inherit" size="large">
          Large
        </Button>
        <Button variant="text" color="inherit">
          Medium
        </Button>
        <Button variant="text" color="inherit" size="small">
          Small
        </Button>
        <Button variant="text" color="inherit" disabled>
          Disabled
        </Button>
      </StyledContainer>
    </>
  );
};

export const Soft = () => {
  const theme = useTheme();
  return (
    <>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          PRIMARY
        </StyledTypography>
        <Button variant="soft" color="primary" size="large">
          Large
        </Button>
        <Button variant="soft" color="primary">
          Medium
        </Button>
        <Button variant="soft" color="primary" size="small">
          Small
        </Button>
        <Button variant="soft" color="primary" startIcon={<EditIcon />}>
          Start Icon
        </Button>
        <Button variant="soft" color="primary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          SECONDARY
        </StyledTypography>
        <Button variant="soft" color="secondary" size="large">
          Large
        </Button>
        <Button variant="soft" color="secondary">
          Medium
        </Button>
        <Button variant="soft" color="secondary" size="small">
          Small
        </Button>
        <Button variant="soft" color="secondary" startIcon={<EditIcon />}>
          Start Icon
        </Button>
        <Button variant="soft" color="secondary" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          INFO
        </StyledTypography>
        <Button variant="soft" color="info" size="large">
          Large
        </Button>
        <Button variant="soft" color="info">
          Medium
        </Button>
        <Button variant="soft" color="info" size="small">
          Small
        </Button>
        <Button variant="soft" color="info" startIcon={<EditIcon />}>
          Start Icon
        </Button>
        <Button variant="soft" color="info" disabled>
          Disabled
        </Button>
      </StyledContainer>
      <StyledContainer>
        <StyledTypography variant="caption" color={theme.palette.grey[600]}>
          DEFAULT
        </StyledTypography>
        <Button variant="soft" color="inherit" size="large">
          Large
        </Button>
        <Button variant="soft" color="inherit">
          Medium
        </Button>
        <Button variant="soft" color="inherit" size="small">
          Small
        </Button>
        <Button variant="soft" color="inherit" startIcon={<EditIcon />}>
          Start Icon
        </Button>
        <Button variant="soft" color="inherit" disabled>
          Disabled
        </Button>
      </StyledContainer>
    </>
  );
};
