import { RequestGetBooks } from '../types/getBooks';

export const createQueryKeyFactory = <T extends string>(base: T) => ({
  base: [base] as const,
  search: (querys: RequestGetBooks) => [base, querys.query, querys.target, querys.sort] as const,
});

export const searchBooksQueryKey = createQueryKeyFactory('search');
