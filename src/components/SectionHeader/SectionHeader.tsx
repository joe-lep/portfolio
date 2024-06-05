import { ReactNode } from 'react';
import Divider from '../Divider';

export interface SectionHeaderProps {
  children: ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <header className="my-2">
      <h3 className="ml-4 text-3xl">{children}</h3>
      <div className="mb-2 h-0.5 bg-gradient-to-r from-neutral-400 via-neutral-300 via-70%" />
    </header>
  );
}
