import { TimelineItem as MuiTimelineItem } from '@mui/lab';
import type { TimelineItemProps as MuiTimelineItemProps } from '@mui/lab';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface TimelineItemProps extends MuiTimelineItemProps {
  dense?: boolean;
}

export const TimelineItem = forwardRef<HTMLLIElement, TimelineItemProps>(
  ({ dense = false, children, sx, ...rest }, ref) => {
    return (
      <MuiTimelineItem
        {...rest}
        ref={ref}
        sx={dense ? { ...sx, minHeight: 'auto' } : sx}
      >
        {children}
      </MuiTimelineItem>
    );
  }
);
