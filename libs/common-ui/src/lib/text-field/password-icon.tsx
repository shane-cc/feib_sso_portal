import { InputIcon } from './input-icon';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export interface PasswordIconProps {
  showPassword: boolean;
  togglePassword: () => void;
}

export const PasswordIcon: React.FC<PasswordIconProps> = ({
  showPassword,
  togglePassword,
}) => {
  return (
    <InputIcon
      position="end"
      onClick={togglePassword}
      sx={{ cursor: 'pointer' }}
    >
      {showPassword ? (
        <VisibilityOutlinedIcon />
      ) : (
        <VisibilityOffOutlinedIcon />
      )}
    </InputIcon>
  );
};
