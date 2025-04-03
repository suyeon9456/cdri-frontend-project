import { ComponentProps, useCallback, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import useSearchBooks from '../../hooks/useSearchBooks';
import { RequestGetBooks } from '../../types/getBooks';
import BookList from '../../components/BookList';
import styled from 'styled-components';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const Search = () => {
  const [previousSearches, setPreviousSearches] = useState<
    ComponentProps<typeof SearchBox>['previousSearches'] | []
  >([]);
  const [searchQuery, setSearchQuery] = useState<{ [K in keyof RequestGetBooks]: string | number }>(
    {
      page: 1,
      query: '',
      target: 'title',
    },
  );

  const onChangePreviousSearch = useCallback((newSearch: { label: string; value: string }) => {
    setPreviousSearches((prev) => [...prev, newSearch]);
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
    setPreviousSearches((prev) => {
      return prev.filter(({ value: v }) => v !== value);
    });
  }, []);
  const { books, hasNextPage, isFetchingNextPage, fetchNextPage } = useSearchBooks({
    query: searchQuery,
  });

  const observerRef = useInfiniteScroll({
    enabled: hasNextPage && !isFetchingNextPage,
    onIntersect: () => {
      fetchNextPage();
    },
  });

  if (!books?.documents || !books?.meta) return <></>;
  return (
    <Container>
      <SearchBox
        title="도서검색"
        previousSearches={previousSearches}
        onSearch={onSearch}
        onDetailSearch={onDetailSearch}
        onRemoveKeyword={onRemoveKeyword}
      />
      <BookList
        items={books?.documents}
        meta={books?.meta}
        metaText="도서 검색 결과"
        emptyTitle="검색된 결과가 없습니다."
      />
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
