import { Dialog, DialogContent } from '../dialog';
import { CircularProgress } from '../circular-progress';
import { Stack } from '../stack';
import { Typography } from '../typography';
import { ReactNode } from 'react';

interface LoadingDialogProps {
  isOpen: boolean;
  icon?: ReactNode;
  color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  message?: string;
}

export const LoadingDialog: React.FC<LoadingDialogProps> = ({
  isOpen,
  icon,
  color,
  message,
}) => {
  return (
    <Dialog open={isOpen} onClose={() => null} maxWidth="xs">
      <DialogContent>
        <Stack direction="column" alignItems="center" py=".5rem">
          {icon || <CircularProgress color={color || 'primary'} />}
          <Typography variant="h5" mt=".75rem" fontWeight="500">
            {message || 'Loading...'}
          </Typography>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};
