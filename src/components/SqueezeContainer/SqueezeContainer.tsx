import clsx from 'clsx';
import { HTMLAttributes, ReactNode } from 'react';

export interface SqueezeContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  className?: string;
}

export default function SqueezeContainer({
  children,
  className,
  ...props
}: SqueezeContainerProps) {
  return (
    <div {...props} className={clsx(className, 'mx-auto max-w-4xl px-4')}>
      {children}
    </div>
  );
}
