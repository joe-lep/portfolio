'use client';

import { NavigationSectionKey } from '@/types/navigation';
import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChangeEvent,
  MouseEvent,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
} from 'react';
import sectionNavigationContext from '../section-navigation/sectionNavigationContext';
import { navigationContext } from './navigationContext';

export interface NavigationLinkProps {
  sectionId?: NavigationSectionKey;
  activePathPrefix?: string;
  children: ReactNode;
}

export default function NavigationLink({
  sectionId,
  activePathPrefix,
  children,
}: NavigationLinkProps) {
  const pathName = usePathname();
  const { activeSection } = useContext(sectionNavigationContext);
  const { closeMobileMenu } = useContext(navigationContext);

  const { navigateToSectionIfRegistered } = useContext(
    sectionNavigationContext
  );

  const isLinkActive = useMemo(
    () =>
      (activePathPrefix && pathName.startsWith(activePathPrefix)) ||
      activeSection == sectionId,
    [activePathPrefix, pathName, activeSection, sectionId]
  );

  const handleClick = useCallback(
    (event: MouseEvent<HTMLAnchorElement>) => {
      closeMobileMenu();

      if (sectionId && navigateToSectionIfRegistered(sectionId)) {
        event.preventDefault();
      }
    },
    [closeMobileMenu, sectionId, navigateToSectionIfRegistered]
  );

  return (
    <Link
      href={sectionId ? `/#${sectionId}` : '/'}
      className={clsx({ 'text-sky-300': isLinkActive })}
      onClick={handleClick}
    >
      {children}
    </Link>
  );
}
