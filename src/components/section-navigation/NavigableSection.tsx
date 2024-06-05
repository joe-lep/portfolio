import { NavigationSectionKey } from '@/types/navigation';
import clsx from 'clsx';
import { ReactNode } from 'react';
import SectionNavigationConsumer from './SectionNavigationConsumer';

export interface NavigableSectionProps {
  id: NavigationSectionKey;
  className?: string;
  children: ReactNode;
}

export function NavigableSection({
  id,
  className,
  children,
}: NavigableSectionProps) {
  return (
    <section id={id}>
      <SectionNavigationConsumer id={id} />
      <div className={clsx(className, 'pt-16')}>{children}</div>
    </section>
  );
}
