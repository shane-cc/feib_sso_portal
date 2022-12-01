import { TimelineSeparator as MuiTimelineSeparator } from '@mui/lab';
import type { TimelineSeparatorProps as MuiTimelineSeparatorProps } from '@mui/lab';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TimelineSeparatorProps extends MuiTimelineSeparatorProps {}

export const TimelineSeparator = forwardRef<
  HTMLDivElement,
  TimelineSeparatorProps
>((props, ref) => {
  return (
    <MuiTimelineSeparator {...props} ref={ref}>
      {props.children}
    </MuiTimelineSeparator>
  );
});
