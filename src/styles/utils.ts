import { colors } from './token/color';

export const flattenColorTokens = () => {
  const vars: Record<string, string> = {};

  for (const [key, value] of Object.entries(colors)) {
    vars[`--color-${key}`] = value;
  }

  return vars;
};

import { typography } from './token/typograpy';

export const flattenTypographyTokens = () => {
  const vars: Record<string, string> = {};

  for (const [name, props] of Object.entries(typography)) {
    for (const [prop, value] of Object.entries(props)) {
      vars[`--font-${name}-${prop.replace(/([A-Z])/g, '-$1').toLowerCase()}`] = String(value);
    }
  }

  return vars;
};
