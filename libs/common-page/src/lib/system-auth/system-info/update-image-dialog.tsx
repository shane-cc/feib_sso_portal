import {
  Button,
  CardImage,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FileInput,
  Stack,
  Typography,
} from '@sso-platform/common-ui';
import { useMutation, useQueryClient } from 'react-query';
import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import {
  ErrorMessage,
  QueryCacheKey,
  updateSystemImage,
} from '@sso-platform/shared';
import { ApiError } from '@sso-platform/types';

interface UpdatImageDialogProps {
  isOpen: boolean;
  handleClose: () => void;
  initialData: string;
  systemCode: string;
}

export const UpdateImageDialog: React.FC<UpdatImageDialogProps> = ({
  isOpen,
  handleClose,
  initialData,
  systemCode,
}) => {
  const queryClient = useQueryClient();
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>(initialData);
  const [updateImageError, setUpdateImageError] = useState<string>();

  const onReset = () => {
    setImage(undefined);
    setImagePreview(initialData);
    URL.revokeObjectURL(imagePreview);
    setUpdateImageError(undefined);
  };

  const onClose = () => {
    onReset();
    handleClose();
  };

  const onSuccess = () => {
    queryClient.invalidateQueries([QueryCacheKey.SYSTEM_LIST, systemCode]);
    onClose();
  };

  const onError = (error: ApiError) => {
    setUpdateImageError(
      `${error.message} ${ErrorMessage.UPLOAD_SYSTEM_IMAGE_FAILED}`
    );
  };

  const updateMutation = useMutation(
    () =>
      updateSystemImage({
        image: image as File,
        systemCode,
      }),
    {
      onSuccess,
      onError,
    }
  );

  const onConfirm = () => {
    updateMutation.mutate();
  };

  const handleFileUpload = (file?: File) => {
    if (file) {
      URL.revokeObjectURL(imagePreview);
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  return (
    <Dialog open={isOpen} onClose={onClose} maxWidth="sm">
      <DialogTitle onClose={onClose} icon={<EditIcon />}>
        編輯圖片
      </DialogTitle>
      <DialogContent>
        {updateImageError && (
          <Typography
            color="secondary"
            sx={{
              textAlign: 'center',
              paddingTop: '.5rem',
              paddingBottom: '1.5rem',
            }}
          >
            {updateImageError}
          </Typography>
        )}
        <Stack my=".5rem" gap="1rem">
          <CardImage image={imagePreview} />
          {!image && <Typography align="center">請選擇要上傳的圖片</Typography>}
          <FileInput
            label="上傳圖片"
            name="image"
            value={image ? image.name : ''}
            onChange={handleFileUpload}
            accept="image/*"
          />
        </Stack>
      </DialogContent>
      <DialogActions divider>
        <Button variant="outlined" color="inherit" onClick={onClose}>
          取消
        </Button>
        <Button variant="outlined" color="inherit" onClick={onReset}>
          重設
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={onConfirm}
          disabled={typeof image === 'undefined'}
        >
          儲存
        </Button>
      </DialogActions>
    </Dialog>
  );
};
