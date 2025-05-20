import { create } from 'zustand';
import { Appearance } from 'react-native';

type ThemeMode = 'light' | 'dark';

interface ThemeStore {
  mode: ThemeMode;
  setTheme: (mode: ThemeMode) => void;
  toggleTheme: () => void;
}

const defaultMode = Appearance.getColorScheme() ?? 'light';

export const useThemeStore = create<ThemeStore>((set, get) => ({
  mode: defaultMode,
  setTheme: (mode) => set({ mode }),
  toggleTheme: () =>
    set({ mode: get().mode === 'light' ? 'dark' : 'light' }),
}));
