import styled from '@emotion/styled';
import {
  Paper,
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
  Typography,
} from '@sso-platform/common-ui';
import { COLORS } from '@sso-platform/theme';
import { IndividualActionHistory } from '@sso-platform/types';

/* eslint-disable-next-line */
export interface ActionHistorySummaryProps {
  actionHistoryList: IndividualActionHistory[];
}

export const ActionHistorySummary: React.FC<ActionHistorySummaryProps> = ({
  actionHistoryList: timelineData,
}) => {
  return (
    <Timeline>
      {timelineData.map(({ platform, action, date, type }, idx) => (
        <TimelineItem key={idx}>
          <TimelineSeparator>
            <TimelineDot color={type || 'primary'} />
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
  );
};

export default ActionHistorySummary;
