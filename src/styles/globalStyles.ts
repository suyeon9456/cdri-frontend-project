import { createGlobalStyle } from 'styled-components';
import { flattenColorTokens, flattenTypographyTokens } from './utils';

export const GlobalStyles = createGlobalStyle`
  :root {
    ${Object.entries({ ...flattenColorTokens(), ...flattenTypographyTokens() })
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}
  }
`;
