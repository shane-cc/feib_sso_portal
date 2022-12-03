import type { ComponentMeta } from '@storybook/react';
import { Select } from './select';
import styled from '@emotion/styled';
import SearchIcon from '@mui/icons-material/Search';
import { COLORS } from '@sso-platform/theme';
import { Option } from './option';
import { ChangeEvent, useState } from 'react';

const Story: ComponentMeta<typeof Select> = {
  component: Select,
  title: 'Select',
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

const options = [
  {
    value: 'NTD',
    label: '新台幣',
  },
  {
    value: 'USD',
    label: '美金',
  },
  {
    value: 'JPY',
    label: '日幣',
  },
];

export const General = () => {
  const [currency, setCurrency] = useState<string>('NTD');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value);
  };

  return (
    <StyledContainer>
      <StyledRow>
        <Select
          name="outlineButton2"
          label="標題"
          placeholder="（未輸入文字）"
          value={currency}
          onChange={handleChange}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </StyledRow>
      <StyledRow>
        <Select
          name="outlineButton4"
          label="標題"
          placeholder="（驗證錯誤）"
          value={currency}
          onChange={handleChange}
          error
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Select
          name="outlineButton5"
          label="標題"
          placeholder="（disabled）"
          value={currency}
          onChange={handleChange}
          disabled
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </StyledRow>
    </StyledContainer>
  );
};

export const Others = () => {
  const [currency, setCurrency] = useState<string>('NTD');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCurrency(e.target.value);
  };
  return (
    <StyledContainer>
      <StyledRow>
        <Select
          name="outlineButton8"
          label="標題"
          placeholder="（左邊有icon）"
          value={currency}
          onChange={handleChange}
          startIcon={<SearchIcon htmlColor={COLORS.black} />}
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </StyledRow>
      <StyledRow>
        <Select
          name="outlineButton11"
          label="標題"
          placeholder="（含描述文字）"
          value={currency}
          onChange={handleChange}
          helperText="輸入規則或描述"
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
        <Select
          name="outlineButton12"
          label="標題"
          placeholder="（含描述文字且驗證錯誤）"
          value={currency}
          onChange={handleChange}
          helperText="輸入規則或描述"
          error
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </StyledRow>
      <StyledRow>
        <Select
          name="outlineButton"
          label="標題"
          placeholder="（small）"
          value={currency}
          onChange={handleChange}
          size="small"
        >
          {options.map((option) => (
            <Option key={option.value} value={option.value}>
              {option.label}
            </Option>
          ))}
        </Select>
      </StyledRow>
    </StyledContainer>
  );
};
