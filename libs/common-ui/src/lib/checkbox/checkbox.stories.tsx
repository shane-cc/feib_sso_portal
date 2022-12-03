import type { ComponentMeta } from '@storybook/react';
import { Checkbox } from './checkbox';
import styled from '@emotion/styled';

const Story: ComponentMeta<typeof Checkbox> = {
  component: Checkbox,
  title: 'Checkbox',
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

export const General = () => (
  <StyledContainer>
    <StyledRow>
      <Checkbox defaultChecked />
      <Checkbox defaultChecked label="Checked" />
      <Checkbox label="Checked" disabled />
      <Checkbox defaultChecked label="Checked" disabled />
    </StyledRow>
  </StyledContainer>
);
