import NavigationLi from './NavigationLi';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  return (
    <nav className="text-l font-bold max-md:w-full max-md:pt-24">
      <ul className="flex flex-row max-md:flex-col max-md:divide-y max-md:divide-solid md:gap-6">
        <NavigationLi>
          <NavigationLink sectionId="home">Home</NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink sectionId="about">About</NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink sectionId="skills">Skills</NavigationLink>
        </NavigationLi>
        <NavigationLi>
          <NavigationLink sectionId="projects">Projects</NavigationLink>
        </NavigationLi>
        {/* <NavigationLi>
          <NavigationLink sectionId="contact">
            Contact
          </NavigationLink>
        </NavigationLi> */}
      </ul>
    </nav>
  );
}
