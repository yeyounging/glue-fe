import Glue from '@/components/Glue';
import MatchCards from '@/components/MatchCards';
import MouseImageGallery from '@/components/MouseImageGallery';
import PlayGround from '@/components/Playground';

export default function Page() {
  return (
    <main className="relative">
      <MouseImageGallery />

      <PlayGround />

      <Glue />

      <MatchCards />
    </main>
  );
}
