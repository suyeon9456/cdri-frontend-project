import styled, { css } from 'styled-components';
import { font } from '../../../styles/font';

export const SearchContainer = styled.div<{ open: boolean }>`
  min-height: 50px;
  height: auto;
  width: 480px;
  background: var(--color-light-gray);
  border-radius: 24px;
  padding: 14px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ open }) =>
    open === true &&
    css`
      border-radius: 24px 24px 0 0;
    `}
  position: relative;
  height: 50px;
  transition: border-radius 0.3s ease;
`;

export const SearchInputWrap = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  align-items: center;
  height: 30px;
`;

export const SearchInput = styled.input`
  height: 100%;
  flex: 1;
  background: transparent;
  border: 0;
  ${font('caption')}
  color: var(--color-text-sub-title);
`;

export const SearchListWrap = styled.div<{ open: boolean }>`
  width: 480px;
  background: var(--color-light-gray);
  position: absolute;
  top: 50px;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
  border-radius: 0 0 24px 24px;
  height: ${({ open }) => (open ? 'auto' : '0')};
  overflow: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
  background: var(--color-light-gray);
`;

export const SelectList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: auto;
  width: 422px;
  right: 10px;
  z-index: 2;
`;
export const SelectListItem = styled.li`
  height: 24px;
  padding: 4px 0;
  text-align: left;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;
  padding-left: 8px;

  * {
    ${font('caption')}
    color: var(--color-text-sub-title);
    background: transparent;
  }

  .search-list {
    flex: 1;
    text-align: left;
  }
`;
