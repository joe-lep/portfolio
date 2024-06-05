import SectionHeader from '@/components/SectionHeader';
import { NavigableSection } from '@/components/section-navigation';
import SectionSubHeader from '@/components/SectionSubHeader';
import LibraryEntry from './LibraryEntry';
import SqueezeContainer from '@/components/SqueezeContainer';

export default function ProjectsSection() {
  return (
    <NavigableSection id="projects">
      <SectionHeader>Projects</SectionHeader>
      {/* <SectionSubHeader>Libraries</SectionSubHeader> */}
      <LibraryEntry
        title="React Dialog Manager"
        githubUrl="https://github.com/joe-lep/react-dialog-manager"
        npmUrl="https://www.npmjs.com/package/@joe-lep/react-dialog-manager"
      >
        <SqueezeContainer>
          <p>
            Lightweight library to simplify and streamline dialog workflow in
            React. Users can add and remove Dialogs/Modals directly to the
            Virtual DOM from code without needing to implement them in the
            page&apos;s JSX ahead of time. More importantly, the manager gives
            users the capability to add submission to dialogs, which will be
            passed to the code that opened the modal in a promise-like callback.
            This makes it easy to add forms to modals that are opened
            conditionally and then handle the form data in the same function or
            to open simple confirmation dialogs.
          </p>
        </SqueezeContainer>
      </LibraryEntry>
    </NavigableSection>
  );
}
