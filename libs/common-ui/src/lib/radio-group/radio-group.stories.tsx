import type { ComponentMeta } from '@storybook/react';
import { RadioGroup } from './radio-group';
import styled from '@emotion/styled';
import { Typography } from '../typography';

const Story: ComponentMeta<typeof RadioGroup> = {
  component: RadioGroup,
  title: 'RadioGroup',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledTypography = styled(Typography)`
  margin-top: 0.25rem;
  width: 10rem;
`;

export const General = () => (
  <StyledContainer>
    <StyledRow>
      <StyledTypography variant="h6" className="text">
        General
      </StyledTypography>
      <RadioGroup options={[{ value: 'Medium', label: 'Medium' }]} />
    </StyledRow>
    <StyledRow>
      <StyledTypography variant="h6" className="text">
        Default checked
      </StyledTypography>
      <RadioGroup
        value="Medium"
        options={[
          { value: 'Small', label: 'Small' },
          { value: 'Medium', label: 'Medium' },
          { value: 'Large', label: 'Large' },
        ]}
      />
    </StyledRow>
    <StyledRow>
      <StyledTypography variant="h6" className="text">
        Disabled
      </StyledTypography>
      <RadioGroup
        options={[
          { value: 'Small', label: 'Small' },
          { value: 'Medium', label: 'Medium', disabled: true },
          { value: 'Large', label: 'Large', disabled: true },
        ]}
      />
    </StyledRow>
  </StyledContainer>
);
