import { Pagination as MuiPagination } from '@mui/material';
import type { PaginationProps as MuiPaginationProps } from '@mui/material';
import { forwardRef, useEffect, useState } from 'react';

/* eslint-disable-next-line */
export interface PaginationProps extends MuiPaginationProps {
  totalPage: number;
  currentPage: number;
  handlePagination: (page: number) => void;
}

export const Pagination = forwardRef<HTMLDivElement, PaginationProps>(
  (props, ref) => {
    const { totalPage, currentPage, handlePagination, ...rest } = props;
    const [page, setPage] = useState(currentPage);

    const handleChange = (
      _event: React.ChangeEvent<unknown>,
      value: number
    ) => {
      setPage(value);
      handlePagination(value);
    };

    useEffect(() => {
      setPage(currentPage);
    }, [currentPage]);

    return (
      <MuiPagination
        {...rest}
        ref={ref}
        count={props.totalPage}
        page={page}
        onChange={handleChange}
        color="primary"
        shape="rounded"
        showFirstButton
        showLastButton
      />
    );
  }
);

export default Pagination;
