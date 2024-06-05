'use client';

import { useCallback, useState } from 'react';
import HeaderBrand from './HeaderBrand';
import Navigation from './Navigation';
import clsx from 'clsx';
import { DarkModeToggle } from '../dark-mode';
import { navigationContext } from './navigationContext';

export default function TopBar() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [transitioning, setTransitioning] = useState<boolean>(false);

  const toggleShowMenu = useCallback(() => {
    setShowMenu((prevState) => !prevState);
    setTransitioning(true);
  }, [setShowMenu, setTransitioning]);

  const handleTransitionEnd = useCallback(() => {
    setTransitioning(false);
  }, [setTransitioning]);

  const closeMobileMenu = useCallback(() => {
    if (showMenu) {
      setShowMenu(false);
      setTransitioning(true);
    }
  }, [showMenu, setShowMenu, setTransitioning]);

  return (
    <div className="sticky top-0 flex flex-row items-center justify-between gap-2 bg-gradient-to-b from-violet-900 to-violet-950 px-4 py-4 text-white shadow-lg">
      <div>
        <HeaderBrand />
      </div>
      <div
        className={clsx(
          'absolute left-0 right-0 top-0 h-screen bg-black transition-opacity md:hidden',
          { 'opacity-0': !showMenu },
          { 'opacity-50': showMenu },
          { '-translate-y-full': !(showMenu || transitioning) }
        )}
      />
      <div
        className={clsx(
          'flex flex-1 max-md:absolute max-md:left-0 max-md:right-0 max-md:top-0 max-md:max-h-screen max-md:flex-col max-md:divide-y max-md:overflow-auto max-md:bg-indigo-950 max-md:p-2 max-md:pb-16 max-md:shadow-2xl md:items-center md:justify-center',
          { 'max-md:hide-nav': !showMenu },
          { 'transition-transform': transitioning }
        )}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="flex flex-1 justify-center max-md:items-stretch md:items-center">
          <navigationContext.Provider value={{ closeMobileMenu }}>
            <Navigation />
          </navigationContext.Provider>
        </div>
        <div className="flex flex-row justify-center max-md:p-16">
          <DarkModeToggle />
        </div>
      </div>
      <div className="top-50% absolute right-2 border-2 border-white p-2 md:hidden">
        <button type="button" onClick={toggleShowMenu}>
          Menu
        </button>
      </div>
    </div>
  );
}
