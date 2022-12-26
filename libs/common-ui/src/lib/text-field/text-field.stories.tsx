import type { ComponentMeta } from '@storybook/react';
import { TextField } from './text-field';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import VisibilityIcon from '@mui/icons-material/Visibility';
import { COLORS } from '@sso-platform/theme';
import { FileInput } from './file-input';
import { useState } from 'react';
import { Typography } from '../typography';

const Story: ComponentMeta<typeof TextField> = {
  component: TextField,
  title: 'Text Field',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 90%;
  margin: 1rem auto;
`;

const StyledRow = styled.div`
  display: flex;
  gap: 1rem;
`;

export const General = () => (
  <StyledContainer>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="已輸入文字"
      />
    </StyledRow>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="已輸入文字"
        error
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        error
      />
    </StyledRow>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="已輸入文字"
        disabled
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        disabled
      />
    </StyledRow>
  </StyledContainer>
);

export const WithIcon = () => (
  <StyledContainer>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="左邊有icon，已輸入文字"
        startIcon={<SearchIcon htmlColor={COLORS.black} />}
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（左邊有icon，未輸入文字）"
        startIcon={<SearchIcon htmlColor={COLORS.black} />}
      />
    </StyledRow>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="右邊有icon，已輸入文字"
        endIcon={<VisibilityIcon htmlColor={COLORS.grey[700]} />}
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（右邊有icon，未輸入文字）"
        endIcon={<VisibilityIcon htmlColor={COLORS.grey[700]} />}
      />
    </StyledRow>
  </StyledContainer>
);

export const WithHelperText = () => (
  <StyledContainer>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="已輸入文字"
        helperText="輸入規則或描述"
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="已輸入文字"
        helperText="輸入規則或描述"
        error
      />
    </StyledRow>
  </StyledContainer>
);

export const Sizes = () => (
  <StyledContainer>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        size="medium"
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="已輸入文字"
        size="medium"
      />
    </StyledRow>
    <StyledRow>
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        size="small"
      />
      <TextField
        name="outlineButton"
        label="標題"
        placeholder="（未輸入文字）"
        value="已輸入文字"
        size="small"
      />
    </StyledRow>
  </StyledContainer>
);

export const FileUploadInputField = () => {
  const [file, setFile] = useState<File | null>(null);

  const handleChange = (file?: File) => {
    if (file) {
      setFile(file);
    }
  };

  return (
    <StyledContainer>
      <StyledRow>
        <FileInput
          name="image"
          label="上傳檔案"
          value=""
          onChange={handleChange}
        />
      </StyledRow>
      <StyledRow>
        <Typography>檔案名稱：{file?.name}</Typography>
      </StyledRow>
    </StyledContainer>
  );
};
