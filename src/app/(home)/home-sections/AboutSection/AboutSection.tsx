import SectionHeader from '@/components/SectionHeader';
import { NavigableSection } from '@/components/section-navigation';
import SqueezeContainer from '@/components/SqueezeContainer';

export default function AboutSection() {
  return (
    <NavigableSection id="about">
      <SectionHeader>About</SectionHeader>
      <SqueezeContainer className="flex flex-col gap-8 py-16">
        <p>
          I am a full stack web developer with 8 years of professional
          experience. I have worked with many different languages, frameworks,
          and other kinds of tools, and I have especially proven experience
          developing complex web apps in React.js.
        </p>
        <p>
          My career can best be characterized by my fast learning ability. I
          taught myself to code when I was twelve years old. During my contract
          with Florida Blue, I taught myself React.js on the job as part of an
          effort to migrate an existing JSP application to modern React. I then
          used my self-taught skills to mentor other developer and lead the
          effort architecting and coding the migrated appliaction.
        </p>
        <p>
          I am confident in my ability to adapt to the needs to any employer or
          client and to master any technology put in front of me. In addition to
          my learning skills, my analytical skills make me good at tracking down
          and fixing hard-to-find bugs and other issues.
        </p>
      </SqueezeContainer>
    </NavigableSection>
  );
}
