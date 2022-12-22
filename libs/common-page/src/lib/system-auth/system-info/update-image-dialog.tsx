import {
  Button,
  CardImage,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Stack,
  TextField,
  Typography,
} from '@sso-platform/common-ui';
import { useMutation, useQueryClient } from 'react-query';
import EditIcon from '@mui/icons-material/Edit';
import { ChangeEvent, useRef, useState } from 'react';
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
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [image, setImage] = useState<File>();
  const [imagePreview, setImagePreview] = useState<string>(initialData);
  const [imageError, setImageError] = useState<string>();
  const [updateImageError, setUpdateImageError] = useState<string>();

  const onReset = () => {
    setImage(undefined);
    setImageError(undefined);
    setImagePreview(initialData);
    URL.revokeObjectURL(imagePreview);
    setUpdateImageError(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
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

  const onUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.length) {
      URL.revokeObjectURL(imagePreview);
      setImage(e.target.files[0]);
      setImagePreview(URL.createObjectURL(e.target.files[0]));
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
          <TextField
            label="上傳圖片"
            error={typeof imageError === 'string' && imageError.length > 0}
            helperText={imageError}
            value={image ? image.name : ''}
            onClick={onUploadClick}
          />
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            onChange={handleFileUpload}
            hidden
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
        <Button variant="contained" color="primary" onClick={onConfirm}>
          儲存
        </Button>
      </DialogActions>
    </Dialog>
  );
};
