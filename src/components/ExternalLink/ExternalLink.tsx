import { IconComponent, SvgComponent } from '@/types/icons';
import clsx from 'clsx';
import { ReactNode } from 'react';

const DEFAULT_ICON_SIZE = 24;
const SMALL_ICON_SIZE = 20;

export interface ExternalLinkProps {
  children: ReactNode;
  href: string;
  Icon?: SvgComponent;
  small?: boolean;
}

export default function ExternalLink({
  href,
  Icon,
  children,
  small,
}: ExternalLinkProps) {
  const iconSize = small ? SMALL_ICON_SIZE : DEFAULT_ICON_SIZE;

  return (
    <a
      href={href}
      target="_blank"
      className={clsx(
        'inline-flex select-none flex-row items-center gap-1 rounded-full bg-sky-600 text-white shadow-md transition-colors hover:bg-sky-700',
        {
          'p-4': !small,
          'px-4 py-3': small,
        }
      )}
    >
      {Icon && (
        <div>
          <Icon height={iconSize} width={iconSize} fill="currentColor" />
        </div>
      )}
      <div className={clsx({ 'text-l px-5': !small, 'px-3 text-sm': small })}>
        {children}
      </div>
    </a>
  );
}
