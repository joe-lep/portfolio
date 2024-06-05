'use client';

import { ChangeEvent, useCallback, useState } from 'react';
import DarkModeBG from '@/svg/nightmode-bg.svg';
import clsx from 'clsx';
import { useDarkModeContext } from './useDarkModeContext';

export function DarkModeToggle() {
  const { darkMode, setDarkMode } = useDarkModeContext();

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      setDarkMode(event.target.checked);
    },
    [setDarkMode]
  );

  return (
    <label
      className={clsx(
        'flex cursor-pointer select-none flex-row items-center gap-4',
        { checked: darkMode }
      )}
    >
      <div id="dark-mode-label" className="md:max-xl:collapse">
        Dark Mode
      </div>
      <div className="relative flex flex-row">
        <input
          type="checkbox"
          aria-labelledby="dark-mode-label"
          onChange={handleChange}
          className="appearance-none"
          checked={darkMode}
        />
        <div className="darkmode-toggle-capsule">
          <DarkModeBG
            width={96}
            height={32}
            className="darkmode-toggle-capsule-bg transition-transform"
          />
        </div>
        <div className="darkmode-toggle-switch bg-neutral-50 shadow-inner transition-transform" />
      </div>
    </label>
  );
}
