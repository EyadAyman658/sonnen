import { lightTheme } from './light';
import { darkTheme } from './dark';
import { spacing } from './spacing';
import { typography } from './typography';

export const themes = {
  light: { ...lightTheme, spacing, typography },
  dark: { ...darkTheme, spacing, typography },
};

export type ThemeType = typeof themes.light;
