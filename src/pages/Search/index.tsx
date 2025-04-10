import { lazy, Suspense, useCallback, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import useSearchBooks from '../../hooks/useSearchBooks';
import { RequestGetBooks } from '../../types/getBooks';
import styled from 'styled-components';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import LoadingIndicator from '../../components/common/LoadingIndicator';
import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import ErrorFallback from '../../components/common/ErrorFallback';
import { ErrorBoundary } from '../../components/common/ErrorBoundary';
import useSearchHistoryStore from '../../stores/useSearchHistoryStore';
const BookList = lazy(() => import('../../components/BookList'));

const Search = () => {
  const { reset: resetQuery } = useQueryErrorResetBoundary();
  const { historySearches, setHistory, removeHistory } = useSearchHistoryStore();
  const [searchQuery, setSearchQuery] = useState<{ [K in keyof RequestGetBooks]: string | number }>(
    {
      page: 1,
      query: '',
      target: 'title',
    },
  );

  const onChangePreviousSearch = useCallback((newSearch: { label: string; value: string }) => {
    setHistory(newSearch);
  }, []);
  const onDetailSearch = useCallback(
    (newSearchs: Array<Partial<{ [K in keyof RequestGetBooks]: string | number }>>) => {
      const newSearchObj = newSearchs.reduce((prev, acc) => ({ ...prev, ...acc }), {});
      setSearchQuery((prev) => {
        return { ...prev, ...newSearchObj };
      });
    },
    [],
  );
  const onSearch = useCallback((newSearch: { [K in keyof RequestGetBooks]: string | number }) => {
    setSearchQuery((prev) => {
      return { ...prev, ...newSearch };
    });
    if (Object.keys(newSearch)[0] === 'query') {
      onChangePreviousSearch({
        label: Object.values(newSearch)[0] as string,
        value: Object.values(newSearch)[0] as string,
      });
    }
  }, []);

  const onRemoveKeyword = useCallback((value: string) => {
    removeHistory(value);
  }, []);
  const { books, hasNextPage, isFetchingNextPage, fetchNextPage } = useSearchBooks({
    query: searchQuery,
  });

  const observerRef = useInfiniteScroll({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: () => fetchNextPage(),
    delay: 1000,
  });

  if (!books?.meta) return <></>;
  return (
    <Container>
      <SearchBox
        title="도서검색"
        previousSearches={historySearches}
        onSearch={onSearch}
        onDetailSearch={onDetailSearch}
        onRemoveKeyword={onRemoveKeyword}
      />
      <ErrorBoundary
        onReset={resetQuery}
        fallbackRender={({ reset }) => <ErrorFallback onReset={reset} />}
      >
        <Suspense fallback={<LoadingIndicator />}>
          <BookList
            items={books?.documents}
            meta={books?.meta}
            metaText="도서 검색 결과"
            emptyTitle="검색된 결과가 없습니다."
          />
        </Suspense>
      </ErrorBoundary>
      <div ref={observerRef} />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
