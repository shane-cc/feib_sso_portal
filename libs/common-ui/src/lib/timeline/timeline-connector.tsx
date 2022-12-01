import { TimelineConnector as MuiTimelineConnector } from '@mui/lab';
import type { TimelineConnectorProps as MuiTimelineConnectorProps } from '@mui/lab';
import { forwardRef } from 'react';
import { alpha } from '@mui/material';
import { COLORS } from '@sso-platform/theme';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TimelineConnectorProps extends MuiTimelineConnectorProps {}

export const TimelineConnector = forwardRef<
  HTMLDivElement,
  TimelineConnectorProps
>((props, ref) => {
  return (
    <MuiTimelineConnector
      {...props}
      ref={ref}
      sx={{ backgroundColor: alpha(COLORS.grey[400], 0.24) }}
    >
      {props.children}
    </MuiTimelineConnector>
  );
});
