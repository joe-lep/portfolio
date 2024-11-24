import SectionHeader from '@/components/SectionHeader';
import { NavigableSection } from '@/components/section-navigation';
import SectionSubHeader from '@/components/SectionSubHeader';
import LibraryEntry from './LibraryEntry';
import SqueezeContainer from '@/components/SqueezeContainer';
import AppEntry from './AppEntry';
import ReactMinesweepr from './projects/ReactMinesweepr';
import ReactDialogManager from './projects/ReactDialogManager';

export default function ProjectsSection() {
  return (
    <NavigableSection id="projects">
      <SectionHeader>Projects</SectionHeader>
      <SectionSubHeader>Web Applications</SectionSubHeader>
      <ReactMinesweepr />
      <SectionSubHeader>Libraries</SectionSubHeader>
      <ReactDialogManager />
    </NavigableSection>
  );
}
