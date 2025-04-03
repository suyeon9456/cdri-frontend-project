import { ComponentProps, useCallback, useState } from 'react';
import SearchBox from '../../components/SearchBox';
import useSearchBooks from '../../hooks/useSearchBooks';
import { RequestGetBooks } from '../../types/getBooks';
import BookList from '../../components/BookList';
import styled from 'styled-components';

const Search = () => {
  const [previousSearches, setPreviousSearches] = useState<
    ComponentProps<typeof SearchBox>['previousSearches'] | []
  >([]);
  const [searchQuery, setSearchQuery] = useState<RequestGetBooks>({
    page: 1,
    query: '미움받을 용기',
    target: 'title',
  });

  const onChangePreviousSearch = useCallback((newSearch: { label: string; value: string }) => {
    setPreviousSearches((prev) => [...prev, newSearch]);
  }, []);
  const onSearch = useCallback(() => {
    // onChangePreviousSearch();
  }, []);
  const { books } = useSearchBooks({ query: searchQuery });

  if (!books?.documents || !books?.meta) return <></>;
  return (
    <Container>
      <SearchBox title="도서검색" previousSearches={previousSearches} />
      <BookList items={books?.documents} meta={books?.meta} metaText="도서 검색 결과" />
    </Container>
  );
};

export default Search;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
