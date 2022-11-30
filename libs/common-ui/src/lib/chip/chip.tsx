import { Chip as MuiChip } from '@mui/material';
import type { ChipProps as MuiChipProps } from '@mui/material';
import { useEffect, useState } from 'react';

export interface ChipProps extends MuiChipProps {
  handleClick?: (id: string) => void;
  handleDelete?: (id: string) => void;
  defaultCheckedStatus: boolean;
  id: string;
}

export const Chip: React.FC<ChipProps> = (props) => {
  const { handleDelete, handleClick, defaultCheckedStatus, id, ...rest } =
    props;
  const [isChecked, setIsChecked] = useState(false);

  const onClick = () => {
    // If it is a deletable chip, it cannot be unchecked by clicking again in case of miss clicking and deleting the chip.
    if (typeof handleDelete === 'function' && isChecked) return;
    typeof handleClick === 'function' && handleClick(id);
    setIsChecked((prev) => !prev);
  };

  const onDelete = () => {
    typeof handleDelete === 'function' && handleDelete(id);
  };

  useEffect(() => {
    setIsChecked(defaultCheckedStatus);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MuiChip
      variant="filled"
      color={isChecked ? 'primary' : 'default'}
      onClick={typeof handleClick === 'function' ? onClick : undefined}
      onDelete={typeof handleDelete === 'function' ? onDelete : undefined}
      {...rest}
    />
  );
};

export default Chip;
