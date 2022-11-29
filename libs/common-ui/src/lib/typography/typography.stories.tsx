import type { ComponentMeta } from '@storybook/react';
import { Typography } from './typography';
import styled from '@emotion/styled';

const Story: ComponentMeta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  gap: 2rem;
`;

const StyledColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const General = () => (
  <StyledContainer>
    <StyledColumn>
      <Typography variant="h1">Heading 1</Typography>
      <Typography variant="h2">Heading 2</Typography>
      <Typography variant="h3">Heading 3</Typography>
      <Typography variant="h4">Heading 4</Typography>
      <Typography variant="h5">Heading 5</Typography>
      <Typography variant="h6">Heading 6</Typography>
      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>
      <Typography variant="body1">Body text 1</Typography>
      <Typography variant="body2">Body text 2</Typography>
      <Typography variant="caption">Caption text</Typography>
    </StyledColumn>
    <StyledColumn>
      <Typography variant="h1">標題一</Typography>
      <Typography variant="h2">標題二</Typography>
      <Typography variant="h3">標題三</Typography>
      <Typography variant="h4">標題四</Typography>
      <Typography variant="h5">標題五</Typography>
      <Typography variant="h6">標題六</Typography>
      <Typography variant="subtitle1">副標題一</Typography>
      <Typography variant="subtitle2">副標題二</Typography>
      <Typography variant="body1">一般文字一</Typography>
      <Typography variant="body2">一般文字二</Typography>
      <Typography variant="caption">說明文字</Typography>
    </StyledColumn>
  </StyledContainer>
);

// const Template: ComponentStory<typeof Typography> = (args) => (
//   <Typography {...args} />
// );

// export const h1 = Template.bind({});
// h1.args = {
//   variant: 'h1',
//   children: 'Heading 1',
// };
