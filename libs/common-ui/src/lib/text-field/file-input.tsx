import { ChangeEvent, forwardRef, useRef, useState } from 'react';
import TextField from './text-field';
import { Button } from '../button';

export type FileInputProps = {
  label: string;
  value: string;
  name: string;
  onChange: (file?: File) => void;
  helperText?: string;
  error?: boolean;
  accept?: string;
  className?: string;
  sx?: Record<string, string | number>;
};

export const FileInput = forwardRef<HTMLDivElement, FileInputProps>(
  ({ name, value, label, onChange, accept, ...rest }, ref) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [fileName, setFileName] = useState<string>(value);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      onChange(file);
      setFileName(file?.name || '');
      fileInputRef.current?.value && (fileInputRef.current.value = '');
    };

    const handleClick = () => {
      fileInputRef.current?.click();
    };

    return (
      <>
        <TextField
          name={name}
          label={label}
          value={fileName}
          {...rest}
          onClick={handleClick}
          endIcon={
            <Button variant="soft" color="primary">
              選擇檔案
            </Button>
          }
        />
        <input
          name={name}
          hidden
          ref={fileInputRef}
          type="file"
          accept={accept || '*'}
          onChange={handleChange}
        />
      </>
    );
  }
);
