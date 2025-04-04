import { useSuspenseInfiniteQuery } from '@tanstack/react-query';
import { RequestGetBooks } from '../types/getBooks';
import { searchBooksQueryKey } from '../utils/queryKeys';
import { getSearchBooks } from '../remotes';

const useSearchBooks = ({
  query,
}: {
  query: { [K in keyof RequestGetBooks]: string | number };
}) => {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } = useSuspenseInfiniteQuery({
    queryKey: searchBooksQueryKey.search(query),
    queryFn: ({ pageParam = 1 }) => getSearchBooks({ ...query, page: pageParam }),
    getNextPageParam: (lastPage, allPages) => {
      const isEnd = lastPage.meta?.is_end;
      if (isEnd) return undefined;
      return allPages.length + 1;
    },
    initialPageParam: 1,
  });

  const books = {
    documents: data?.pages.flatMap((page) => page.documents) ?? [],
    meta: data?.pages[0]?.meta,
  };

  return { books, fetchNextPage, hasNextPage, isFetchingNextPage };
};

export default useSearchBooks;
