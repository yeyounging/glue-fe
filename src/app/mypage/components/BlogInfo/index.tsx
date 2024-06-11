'use client';

import { Input } from '@/components/Common';
import { useState, useEffect } from 'react';
import { useMyPageContext } from '../MyPageFetcher/MyPageContext';

export default function BlogInfo() {
  const { myPageData, setMyPageData } = useMyPageContext();
  const { title, description } = myPageData;
  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);

  /* eslint react-hooks/exhaustive-deps: off */
  useEffect(() => {
    setMyPageData((prevData) => ({
      ...prevData,
      title: newTitle,
      description: newDescription,
    }));
  }, [newTitle, newDescription]);

  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">blog-info</p>
      <article className="flex flex-col">
        <p className="text-[#747373]">Title</p>
        <Input
          type="text"
          id="title"
          value={title}
          onValueChange={setNewTitle}
          className="border border-primary/70 p-10 rounded-md w-400 h-30"
        />
        <p className="text-[#747373] mt-30">Description</p>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setNewDescription(e.target.value)}
          className="border border-primary/70 p-10 rounded-md w-400 h-200"
        />
      </article>
    </section>
  );
}
