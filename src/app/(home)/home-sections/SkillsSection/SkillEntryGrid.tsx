import { ReactNode } from 'react';

export interface SkillEntryGridProps {
  children: ReactNode;
}

export default function SkillEntryGrid({ children }: SkillEntryGridProps) {
  return (
    <div className="m-8 flex flex-row flex-wrap justify-center gap-6">
      {children}
    </div>
  );
}
