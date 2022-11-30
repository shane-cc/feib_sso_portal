import type { ComponentMeta } from '@storybook/react';
import { Chip } from './chip';
import styled from '@emotion/styled';
import Typography from '../typography/typography';
import { useState } from 'react';
import Button from '../button/button';

const Story: ComponentMeta<typeof Chip> = {
  component: Chip,
  title: 'Chip',
};
export default Story;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const StyledTypography = styled(Typography)`
  width: 6rem;
`;

export const General = () => {
  const chipList = [1, 2, 3, 4, 5];
  const [checkedList, setCheckedList] = useState<string[]>([]);
  const [deletableChipList, setDeletableChipList] = useState<number[]>([
    ...chipList,
  ]);
  const [deletableCheckedList, setDeletableCheckedList] = useState<string[]>([
    '1',
    '2',
  ]);

  const handleClick = (id: string, type: 'deletable' | 'undeletable') => {
    if (type === 'undeletable') {
      setCheckedList((prev) => {
        if (prev.includes(id)) {
          return prev.filter((item) => item !== id);
        }
        return [...prev, id];
      });
      return;
    }
    setDeletableCheckedList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  };

  const handleDelete = (id: string) => {
    if (deletableCheckedList.includes(id)) {
      setDeletableCheckedList((prev) => prev.filter((item) => item !== id));
      setDeletableChipList((prev) =>
        prev.filter((item) => item !== Number(id))
      );
    }
  };

  return (
    <StyledContainer>
      <StyledRow>
        <StyledTypography variant="caption" color="GrayText">
          UNDELETABLE
        </StyledTypography>
        {chipList.map((item) => (
          <Chip
            key={item}
            id={item.toString()}
            handleClick={(id: string) => handleClick(id, 'undeletable')}
            defaultCheckedStatus={checkedList.includes(item.toString())}
            label={`Chip ${item}`}
          />
        ))}
        <Chip id="" label="Disabled" defaultCheckedStatus disabled />
      </StyledRow>
      <StyledRow>
        <StyledTypography variant="caption" color="GrayText">
          DELETABLE
        </StyledTypography>
        {deletableChipList.map((item) => (
          <Chip
            key={item}
            id={item.toString()}
            handleClick={(id: string) => handleClick(id, 'deletable')}
            handleDelete={
              item < 3 || deletableCheckedList.includes(item.toString())
                ? handleDelete
                : undefined
            }
            defaultCheckedStatus={item < 3}
            label={`Chip ${item}`}
          />
        ))}
        <Button
          variant="outlined"
          color="primary"
          sx={{
            marginLeft: '2rem',
          }}
          onClick={() => setDeletableChipList([...chipList])}
        >
          Reset deletable list
        </Button>
      </StyledRow>
    </StyledContainer>
  );
};
