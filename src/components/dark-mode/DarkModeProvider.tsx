'use client';

import {
  ReactNode,
  useCallback,
  useEffect,
  useLayoutEffect,
  useState,
} from 'react';
import { darkModeContext } from './context';
import { DarkModeApplicator } from './DarkModeApplicator';

export function DarkModeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  useLayoutEffect(() => {
    const darkModeFromStorage = window.localStorage.getItem(
      'jl-portfolio--darkmode'
    );
    if (darkModeFromStorage != null) {
      setDarkMode(darkModeFromStorage === 'dark');
    } else {
      setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
  }, [setDarkMode]);

  const setDarkModeFromUser = useCallback(
    (newDarkMode: boolean) => {
      setDarkMode(newDarkMode);
      setUserToggled(true);
      window.localStorage.setItem(
        'jl-portfolio--darkmode',
        newDarkMode ? 'dark' : 'light'
      );
    },
    [setDarkMode]
  );

  return (
    <darkModeContext.Provider
      value={{ darkMode, setDarkMode: setDarkModeFromUser, userToggled }}
    >
      <DarkModeApplicator>{children}</DarkModeApplicator>
    </darkModeContext.Provider>
  );
}
