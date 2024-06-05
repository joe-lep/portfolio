import { ReactNode } from 'react';

export interface SkillCardProps {
  children: ReactNode;
}

export default function SkillCard({ children }: SkillCardProps) {
  return (
    <div className="flex min-w-40 flex-col items-stretch justify-stretch rounded-xl border-2 border-black dark:border-white">
      {children}
    </div>
  );
}
