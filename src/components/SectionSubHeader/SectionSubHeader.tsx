import { ReactNode } from 'react';

export interface SectionSubHeaderProps {
  children: ReactNode;
}

export default function SectionSubHeader({ children }: SectionSubHeaderProps) {
  return (
    <div className="m-4">
      <h4 className="text-center text-xl font-bold">{children}</h4>
    </div>
  );
}
