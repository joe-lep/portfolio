import SectionHeader from '@/components/SectionHeader';
import { NavigableSection } from '@/components/section-navigation';
import SectionSubHeader from '@/components/SectionSubHeader';
import SkillEntry from './SkillEntry';
import SkillEntryGrid from './SkillEntryGrid';

import AwsIcon from '@/svg/aws-svgrepo-com.svg';
import CPlusPlusIcon from '@/svg/c-plus-plus-svgrepo-com.svg';
import CSharpIcon from '@/svg/c-sharp-16-svgrepo-com.svg';
import CssIcon from '@/svg/css3-svgrepo-com.svg';
import DatabaseIcon from '@/svg/database-svgrepo-com.svg';
import DockerIcon from '@/svg/docker-svgrepo-com.svg';
import GitIcon from '@/svg/git-svgrepo-com.svg';
import Html5Icon from '@/svg/html-124-svgrepo-com.svg';
import JavaIcon from '@/svg/java-16-svgrepo-com.svg';
import JavscriptIcon from '@/svg/javascript-155-svgrepo-com.svg';
import MaterialUiIcon from '@/svg/material-ui-svgrepo-com.svg';
import MongoDbIcon from '@/svg/mongodb-svgrepo-com.svg';
import NextJsIcon from '@/svg/nextjs-fill-svgrepo-com.svg';
import NodeJsIcon from '@/svg/node-js-svgrepo-com.svg';
import PostgresqlIcon from '@/svg/dbs-postgresql-svgrepo-com.svg';
import PythonIcon from '@/svg/python-127-svgrepo-com.svg';
import ReactJsIcon from '@/svg/react-svgrepo-com.svg';
import SpringBootIcon from '@/svg/spring-boot-svgrepo-com.svg';
import TailwindCssIcon from '@/svg/tailwind-svgrepo-com.svg';
import TypescriptIcon from '@/svg/brand-typescript-svgrepo-com.svg';

export default function SkillsSection() {
  return (
    <NavigableSection id="skills">
      <SectionHeader>Skills</SectionHeader>
      <SectionSubHeader>Languages</SectionSubHeader>
      <SkillEntryGrid>
        <SkillEntry Icon={Html5Icon}>HTML5</SkillEntry>
        <SkillEntry Icon={CssIcon}>CSS</SkillEntry>
        <SkillEntry Icon={JavscriptIcon}>Javscript</SkillEntry>
        <SkillEntry Icon={TypescriptIcon}>Typescript</SkillEntry>
        <SkillEntry Icon={JavaIcon}>Java</SkillEntry>
        <SkillEntry Icon={PythonIcon}>Python</SkillEntry>
        <SkillEntry Icon={CSharpIcon}>C#</SkillEntry>
        <SkillEntry Icon={CPlusPlusIcon}>C++</SkillEntry>
      </SkillEntryGrid>
      <SectionSubHeader>Frontend</SectionSubHeader>
      <SkillEntryGrid>
        <SkillEntry Icon={ReactJsIcon}>React.JS</SkillEntry>
        <SkillEntry Icon={NextJsIcon}>Next.JS</SkillEntry>
        <SkillEntry Icon={MaterialUiIcon}>Material UI</SkillEntry>
        <SkillEntry Icon={TailwindCssIcon}>Tailwind CSS</SkillEntry>
      </SkillEntryGrid>
      <SectionSubHeader>Backend</SectionSubHeader>
      <SkillEntryGrid>
        <SkillEntry Icon={NodeJsIcon}>Node.JS</SkillEntry>
        <SkillEntry>ASP.net</SkillEntry>
        <SkillEntry Icon={SpringBootIcon}>Spring Boot</SkillEntry>
      </SkillEntryGrid>
      <SectionSubHeader>Databases</SectionSubHeader>
      <SkillEntryGrid>
        <SkillEntry Icon={DatabaseIcon}>SQL</SkillEntry>
        <SkillEntry Icon={MongoDbIcon}>MongoDB</SkillEntry>
        <SkillEntry Icon={PostgresqlIcon}>PostgreSQL</SkillEntry>
      </SkillEntryGrid>
      <SectionSubHeader>Development Tools</SectionSubHeader>
      <SkillEntryGrid>
        <SkillEntry Icon={GitIcon}>Git</SkillEntry>
        <SkillEntry Icon={DockerIcon}>Docker</SkillEntry>
      </SkillEntryGrid>
      <SectionSubHeader>Cloud</SectionSubHeader>
      <SkillEntryGrid>
        <SkillEntry Icon={AwsIcon}>Amazon Web Services</SkillEntry>
      </SkillEntryGrid>
    </NavigableSection>
  );
}
