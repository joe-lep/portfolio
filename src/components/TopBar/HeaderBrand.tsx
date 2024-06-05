import JLIcon from '@/svg/jl-logo-letters.svg';

export default function HeaderBrand() {
  return (
    <div className="flex flex-row gap-2 text-2xl">
      <JLIcon
        height={40}
        width={40}
        fill="currentColor"
        className="xl:hidden"
      />
      <h1 className="hidden xl:block">Joseph Lepley&apos;s Portfolio</h1>
    </div>
  );
}
