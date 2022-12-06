import type { ComponentMeta } from '@storybook/react';
import { Accordion } from './accordion';
import styled from '@emotion/styled';
import { AccordionSummary } from './accordion-summary';
import { Typography } from '../typography';
import { Button } from '../button';
import KeyboardArrowDownRoundedIcon from '@mui/icons-material/KeyboardArrowDownRounded';
import KeyboardArrowUpRoundedIcon from '@mui/icons-material/KeyboardArrowUpRounded';
import { SyntheticEvent, useState } from 'react';
import { AccordionDetails } from './accordion-details';
import { Chip } from '../chip';
import { Stack } from '../stack';

const Story: ComponentMeta<typeof Accordion> = {
  component: Accordion,
  title: 'Accordion',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const General = () => {
  const [expended, setExpended] = useState<boolean>(false);
  const chipList = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  const [checkedList, setCheckedList] = useState<string[]>([]);

  const handleClick = (id: string) => {
    setCheckedList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleChange = (_e: SyntheticEvent, isExpanded: boolean) => {
    setExpended(isExpanded);
  };

  const handleClear = () => {
    setCheckedList([]);
  };

  const handleSelectAll = () => {
    setCheckedList(chipList.map((item) => item.toString()));
  };

  return (
    <StyledContainer>
      <Accordion disableGutters onChange={handleChange}>
        <AccordionSummary
          sx={{
            display: 'flex',
            '.MuiAccordionSummary-content': {
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            },
          }}
        >
          <Typography variant="h6" fontWeight={500} margin={0}>
            權限篩選
          </Typography>
          <Button
            variant="text"
            color="info"
            endIcon={
              expended ? (
                <KeyboardArrowUpRoundedIcon color="info" />
              ) : (
                <KeyboardArrowDownRoundedIcon color="info" />
              )
            }
          >
            {expended ? '收闔條件篩選' : '展開條件篩選'}
          </Button>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            display: 'flex',
            gap: '1rem',
            flexDirection: 'column',
          }}
        >
          <Stack
            direction="row"
            gap=".5rem"
            width="100%"
            sx={{
              flexWrap: 'wrap',
            }}
          >
            {chipList.map((item) => (
              <Chip
                key={item}
                id={item.toString()}
                handleClick={handleClick}
                defaultCheckedStatus={checkedList.includes(item.toString())}
                label={`Chip ${item}`}
              />
            ))}
          </Stack>
          <Stack direction="row" justifyContent="space-between">
            <Stack direction="row" gap=".5rem">
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={handleSelectAll}
              >
                全選
              </Button>
              <Button
                variant="outlined"
                color="inherit"
                size="small"
                onClick={handleClear}
              >
                全部清除
              </Button>
            </Stack>
            <Button variant="contained" color="info">
              套用篩選
            </Button>
          </Stack>
        </AccordionDetails>
      </Accordion>
    </StyledContainer>
  );
};
