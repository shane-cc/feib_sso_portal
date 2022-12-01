import { TimelineDot as MuiTimelineDot } from '@mui/lab';
import type { TimelineDotProps as MuiTimelineDotProps } from '@mui/lab';
import { forwardRef } from 'react';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface TimelineDotProps extends MuiTimelineDotProps {}

export const TimelineDot = forwardRef<HTMLDivElement, TimelineDotProps>(
  (props, ref) => {
    return (
      <MuiTimelineDot {...props} ref={ref}>
        {props.children}
      </MuiTimelineDot>
    );
  }
);
