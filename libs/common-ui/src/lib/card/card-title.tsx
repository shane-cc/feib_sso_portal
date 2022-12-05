import { forwardRef } from 'react';
import { Stack, StackProps } from '../stack/stack';
import { Typography } from '../typography/typography';
import { CardContent } from './card-content';

export interface CardTitleProps extends StackProps {
  title: string;
}

export const CardTitle = forwardRef<HTMLDivElement, CardTitleProps>(
  ({ title, ...rest }, ref) => {
    return (
      <CardContent
        sx={{
          padding: '12px',
        }}
      >
        <Stack alignItems="center" {...rest} ref={ref}>
          <Typography variant="h6" color="text.primary">
            {title}
          </Typography>
        </Stack>
      </CardContent>
    );
  }
);
