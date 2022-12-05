import type { ComponentMeta } from '@storybook/react';
import { Tabs } from './tabs';
import { Tab } from './tab';
import styled from '@emotion/styled';
import { SyntheticEvent, useState } from 'react';
import Paper from '../paper/paper';
import Typography from '../typography/typography';

const Story: ComponentMeta<typeof Tabs> = {
  component: Tabs,
  title: 'Tabs',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledRow = styled.div`
  display: flex;
  flex-direction: column;
`;

export const General = () => {
  const [currentTab, setCurrentTab] = useState<string>('權限管理');

  const handleChange = (_e: SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  };

  return (
    <StyledContainer>
      <StyledRow>
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab label="權限管理" value="權限管理" />
          <Tab label="角色管理" value="角色管理" />
          <Tab label="成員角色管理" value="成員角色管理" />
          <Tab label="管理員管理" value="管理員管理" />
        </Tabs>
        <Paper
          elevation={6}
          sx={{
            padding: '2rem',
          }}
        >
          <Typography variant="h6">
            Current Tab: <strong>{currentTab}</strong>
          </Typography>
        </Paper>
      </StyledRow>
      <StyledRow>
        <Tabs value={currentTab} onChange={handleChange}>
          <Tab label="權限管理" value="權限管理" />
          <Tab label="角色管理" value="角色管理" />
          <Tab label="成員角色管理" value="成員角色管理" />
        </Tabs>
        <Paper
          elevation={6}
          sx={{
            padding: '2rem',
          }}
        >
          <Typography variant="h6">
            Current Tab: <strong>{currentTab}</strong>
          </Typography>
        </Paper>
      </StyledRow>
    </StyledContainer>
  );
};
