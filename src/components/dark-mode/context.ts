import { createContext } from 'react';

export const darkModeContext = createContext({
  darkMode: false,
  userToggled: false,
  setDarkMode: (value: boolean) => {},
});
