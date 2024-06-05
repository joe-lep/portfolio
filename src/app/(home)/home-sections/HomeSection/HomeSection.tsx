import { NavigableSection } from '@/components/section-navigation';
import myPhoto from '/public/joseph-lepley-photo.png';
import Image from 'next/image';
import GithubIcon from '@/svg/github-142-svgrepo-com.svg';
import ExternalLink from '@/components/ExternalLink';
import LinkedinIcon from '@/svg/linkedin-svgrepo-com.svg';
import ResumeIcon from '@/svg/resume-4-svgrepo-com.svg';

export default function HomeSection() {
  return (
    <NavigableSection
      id="home"
      className="w-full from-blue-200 max-md:bg-gradient-to-b dark:from-violet-700"
    >
      <div className="flex flex-row overflow-hidden rounded-md from-blue-200 max-md:flex-col max-md:items-center max-md:gap-16 max-md:pt-8 md:bg-gradient-to-r dark:from-violet-700">
        <div className="overflow-hidden shadow-2xl max-md:rounded-full">
          <Image src={myPhoto} height={299} alt="Photo of Joseph Lepley" />
        </div>
        <hgroup className="flex flex-1 flex-col items-center justify-center gap-3">
          <h2 className="text-5xl">Joseph Lepley</h2>
          <p>Full Stack Developer | React.js Expert</p>
        </hgroup>
      </div>
      <ul className="mt-8 flex flex-row items-center justify-center gap-4 p-8 max-md:flex-col md:gap-8">
        <li>
          <ExternalLink
            Icon={LinkedinIcon}
            href="https://www.linkedin.com/in/joseph-lepley/"
          >
            LinkedIn
          </ExternalLink>
        </li>
        <li>
          <ExternalLink Icon={GithubIcon} href="https://github.com/joe-lep">
            Github
          </ExternalLink>
        </li>
        <li>
          <ExternalLink
            Icon={ResumeIcon}
            href="/resume/joseph-lepley-resume.pdf"
          >
            Resume
          </ExternalLink>
        </li>
      </ul>
    </NavigableSection>
  );
}
