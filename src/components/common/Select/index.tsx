import { Select, SelectProps } from 'antd';
import styled from 'styled-components';
import ArrowDownIcon from '../../../assets/arrow-down.svg?react';
import { font } from '../../../styles/font';

type Props = Pick<SelectProps, 'options' | 'defaultValue' | 'onChange'>;

const CustomSelect = ({ options, defaultValue, onChange }: Props) => {
  return (
    <StyledSelect
      style={{ width: 100 }}
      defaultValue={defaultValue}
      onChange={onChange}
      options={options}
      dropdownStyle={{
        borderRadius: 'none',
      }}
      suffixIcon={<ArrowDownIcon width={10} color="#B1B8C0" />}
    />
  );
};

const StyledSelect = styled(Select)`
  & > .ant-select-selector {
    border-radius: 0;
    border: 0 !important;
    border-bottom: 1px solid #d2d6da !important;
    text-align: left;
    .ant-select-selection-item {
      ${font('body2Bold')}
      color: var(--color-text-primary);
    }
  }
  .ant-select-arrow {
    svg {
      color: #b1b8c0;
    }
  }
`;

export default CustomSelect;
