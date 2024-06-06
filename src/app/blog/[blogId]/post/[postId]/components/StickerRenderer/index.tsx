import Image from 'next/image';
import { usePostDetailContext } from '../PostDetailFetcher/PostDetailContext';

export default function StickerRenderer() {
  const {
    postDetail: { postStickerItems },
  } = usePostDetailContext();

  return postStickerItems.map(
    ({ xLocation, yLocation, scaleX, scaleY, rotation, stickerId, url }) => (
      <Image
        key={`${xLocation}${yLocation}${stickerId}`}
        src={url}
        width={60}
        height={60}
        alt="스티커 alt"
        className="absolute"
        style={{
          transform: `translate(${xLocation}px, ${yLocation}px) rotate(${rotation}deg) scaleX(${scaleX / 100}) scaleY(${scaleY / 100})`,
        }}
      />
    ),
  );
}
