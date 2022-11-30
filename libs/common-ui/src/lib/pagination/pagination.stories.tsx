import type { ComponentMeta } from '@storybook/react';
import { Pagination } from './pagination';
import styled from '@emotion/styled';

const Story: ComponentMeta<typeof Pagination> = {
  component: Pagination,
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
    <Pagination currentPage={1} handlePagination={() => null} totalPage={10} />
    <Pagination currentPage={4} handlePagination={() => null} totalPage={10} />
  </StyledContainer>
);
