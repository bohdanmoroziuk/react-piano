import { useState, useMemo, useCallback, useEffect, useContext, createContext, ReactNode } from 'react';

export type Theme = 'white' | 'dark';

export interface ThemeContextValue {
  currentTheme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextValue>({} as ThemeContextValue);

export const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme) return theme;

  throw new Error('No theme provided');
};

export interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('white');

  const getNextTheme = (theme: Theme) => {
    return theme === 'white' ? 'dark' : 'white';
  };

  const toggleTheme = useCallback(() => {
    setCurrentTheme(getNextTheme);
  }, []);

  const value = useMemo(() => ({
    currentTheme,
    toggleTheme,
  }), [currentTheme, toggleTheme]);

  useEffect(() => {
    document.body.dataset.theme = currentTheme;
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};
