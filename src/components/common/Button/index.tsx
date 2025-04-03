import React from 'react';
import styled, { css } from 'styled-components';
import { font } from '../../../styles/font';

type ButtonType = 'primary' | 'lightGray' | 'outline';

interface Props {
  type: ButtonType;
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  htmlType?: 'submit' | 'button';
  icon?: React.ReactNode;
  block?: boolean;
  href?: string;
}

const Button = ({
  type,
  onClick,
  label,
  disabled = false,
  htmlType = 'button',
  icon: Icon,
  block = false,
  href,
  ...props
}: Props) => {
  if (href != null) {
    return (
      <StyledLink href={href} block={block} $type={type} type={htmlType} target="_blank" {...props}>
        {label}
      </StyledLink>
    );
  }
  return (
    <StyledButton
      block={block}
      $type={type}
      onClick={(e) => onClick?.(e)}
      disabled={disabled}
      type={htmlType}
      {...props}
    >
      {label}
      {Icon}
    </StyledButton>
  );
};

const StyledLink = styled.a<{ $type: ButtonType; block: boolean }>`
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
      padding: 10px;
      border: 1px solid var(--color-text-sub-title);
    `}
		${({ block }) =>
    block === true &&
    css`
      display: block;
      width: 100%;
    `}
`;
const StyledButton = styled.button<{ $type: ButtonType; block: boolean }>`
  border-radius: 8px;
  padding: 13px 20px;
  ${font('caption')}
  border: none;
  display: flex;
  align-items: center;
  gap: 5px;
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
      padding: 10px;
      border: 1px solid var(--color-text-sub-title);
    `}
		${({ block }) =>
    block === true &&
    css`
      display: block;
      width: 100%;
    `}
`;
export default Button;
