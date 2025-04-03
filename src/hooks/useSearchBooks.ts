import { queryOptions, useQuery } from '@tanstack/react-query';
import { RequestGetBooks, ResponseGetBooks } from '../types/getBooks';
import { searchBooksQueryKey } from '../utils/queryKeys';
import { getSearchBooks } from '../remotes';

const useSearchBooks = ({
  query,
}: {
  query: { [K in keyof RequestGetBooks]: string | number };
}) => {
  const { data: books } = useQuery(getSearchBooksQueryKeys(query));
  return { books };
};

const getSearchBooksQueryKeys = (query: { [K in keyof RequestGetBooks]: string | number }) =>
  queryOptions<ResponseGetBooks>({
    queryKey: searchBooksQueryKey.search(query),
    queryFn: () => getSearchBooks(query),
  });

export default useSearchBooks;
