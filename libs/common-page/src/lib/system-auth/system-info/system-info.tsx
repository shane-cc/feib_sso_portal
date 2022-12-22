import {
  Box,
  Button,
  Card,
  CardContent,
  CardImage,
  CircularProgress,
  Divider,
  Stack,
  Typography,
} from '@sso-platform/common-ui';
import { System } from '@sso-platform/types';
import { useStyles } from './system-info.style';
import { UpdateSystemDialog } from '../../dashboard/update-system-dialog';
import { useState } from 'react';
import { UpdateImageDialog } from './update-image-dialog';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
interface SystemInfoProps {
  system: System | undefined;
}

export const SystemInfo: React.FC<SystemInfoProps> = ({ system }) => {
  const { classes } = useStyles();
  const [showUpdateDialog, setShowUpdateDialog] = useState<boolean>(false);
  const [showUpdateImageDialog, setShowUpdateImageDialog] =
    useState<boolean>(false);

  const handleShowUpdateImageDialog = () => {
    setShowUpdateImageDialog(true);
  };

  const handleCloseUpdateImageDialog = () => {
    setShowUpdateImageDialog(false);
  };

  const handleShowUpdateDialog = () => {
    setShowUpdateDialog(true);
  };

  const handleCloseUpdateDialog = () => {
    setShowUpdateDialog(false);
  };

  return (
    <Card className={classes.root}>
      {!system && (
        <Box className={classes.loading}>
          <CircularProgress />
        </Box>
      )}
      {system && (
        <>
          <CardImage
            image={system.systemImage}
            isEditable
            onEditClick={handleShowUpdateImageDialog}
          />
          <Divider />
          <CardContent>
            <Stack gap="12px">
              <Stack>
                <Typography variant="caption" color="text.secondary">
                  系統名稱
                </Typography>
                <Typography variant="subtitle2" color="text.primary">
                  {system.systemName}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="caption" color="text.secondary">
                  系統代碼
                </Typography>
                <Typography variant="subtitle2" color="text.primary">
                  {system.systemCode}
                </Typography>
              </Stack>
              <Stack>
                <Typography variant="caption" color="text.secondary">
                  URL
                </Typography>
                <Typography
                  variant="subtitle2"
                  color="text.primary"
                  className={classes.url}
                >
                  {system.systemUrl}
                </Typography>
              </Stack>
              <Button
                variant="contained"
                color="info"
                onClick={handleShowUpdateDialog}
              >
                編輯系統
              </Button>
            </Stack>
          </CardContent>
          <UpdateSystemDialog
            type="edit"
            isOpen={showUpdateDialog}
            handleClose={handleCloseUpdateDialog}
            initialData={system}
          />
          <UpdateImageDialog
            isOpen={showUpdateImageDialog}
            handleClose={handleCloseUpdateImageDialog}
            systemCode={system.systemCode}
            initialData={system.systemImage}
          />
        </>
      )}
    </Card>
  );
};
