import Image from 'next/image';

export default function Albums() {
  const imageCount = 5;
  const images = Array.from({ length: imageCount }, (_, index) => index + 1);

  return (
    <article className="flex flex-col px-100 items-start">
      <div className="flex flex-col  justify-center items-center">
        <div className="font-extrabold text-4xl">Albums</div>
        <p className="w-135 h-3 bg-primary mb-2" />
        <p className="w-145 h-3 bg-primary mb-2" />
      </div>
      <div className="flex flex-row gap-10 py-40">
        {images.map((image) => (
          <div key={image} className="w-150 h-150 relative overflow-hidden">
            <Image
              alt={`Image ${image}`}
              src={`/tempImage/${image}.jpg`}
              layout="fill"
              objectFit="cover"
            />
          </div>
        ))}
      </div>
    </article>
  );
}
