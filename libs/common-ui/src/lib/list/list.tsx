import { List as MuiList } from '@mui/material';
import type { ListProps as MuiListProps } from '@mui/material';
import { forwardRef } from 'react';

/* eslint-disable-next-line */
export interface ListProps extends MuiListProps {}

export const List = forwardRef<HTMLUListElement, ListProps>((props, ref) => {
  return (
    <MuiList {...props} ref={ref}>
      {props.children}
    </MuiList>
  );
});

export default List;
