import clsx from 'clsx';
import Link, { LinkProps } from 'next/link';
import { ReactNode } from 'react';

export interface InternalLinkProps {
  className?: string;
  children: ReactNode;
  href: string;
}

export default function InternalLink({
  className,
  children,
  href,
}: InternalLinkProps) {
  return (
    <Link href={href} className={clsx(className, 'underline')}>
      {children}
    </Link>
  );
}
