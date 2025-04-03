import { Select, SelectProps } from 'antd';
import styled from 'styled-components';
import { font } from '../../../styles/font';
import ArrowDownIcon from '../../../assets/arrow-down.svg?react';

type Props = Pick<SelectProps, 'options' | 'value' | 'onChange'>;
const CustomSelect = ({ options, value, onChange }: Props) => {
  return (
    <StyledSelect
      options={options}
      value={value}
      onChange={onChange}
      suffixIcon={<ArrowDownIcon width={10} color="#B1B8C0" />}
    />
  );
};

export default CustomSelect;

export const StyledSelect = styled(Select)`
  height: 36px;
  min-width: 100px;
  .ant-select-selector {
    border: 0 !important;
    border-bottom: 1px solid #d2d6da !important;
    border-radius: 0 !important;
    .ant-select-selection-item {
      ${font('body2Bold')}
    }
  }
  .ant-select-arrow {
    svg {
      color: #b1b8c0;
    }
  }
`;
