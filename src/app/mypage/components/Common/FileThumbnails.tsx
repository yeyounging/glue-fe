import { Close, Button } from '@/components/Common';
import Image from 'next/image';
import { cn } from '@/utils';
import { useState, useEffect } from 'react';

type FileThumbnailsProps = {
  file: File | null;
  defaultImage: string;
  currentImage: string;
  deleteFileHandler: () => void;
  size?: 'sm' | 'lg';
};

export default function FileThumbnails({
  file,
  defaultImage,
  currentImage,
  deleteFileHandler,
  size = 'sm',
}: FileThumbnailsProps) {
  const [preview, setPreview] = useState<string | null>(currentImage);

  useEffect(() => {
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setPreview(currentImage);
    return undefined;
  }, [file, currentImage]);

  return (
    <div>
      {preview ? (
        <div
          className={cn(
            'relative border border-[#afacac]',
            size === 'sm' ? 'w-250 h-300' : 'w-500 h-250',
          )}
        >
          <Image
            loader={() => preview}
            src={preview}
            alt="Selected Image"
            layout="fill"
            objectFit="cover"
          />
          <Button
            className="absolute top-0 right-0 cursor-pointer"
            onClick={() => {
              setPreview(defaultImage);
              deleteFileHandler();
            }}
          >
            <Close className="m-3" />
          </Button>
        </div>
      ) : (
        <div
          className={cn(
            'bg-gray-200 flex justify-center items-center',
            size === 'sm' ? 'w-250 h-300' : 'w-500 h-250',
          )}
        >
          <span>No profile selected</span>
        </div>
      )}
    </div>
  );
}
