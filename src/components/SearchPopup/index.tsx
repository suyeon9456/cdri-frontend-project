import { Dropdown, MenuProps } from 'antd';
import { ComponentProps, ReactNode, useCallback, useState } from 'react';
import styled from 'styled-components';
import Button from '../common/Button';
import Input from '../common/Input';
import Select from '../common/Select';

interface Props {
  dropdownButton?: ReactNode;
  onSearch?: ComponentProps<typeof Button>['onClick'];
}

const items: MenuProps['items'] = [
  {
    label: 'Submit and continue',
    key: '1',
  },
  {
    label: 'Submit and continue',
    key: '2',
  },
  {
    label: 'Submit and continue',
    key: '3',
  },
];

const searchTargetOptions: ComponentProps<typeof Select>['options'] = [
  { value: 'title', label: '제목' },
  { value: 'person', label: '저자명' },
  { value: 'publisher', label: '출판사' },
];

type SearchTargetValue = (typeof searchTargetOptions)[number]['value'];

const SearchPopup = ({ dropdownButton, onSearch }: Props) => {
  const [query, setQuery] = useState<string>('');
  const [target, setTarget] = useState<SearchTargetValue>(searchTargetOptions[0].value);

  const onChangeQuery = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
  }, []);

  const onChangeTarget = useCallback((value: SearchTargetValue) => {
    setTarget(value);
  }, []);

  return (
    <SearchDrop
      menu={{ items }}
      placement="bottomCenter"
      dropdownRender={() => (
        <SearchDropdownPanel>
          <div className="search-inputs">
            <Select options={searchTargetOptions} value={target} onChange={onChangeTarget} />
            <Input value={query} onChange={onChangeQuery} />
          </div>
          <Button type="primary" label="검색하기" block />
        </SearchDropdownPanel>
      )}
    >
      {dropdownButton ?? <Button type="outline" label="상세검색" onClick={onSearch} />}
    </SearchDrop>
  );
};

export default SearchPopup;

export const SearchDrop = styled(Dropdown)``;

export const SearchDropdownPanel = styled.div`
  width: 359px;
  height: 160px;
  border-radius: 8px;
  box-shadow: 0px 4px 14px 6px #97979726;
  margin-top: 10px;
  padding: 30px 20px;
  box-sizing: border-box;
  .search-inputs {
    display: flex;
    gap: 5px;
    margin-bottom: 20px;
  }
`;
