import { Timeline as MuiTimeline } from '@mui/lab';
import type { TimelineProps as MuiTimelineProps } from '@mui/lab';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TimelineProps extends MuiTimelineProps {}

export const Timeline = forwardRef<HTMLUListElement, TimelineProps>(
  (props, ref) => {
    return (
      <MuiTimeline
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
        {...props}
        ref={ref}
      >
        {props.children}
      </MuiTimeline>
    );
  }
);

export default Timeline;
