import { css } from 'styled-components';

export const font = (name: string) => css`
  font-size: var(--font-${name}-font-size);
  font-weight: var(--font-${name}-weight);
  line-height: var(--font-${name}-line-height);
`;
