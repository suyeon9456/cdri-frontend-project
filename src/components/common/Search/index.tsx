import { useCallback, useState } from 'react';
import SearchIcon from '../../../assets/icon/search.svg?react';
import CloseIcon from '../../../assets/icon/close.svg?react';
import {
  SearchContainer,
  SearchInput,
  SearchInputWrap,
  SelectList,
  SelectListItem,
} from './styles';

interface Props {
  placeholder: string;
  options: { value: string; label: string }[];
  onSearch: (value: string) => void;
  onRemoveKeyword: (value: string) => void;
}

const Search = ({ placeholder, options = [], onSearch, onRemoveKeyword }: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);

  const onChangeSearchInput = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }, []);

  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        onSearch?.(searchValue);
        setOpen((prev) => !prev);
      }
    },
    [searchValue],
  );

  const onChangeOpen = useCallback(() => {
    setOpen((prev) => !prev);
  }, []);

  return (
    <SearchContainer open={open}>
      <SearchInputWrap>
        <SearchIcon width={20} height={20} />
        <SearchInput
          value={searchValue}
          placeholder={placeholder}
          onChange={onChangeSearchInput}
          onKeyDown={onKeyDown}
          onClick={onChangeOpen}
        />
      </SearchInputWrap>
      <SelectList open={open}>
        {options.map(({ value, label }) => (
          <SelectListItem key={value}>
            <button className="search-list">{label}</button>
            <button onClick={() => onRemoveKeyword(value)}>
              <CloseIcon />
            </button>
          </SelectListItem>
        ))}
      </SelectList>
    </SearchContainer>
  );
};

export default Search;
