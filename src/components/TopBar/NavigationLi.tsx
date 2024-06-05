import { ReactNode } from 'react';

export interface NavigationLiProps {
  children: ReactNode;
}

export default function NavigationLi({ children }: NavigationLiProps) {
  return (
    <li className="text-center max-md:mx-6 max-md:py-4 max-md:text-xl">
      {children}
    </li>
  );
}
