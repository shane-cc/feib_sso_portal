import type { ComponentMeta } from '@storybook/react';
import { CircularProgress } from './circular-progress';
import styled from '@emotion/styled';
import Typography from '../typography/typography';

const Story: ComponentMeta<typeof CircularProgress> = {
  component: CircularProgress,
  title: 'Circular Progress',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const StyledTypography = styled(Typography)`
  width: 6rem;
`;

export const General = () => (
  <StyledContainer>
    <StyledRow>
      <StyledTypography variant="caption" color="GrayText">
        PRIMARY
      </StyledTypography>
      <CircularProgress />
    </StyledRow>
    <StyledRow>
      <StyledTypography variant="caption" color="GrayText">
        SECONDARY
      </StyledTypography>
      <CircularProgress color="secondary" />
    </StyledRow>
    <StyledRow>
      <StyledTypography variant="caption" color="GrayText">
        INFO
      </StyledTypography>
      <CircularProgress color="info" />
    </StyledRow>
    <StyledRow>
      <StyledTypography variant="caption" color="GrayText">
        DEFAULT
      </StyledTypography>
      <CircularProgress color="inherit" />
    </StyledRow>
  </StyledContainer>
);
