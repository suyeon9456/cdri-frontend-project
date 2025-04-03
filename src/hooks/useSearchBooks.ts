import { queryOptions, useQuery } from '@tanstack/react-query';
import { RequestGetBooks, ResponseGetBooks } from '../types/getBooks';
import { searchBooksQueryKey } from '../utils/queryKeys';
import { getSearchBooks } from '../remotes';

const useSearchBooks = ({ query }: { query: RequestGetBooks }) => {
  const { data: books } = useQuery(getSearchBooksQueryKeys(query));
  return { books };
};

const getSearchBooksQueryKeys = (query: RequestGetBooks) =>
  queryOptions<ResponseGetBooks>({
    queryKey: searchBooksQueryKey.search(query),
    queryFn: () => getSearchBooks(),
  });

export default useSearchBooks;
