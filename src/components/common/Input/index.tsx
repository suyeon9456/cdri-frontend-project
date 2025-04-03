import styled from 'styled-components';
import { font } from '../../../styles/font';

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
}

const Input = ({ value, placeholder, onChange }: Props) => {
  return <StyledInput placeholder={placeholder} value={value} onChange={onChange} />;
};

const StyledInput = styled.input`
  height: 36px;
  padding: 0;
  border: 0;
  ${font('caption')}
  border-bottom: 1px solid var(--color-primary);
  color: var(--color-text-sub-title);
  width: 100%;
  border-radius: 0;
  padding: 0 10px;
  box-sizing: border-box;
`;

export default Input;
