'use client';

import { useState } from 'react';
import { Input } from '@/components/Common';
import { getProfileImageById } from '@/app/lib/dummyData';
import { FileEdit, FileThumbnails, useReadFile } from '../Common';

export default function Profile() {
  const [profile, setProfile] = useReadFile(
    getProfileImageById(1),
    'profile.png',
    'image/png',
  );
  const [name, setName] = useState('');

  return (
    <section className="flex flex-col items-center justify-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">Profile</p>
      <article className="flex flex-row w-full px-100 items-center gap-80">
        <div className="flex flex-col items-center gap-10">
          <FileThumbnails
            file={profile}
            deleteFileHandler={() => setProfile(null)}
          />
          <FileEdit setFile={setProfile} />
        </div>
        <div className="flex flex-col">
          <p className="text-[#747373]">Name</p>
          <Input
            id="name"
            type="text"
            value={name}
            onValueChange={setName}
            className="border border-primary/70 p-10 rounded-md w-250 h-30"
          />
        </div>
      </article>
    </section>
  );
}
