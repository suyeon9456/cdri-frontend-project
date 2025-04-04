import { useCallback, useRef, useState } from 'react';
import SearchIcon from '../../../assets/icon/search.svg?react';
import CloseIcon from '../../../assets/icon/close.svg?react';
import {
  SearchContainer,
  SearchInput,
  SearchInputWrap,
  SearchListWrap,
  SelectList,
  SelectListItem,
} from './styles';
import { useOutsideClick } from '../../../hooks/useOutSideClick';

interface Props {
  placeholder: string;
  options: { value: string; label: string }[];
  onSearch: (value: string) => void;
  onRemoveKeyword: (value: string) => void;
  onClickKeyword: (value: string) => void;
  autoFocus?: boolean;
}

const Search = ({
  placeholder,
  options = [],
  autoFocus = false,
  onSearch,
  onRemoveKeyword,
  onClickKeyword,
}: Props) => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [open, setOpen] = useState<boolean>(false);
  const selectListRef = useRef<HTMLUListElement | null>(null);

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

  useOutsideClick<HTMLUListElement | null>(selectListRef, () => {
    if (open === false) return;
    setOpen(false);
  });

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
          autoFocus={autoFocus}
        />
      </SearchInputWrap>
      <SearchListWrap open={open}>
        <SelectList ref={selectListRef}>
          {options.map(({ value, label }) => (
            <SelectListItem key={value}>
              <button className="search-list" onClick={() => onClickKeyword(value)}>
                {label}
              </button>
              <button onClick={() => onRemoveKeyword(value)}>
                <CloseIcon />
              </button>
            </SelectListItem>
          ))}
        </SelectList>
      </SearchListWrap>
    </SearchContainer>
  );
};

export default Search;
