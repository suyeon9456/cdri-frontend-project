import styled from 'styled-components';
import Search from '../common/Search';
import { font } from '../../styles/font';
import { ComponentProps, useCallback } from 'react';
import SearchPopup from '../SearchPopup';
import Button from '../common/Button';
import { RequestGetBooks } from '../../types/getBooks';

interface Props {
  title: string;
  previousSearches: ComponentProps<typeof Search>['options'];
  onSearch: (query: { [K in keyof RequestGetBooks]: string | number }) => void;
  onDetailSearch: (
    newSearchs: Array<Partial<{ [K in keyof RequestGetBooks]: string | number }>>,
  ) => void;
  onRemoveKeyword: ComponentProps<typeof Search>['onRemoveKeyword'];
}

const SearchBox = ({
  title,
  previousSearches,
  onSearch,
  onRemoveKeyword,
  onDetailSearch,
}: Props) => {
  const onChangeDetailSearch = useCallback(
    ({ target: targetValue, query: queryValue }: Pick<RequestGetBooks, 'target' | 'query'>) => {
      onDetailSearch([{ target: targetValue }, { query: queryValue }]);
    },
    [],
  );

  const onQuerySearch = useCallback((value: string) => {
    if (value === '') return;
    onSearch({ query: value.trim() });
  }, []);

  return (
    <SearchContainer>
      <Title>{title}</Title>
      <SearchWrap>
        <Search
          placeholder="검색어를 입력하세요"
          options={previousSearches}
          onSearch={onQuerySearch}
          onRemoveKeyword={onRemoveKeyword}
          onClickKeyword={onQuerySearch}
          autoFocus
        />
        <SearchPopup
          dropdownButton={<Button type="outline" label="상세검색" />}
          onSearch={onChangeDetailSearch}
        />
      </SearchWrap>
    </SearchContainer>
  );
};

export default SearchBox;

export const SearchContainer = styled.div`
  text-align: left;
`;
export const Title = styled.h2`
  ${font('Title2')}
  text-align: left;
`;

export const SearchWrap = styled.div`
  display: inline-flex;
  gap: 20px;
  align-items: center;
`;
