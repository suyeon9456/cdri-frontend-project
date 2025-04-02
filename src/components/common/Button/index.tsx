import React from 'react';
import styled, { css } from 'styled-components';
import { font } from '../../../styles/font';

type ButtonType = 'primary' | 'lightGray' | 'outline';

interface Props {
  type: ButtonType;
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  htmlType?: 'submit' | 'button';
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
}

const Button = ({
  type,
  onClick,
  label,
  disabled = false,
  htmlType = 'button',
  icon: Icon,
}: Props) => {
  return (
    <StyledButton $type={type} onClick={(e) => onClick?.(e)} disabled={disabled} type={htmlType}>
      {label}
      {Icon && <Icon width={16} height={16} />}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ $type: ButtonType }>`
  border-radius: 8px;
  padding: 13px 20px;
  ${font('caption')}
  border: none;
  ${({ $type }) =>
    $type === 'primary' &&
    css`
      background: var(--color-primary);
      color: var(--color-white);
    `}
  ${({ $type }) =>
    $type === 'lightGray' &&
    css`
      color: var(--color-text-secondary);
      background: var(--color-light-gray);
    `}
  ${({ $type }) =>
    $type === 'outline' &&
    css`
      color: var(--color-text-sub-title);
      background: var(--color-white);
      padding: 5px 10px;
      border: 1px solid var(--color-text-sub-title);
    `}
`;
export default Button;
