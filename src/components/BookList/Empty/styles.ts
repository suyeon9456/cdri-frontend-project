import styled from 'styled-components';
import { font } from '../../../styles/font';

export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  margin-top: 100px;

  ${font('caption')}
  color: var(--color-text-secondary);
`;

export const EmptyImage = styled.img`
  width: 80px;
  height: 80px;
`;
