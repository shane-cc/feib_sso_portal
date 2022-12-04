import type { ComponentMeta } from '@storybook/react';
import { Breadcrumbs } from './breadcrumbs';
import styled from '@emotion/styled';
import { BreadcrumbItem } from './breadcrumb-item';

const Story: ComponentMeta<typeof Breadcrumbs> = {
  component: Breadcrumbs,
  title: 'Breadcrumbs',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const General = () => (
  <StyledContainer>
    <Breadcrumbs>
      <BreadcrumbItem label="Root" href="/" />
      <BreadcrumbItem label="Current" href="/" isCurrentPage />
    </Breadcrumbs>
    <Breadcrumbs>
      <BreadcrumbItem label="Root" href="/" />
      <BreadcrumbItem label="Link" href="/" />
      <BreadcrumbItem label="Current" href="/" isCurrentPage />
    </Breadcrumbs>
    <Breadcrumbs>
      <BreadcrumbItem label="Root" href="/" />
      <BreadcrumbItem label="Link" href="/" />
      <BreadcrumbItem label="Link" href="/" />
      <BreadcrumbItem label="Current" href="/" isCurrentPage />
    </Breadcrumbs>
  </StyledContainer>
);
