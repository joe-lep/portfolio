import ExternalLink from '@/components/ExternalLink';
import { ReactNode } from 'react';

import GithubIcon from '@/svg/github-142-svgrepo-com.svg';
import NpmIcon from '@/svg/npm-svgrepo-com.svg';

export interface LibraryEntryProps {
  title: string;
  children: ReactNode;
  npmUrl: string;
  githubUrl: string;
}

export default function LibraryEntry({
  title,
  children,
  npmUrl,
  githubUrl,
}: LibraryEntryProps) {
  return (
    <article className="p-4">
      <header className="flex flex-row items-center justify-between gap-8 p-4 max-md:flex-col md:border-y-2">
        <h5 className="text-3xl">{title}</h5>
        <div className="flex flex-wrap justify-center gap-4">
          <ExternalLink href={githubUrl} Icon={GithubIcon} small>
            Github
          </ExternalLink>
          <ExternalLink href={npmUrl} Icon={NpmIcon} small>
            NPM
          </ExternalLink>
        </div>
      </header>
      <div className="pt-8">{children}</div>
    </article>
  );
}
