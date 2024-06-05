'use client';

import InputField from '@/components/fields/InputFIeld';
import TextAreaField from '@/components/fields/TextAreaField';

export default function ContactForm() {
  return (
    <form action={(formValues) => console.log(formValues.get('email'))}>
      <div className="flex flex-col gap-2">
        <InputField name="email" label="Email" />
        <InputField name="name" label="Name" />
        <InputField name="subject" label="Subject" />
        <TextAreaField name="body" label="Body" />
        <div className="flex flex-row justify-end">
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  );
}
