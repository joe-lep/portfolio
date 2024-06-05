import { ReactNode } from 'react';
import Divider from '../Divider';

export interface PageHeaderProps {
  children: ReactNode;
}

export default function PageHeader({ children }: PageHeaderProps) {
  return (
    <header>
      <h2 className="py-4 text-3xl">{children}</h2>
      <div className="mb-8 h-0.5 bg-gradient-to-r from-neutral-800 via-neutral-400 via-90%" />
    </header>
  );
}
