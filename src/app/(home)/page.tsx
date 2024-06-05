import HomeSection from './home-sections/HomeSection';
import AboutSection from './home-sections/AboutSection';
import SkillsSection from './home-sections/SkillsSection';
import ContactSection from './home-sections/ContactSection';
import ProjectsSection from './home-sections/ProjectsSection';

export default function HomePage() {
  return (
    <main className="flex flex-col pb-16 md:pb-64 md:pt-16">
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      {/* <ContactSection /> */}
    </main>
  );
}
