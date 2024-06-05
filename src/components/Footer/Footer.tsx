import Link from 'next/link';
import SqueezeContainer from '../SqueezeContainer';
import InternalLink from '../InternalLink';

export default function Footer() {
  return (
    <div className="min-h-60 bg-blue-800 p-2 text-white">
      <SqueezeContainer className="flex flex-col gap-8 p-12">
        <p>&copy;Joseph Lepley 2024</p>
        <InternalLink href="/icon-attributions">Icon Attributions</InternalLink>
      </SqueezeContainer>
    </div>
  );
}
