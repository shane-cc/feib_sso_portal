export const getPageQuery = (page: string | string[] | undefined): number =>
  page ? parseInt(page as string, 10) : 1;
