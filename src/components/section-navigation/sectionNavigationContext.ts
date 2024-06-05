import { createContext, RefObject } from 'react';

const sectionNavigationContext = createContext({
  registerSection: (
    sectionId: string,
    sectionRef: RefObject<HTMLElement | null>
  ) => {},
  deregisterSection: (sectionId: string) => {},
  navigateToSectionIfRegistered: (sectionId: string): boolean => false,
  activeSection: '',
});

export default sectionNavigationContext;
