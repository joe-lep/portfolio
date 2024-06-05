import SectionHeader from '@/components/SectionHeader';
import { NavigableSection } from '@/components/section-navigation';
import ContactForm from './ContactForm';
import SqueezeContainer from '@/components/SqueezeContainer';

export default function ContactSection() {
  return (
    <NavigableSection id="contact">
      <SectionHeader>Contact</SectionHeader>
      <SqueezeContainer>
        <ContactForm />
      </SqueezeContainer>
    </NavigableSection>
  );
}
