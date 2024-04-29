'use client';

import { getBackgroundImageById } from '@/app/lib/dummyData';
import { FileEdit, FileThumbnails, useReadFile } from '../Common';

export default function Background() {
  const [backgroundFile, setBackgroundFile] = useReadFile(
    getBackgroundImageById(1),
    'background.jpeg',
    'image/jpeg',
  );

  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">Background</p>
      <div className="flex flex-col items-center gap-10">
        <FileThumbnails
          file={backgroundFile}
          deleteFileHandler={() => setBackgroundFile(null)}
          size="lg"
        />
        <FileEdit setFile={setBackgroundFile} />
      </div>
    </section>
  );
}
