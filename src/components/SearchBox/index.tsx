import styled from 'styled-components';
import Search from '../common/Search';
import { font } from '../../styles/font';
import { ComponentProps } from 'react';
import SearchPopup from '../SearchPopup';
import Button from '../common/Button';

interface Props {
  title: string;
  previousSearches: ComponentProps<typeof Search>['options'];
  onSearch: ComponentProps<typeof Search>['onSearch'];
  onRemoveKeyword: ComponentProps<typeof Search>['onRemoveKeyword'];
}

const SearchBox = ({ title, previousSearches, onSearch, onRemoveKeyword }: Props) => {
  return (
    <SearchContainer>
      <Title>{title}</Title>
      <SearchWrap>
        <Search
          placeholder="검색어를 입력하세요"
          options={previousSearches}
          onSearch={onSearch}
          onRemoveKeyword={onRemoveKeyword}
        />
        <SearchPopup dropdownButton={<Button type="outline" label="상세검색" />} />
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
