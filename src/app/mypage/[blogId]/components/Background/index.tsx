'use client';

import { FileEdit } from '@/components/Common';
import { FileThumbnails } from '../Common';
import { useEdit } from '../hooks';

export default function Background() {
  const { handleBackgroundFileChange, background, backgroundFile } = useEdit();

  return (
    <section className="flex flex-col items-center pb-250 gap-100">
      <p className="text-30 font-semibold py-20">Background</p>
      <div className="flex flex-col items-center gap-10">
        <FileThumbnails
          file={backgroundFile}
          defaultImage="/tempImage/bg.jpeg"
          currentImage={background}
          deleteFileHandler={() => handleBackgroundFileChange(null)}
          size="lg"
        />
        <FileEdit onFileSelect={handleBackgroundFileChange} />
      </div>
    </section>
  );
}
