'use client';

import { FileEdit, Input } from '@/components/Common';
import { FileThumbnails } from '../Common';
import { useEdit } from '../hooks';

export default function Profile() {
  const {
    profile,
    profileFile,
    name,
    handleProfileFileChange,
    handleNameChange,
  } = useEdit();

  return (
    <section className="flex flex-col items-center justify-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">Profile</p>
      <article className="flex flex-row w-full px-100 items-center gap-80">
        <div className="flex flex-col items-center gap-10">
          <FileThumbnails
            file={profileFile}
            defaultImage="/images/profile.jpeg"
            currentImage={profile}
            deleteFileHandler={() => handleProfileFileChange(null)}
          />
          <FileEdit onFileSelect={handleProfileFileChange} />
        </div>
        <div className="flex flex-col">
          <p className="text-[#747373]">Name</p>
          <Input
            id="name"
            type="text"
            value={name}
            onValueChange={handleNameChange}
            className="border border-primary/70 p-10 rounded-md w-250 h-30"
          />
        </div>
      </article>
    </section>
  );
}
