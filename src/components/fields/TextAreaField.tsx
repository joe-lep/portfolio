import { useId } from 'react';

export interface TextAreaFieldProps {
  name: string;
  label: string;
}

export default function TextAreaField({ name, label }: TextAreaFieldProps) {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <textarea name={name} className="w-full rounded border-2" />
    </div>
  );
}
