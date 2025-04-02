import { createGlobalStyle } from 'styled-components';
import { flattenColorTokens } from './flattenColorTokens';
import { flattenTypographyTokens } from './flattenTypographyTokens';

export const GlobalStyles = createGlobalStyle`
  :root {
    ${Object.entries({ ...flattenColorTokens(), ...flattenTypographyTokens() })
      .map(([key, value]) => `${key}: ${value};`)
      .join('\n')}
  }
`;
