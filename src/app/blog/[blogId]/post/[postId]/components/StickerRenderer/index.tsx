import Image from 'next/image';
import { usePostDetailContext } from '../PostDetailFetcher/PostDetailContext';

export default function StickerRenderer() {
  const {
    postDetail: {
      postStickerUrlItems: { postStickerId },
    },
  } = usePostDetailContext();

  return postStickerId.map(({ postStickerItem, url }) => {
    const {
      xLocation,
      yLocation,
      width,
      height,
      angle,
      postStickerId: stickerId,
    } = postStickerItem;
    return (
      <Image
        key={stickerId}
        src={url}
        width={width}
        height={height}
        alt={`${postStickerId} alt`}
        className="absolute"
        style={{
          transform: `translate(${xLocation}px, ${yLocation}px) rotate(${angle}deg)`,
          width: `${width}px`,
          height: `${height}px`,
        }}
      />
    );
  });
}
