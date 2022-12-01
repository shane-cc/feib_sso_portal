import { Timeline as MuiTimeline, timelineItemClasses } from '@mui/lab';
import type { TimelineProps as MuiTimelineProps } from '@mui/lab';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TimelineProps extends MuiTimelineProps {}

export const Timeline = forwardRef<HTMLUListElement, TimelineProps>(
  ({ sx, children, ...rest }, ref) => {
    return (
      <MuiTimeline
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        {...rest}
        ref={ref}
        sx={{
          ...sx,
          [`& .${timelineItemClasses.root}:before`]: {
            flex: 0,
            padding: 0,
          },
        }}
      >
        {children}
      </MuiTimeline>
    );
  }
);

export default Timeline;
