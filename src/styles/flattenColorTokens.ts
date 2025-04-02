import { colors } from './token/color';

export const flattenColorTokens = () => {
  const vars: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    vars[`--color-${key}`] = value;
  }

  return vars;
};
