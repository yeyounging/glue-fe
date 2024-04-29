'use client';

import { Input } from '@/components/Common';
import { useState, ChangeEvent } from 'react';

export default function BlogName() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">blog-info</p>
      <article className="flex flex-col">
        <label htmlFor="title" className="text-[#747373]">
          Title
        </label>
        <Input
          type="text"
          id="title"
          value={title}
          onChange={handleTitleChange}
          className="border border-primary/70 p-10 rounded-md w-400 h-30"
        />
        <label htmlFor="description" className="text-[#747373] mt-30">
          Description
        </label>
        <Input
          type="text"
          id="description"
          value={description}
          onChange={handleDescriptionChange}
          className="border border-primary/70 p-10 rounded-md w-400 h-200"
        />
      </article>
    </section>
  );
}
