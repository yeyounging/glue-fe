import { Close, Button } from '@/components/Common';
import Image from 'next/image';
import { cn } from '@/utils';

type FileThumbnailsProps = {
  file: File | null;
  deleteFileHandler: () => void;
  size?: 'sm' | 'lg';
};

export default function FileThumbnails({
  file,
  deleteFileHandler,
  size = 'sm',
}: FileThumbnailsProps) {
  return (
    <div>
      {file ? (
        <div
          className={cn(
            'w-500 h-250 relative border border-[#afacac]',
            size === 'sm' && 'w-250 h-300',
          )}
        >
          <Image
            src={URL.createObjectURL(file)}
            alt={file.name}
            placeholder="blur"
            blurDataURL={URL.createObjectURL(file)}
            layout="fill"
            objectFit="cover"
          />
          {deleteFileHandler && (
            <Button
              className="absolute top-0 right-0 cursor-pointer"
              onClick={deleteFileHandler}
            >
              <Close className="m-3" />
            </Button>
          )}
        </div>
      ) : (
        <div className="w-250 h-300 bg-gray-200 flex justify-center items-center">
          No profile selected
        </div>
      )}
    </div>
  );
}
