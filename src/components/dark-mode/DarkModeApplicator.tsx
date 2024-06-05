'use client';

import { ReactNode } from 'react';
import { useDarkModeContext } from './useDarkModeContext';
import clsx from 'clsx';

interface DarkModeApplicatorProps {
  children: ReactNode;
}

export function DarkModeApplicator({ children }: DarkModeApplicatorProps) {
  const { darkMode, userToggled } = useDarkModeContext();

  return (
    <div className={clsx({ dark: darkMode })}>
      <div
        className={clsx(
          'flex min-h-screen flex-col bg-neutral-50 dark:bg-slate-900 dark:text-white',
          { 'transition-colors': userToggled }
        )}
      >
        {children}
      </div>
    </div>
  );
}
