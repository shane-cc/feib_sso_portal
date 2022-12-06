import type { ComponentMeta } from '@storybook/react';
import { Timeline } from './timeline';
import { TimelineItem } from './timeline-item';
import { TimelineSeparator } from './timeline-separator';
import { TimelineConnector } from './timeline-connector';
import { TimelineDot } from './timeline-dot';
import { TimelineContent } from './timeline-content';
import styled from '@emotion/styled';
import { Typography } from '../typography';
import { Paper } from '../paper';
import { COLORS } from '@sso-platform/theme';

const Story: ComponentMeta<typeof Timeline> = {
  component: Timeline,
  title: 'Timeline',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: fit-content;
`;

type TimelineData = {
  platform: string;
  action: string;
  date: string;
  type: 'primary' | 'secondary';
};

const timelineData: TimelineData[] = [
  {
    platform: 'SSO Portal',
    action: 'Login',
    date: '2022.11.05 19:32:49',
    type: 'secondary',
  },
  {
    platform: 'SSO Portal',
    action: 'Logout',
    date: '2022.11.05 09:36:56',
    type: 'primary',
  },
  {
    platform: 'AP0 Admin Panel',
    action: 'Logout',
    date: '2022.11.05 09:04:13',
    type: 'primary',
  },
  {
    platform: 'AP0 Admin Panel',
    action: 'Login',
    date: '2022.11.04 19:32:49',
    type: 'secondary',
  },
  {
    platform: 'SSO Portal',
    action: 'Login',
    date: '2022.11.04 09:03:12',
    type: 'secondary',
  },
];

export const WithConnector = () => {
  return (
    <StyledContainer>
      <Paper
        sx={{
          padding: '1rem',
        }}
      >
        <Timeline>
          {timelineData.map(({ platform, action, date, type }, idx) => (
            <TimelineItem key={idx}>
              <TimelineSeparator>
                <TimelineDot color={type} />
                {idx < timelineData.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>
                <Typography variant="body2">
                  {platform} | {action}
                </Typography>
                <Typography
                  variant="caption"
                  color={COLORS.primary.greyish}
                  sx={{ display: 'block' }}
                >
                  {date}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </StyledContainer>
  );
};

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const WithoutConnector = () => {
  return (
    <StyledContainer>
      <Paper
        sx={{
          padding: '0 1rem',
        }}
      >
        <Timeline>
          {timelineData.map(({ platform, action, date, type }, idx) => (
            <TimelineItem key={idx} dense>
              <TimelineSeparator>
                <TimelineDot color={type} />
              </TimelineSeparator>
              <TimelineContent>
                <StyledRow>
                  <Typography variant="body2">
                    {platform} | {action}
                  </Typography>
                  <Typography
                    variant="caption"
                    color={COLORS.primary.greyish}
                    sx={{ display: 'block' }}
                  >
                    {date}
                  </Typography>
                </StyledRow>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </StyledContainer>
  );
};
