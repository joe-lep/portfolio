import { Context, RefObject } from 'react';

export type SectionRef = RefObject<HTMLElement | null>;

export type SectionMap = Record<string, SectionRef>;

export type SectionNavigationContext = Context<{
  registerSection: (sectionId: string, sectionRef: SectionRef) => void;
  deregisterSection: (sectionId: string) => void;
  navigateToSectionIfRegistered: (sectionId: string) => boolean;
  activeSection: string;
}>;
