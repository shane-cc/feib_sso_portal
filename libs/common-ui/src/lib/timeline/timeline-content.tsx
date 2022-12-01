import { TimelineContent as MuiTimelineContent } from '@mui/lab';
import type { TimelineContentProps as MuiTimelineContentProps } from '@mui/lab';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TimelineContentProps extends MuiTimelineContentProps {}

export const TimelineContent = forwardRef<HTMLDivElement, TimelineContentProps>(
  (props, ref) => {
    return (
      <MuiTimelineContent {...props} ref={ref}>
        {props.children}
      </MuiTimelineContent>
    );
  }
);
