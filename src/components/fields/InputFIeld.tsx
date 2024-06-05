import { useId } from 'react';

export interface InputFIeldProps {
  name: string;
  label: string;
}

export default function InputFIeld({ name, label }: InputFIeldProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input name={name} className="w-full rounded border-2" />
    </div>
  );
}
