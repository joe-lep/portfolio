import ExternalLink from '@/components/ExternalLink';
import { ReactNode } from 'react';

import GithubIcon from '@/svg/github-142-svgrepo-com.svg';

export interface AppEntryProps {
  title: string;
  children: ReactNode;
  siteUrl: string;
  githubUrl: string;
}

export default function AppEntry({
  title,
  children,
  siteUrl,
  githubUrl,
}: AppEntryProps) {
  return (
    <article className="p-4">
      <header className="flex flex-row items-center justify-between gap-8 p-4 max-md:flex-col md:border-y-2">
        <h5 className="text-3xl">{title}</h5>
        <div className="flex flex-wrap justify-center gap-4">
          <ExternalLink href={siteUrl} small>
            Live Site
          </ExternalLink>
          <ExternalLink href={githubUrl} Icon={GithubIcon} small>
            Source Code
          </ExternalLink>
        </div>
      </header>
      <div className="pt-8">{children}</div>
    </article>
  );
}
