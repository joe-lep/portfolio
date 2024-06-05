'use client';

import { useContext, useEffect, useRef } from 'react';
import sectionNavigationContext from './sectionNavigationContext';

export interface SectionNavigationConsumerProps {
  id: string;
}

export default function SectionNavigationConsumer({
  id,
}: SectionNavigationConsumerProps) {
  const elRef = useRef<HTMLDivElement | null>(null);
  const { registerSection, deregisterSection } = useContext(
    sectionNavigationContext
  );

  useEffect(() => {
    registerSection(id, elRef);

    return () => {
      deregisterSection(id);
    };
  }, [id, elRef, registerSection, deregisterSection]);

  return <div ref={elRef} />;
}
