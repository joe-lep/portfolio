import { IconComponent, SvgComponent } from '@/types/icons';
import { ReactNode } from 'react';
import SkillCard from './SkillCard';

export interface SkillEntryProps {
  Icon?: SvgComponent;
  children: ReactNode;
}

export default function SkillEntry({ children, Icon }: SkillEntryProps) {
  return (
    <SkillCard>
      <div className="flex min-h-40 items-center justify-center">
        {Icon && <Icon height={96} width={96} fill="currentColor" />}
      </div>
      <div className="flex min-h-16 justify-center p-2">{children}</div>
    </SkillCard>
  );
}
