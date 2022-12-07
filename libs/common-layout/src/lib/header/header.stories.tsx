import type { ComponentMeta } from '@storybook/react';
import { Header } from './header';
import styled from '@emotion/styled';
import { Box } from '@sso-platform/common-ui';

const Story: ComponentMeta<typeof Header> = {
  component: Header,
  title: 'Pagination',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const General = () => (
  <StyledContainer>
    <Header
      title="Bankee SSO Portal"
      activeAccountName="Daniel"
      activeAccountLink="/actions-history"
    />
  </StyledContainer>
);
