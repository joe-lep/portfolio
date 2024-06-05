import { createContext, Ref } from 'react';
import { SectionNavigationContext } from './types';

const sectionNavigationContext: SectionNavigationContext = createContext({
  registerSection: (_sectionId, _sectionRef) => {},
  deregisterSection: (_sectionId) => {},
  navigateToSectionIfRegistered: (_sectionId) => false,
  activeSection: '',
});

export default sectionNavigationContext;
