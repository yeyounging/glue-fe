import Image from 'next/image';
import { usePostDetailContext } from '../PostDetailFetcher/PostDetailContext';

export default function StickerRenderer() {
  const {
    postDetail: {
      postStickerUrlItems: { postStickerId },
    },
  } = usePostDetailContext();

  return postStickerId.map(({ postStickerItem }) => {
    const { xLocation, yLocation, scaleX, scaleY, rotation, stickerId, url } =
      postStickerItem;
    return (
      <Image
        key={`${xLocation}${yLocation}${stickerId}`}
        src={url}
        width={60}
        height={60}
        alt={`${postStickerId} alt`}
        className="absolute"
        style={{
          transform: `translate(${xLocation}px, ${yLocation}px) rotate(${rotation}deg) scaleX(${scaleX}) scaleY(${scaleY})`,
        }}
      />
    );
  });
}
