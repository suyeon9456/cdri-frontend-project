import styled from 'styled-components';
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
  height: ${({ open }) => (open ? 'auto' : '50px')};
  position: relative;
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

export const SelectList = styled.ul<{ open: boolean }>`
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  margin-left: auto;
  width: 422px;
  height: ${({ open }) => (open ? 'auto' : '0')};
  overflow: hidden;
  opacity: ${({ open }) => (open ? 1 : 0)};
  top: 100%;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
`;
export const SelectListItem = styled.li`
  height: 24px;
  padding: 4px 0;
  text-align: left;
  gap: 10px;
  display: flex;
  justify-content: space-between;
  padding-right: 10px;

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
