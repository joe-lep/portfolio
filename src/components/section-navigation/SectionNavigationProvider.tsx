'use client';

import {
  ReactNode,
  RefObject,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import sectionNavigationContext from './sectionNavigationContext';

export interface SectionNavigationProviderProps {
  children: ReactNode;
}

const ACTIVE_SECTION_TOP_OFFSET = 80;

const sectionTopCompare = (
  section1: number | undefined,
  section2: number | undefined
) => {
  if (section2 == undefined) {
    return false;
  }

  if (section1 == undefined) {
    return true;
  }

  if (section1 > ACTIVE_SECTION_TOP_OFFSET) {
    if (section2 > ACTIVE_SECTION_TOP_OFFSET) {
      return section1 > section2;
    }

    return true;
  }

  if (section2 > ACTIVE_SECTION_TOP_OFFSET) {
    return false;
  }

  return section1 < section2;
};

export default function SectionNavigationProvider({
  children,
}: SectionNavigationProviderProps) {
  // Use ref rather than state to avoid unnecessary rerenders
  const sectionMapRef = useRef<Record<string, RefObject<HTMLElement | null>>>(
    {}
  );
  const [activeSection, setActiveSection] = useState('');

  const updateActiveSection = useCallback(() => {
    let newActiveSection = '';
    let newActiveSectionTop: number | undefined = undefined;

    Object.keys(sectionMapRef.current).forEach((currentSection) => {
      let currentSectionTop =
        sectionMapRef.current[currentSection]?.current?.getBoundingClientRect()
          .top;

      if (sectionTopCompare(newActiveSectionTop, currentSectionTop)) {
        newActiveSection = currentSection;
        newActiveSectionTop = currentSectionTop;
      }
    });

    setActiveSection(newActiveSection);
  }, [setActiveSection, sectionMapRef]);

  const registerSection = useCallback(
    (sectionId: string, sectionRef: RefObject<HTMLElement | null>) => {
      sectionMapRef.current[sectionId] = sectionRef;
      updateActiveSection();
    },
    [sectionMapRef, updateActiveSection]
  );

  const deregisterSection = useCallback(
    (sectionId: string) => {
      delete sectionMapRef.current[sectionId];
    },
    [sectionMapRef]
  );

  const navigateToSectionIfRegistered = useCallback(
    (sectionId: string) => {
      const registeredSection = sectionMapRef.current[sectionId];
      if (!(registeredSection && registeredSection.current)) {
        return false;
      }

      window.scrollBy({
        top: registeredSection.current.getBoundingClientRect().top,
        behavior: 'smooth',
      });

      return true;
    },
    [sectionMapRef]
  );

  useEffect(() => {
    window.addEventListener('scroll', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
    };
  }, [updateActiveSection]);

  return (
    <sectionNavigationContext.Provider
      value={{
        registerSection,
        deregisterSection,
        navigateToSectionIfRegistered,
        activeSection,
      }}
    >
      {children}
    </sectionNavigationContext.Provider>
  );
}
