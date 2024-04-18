import { Footer } from '@/components/Common';
import Glue from '@/components/Glue';
import MatchCards from '@/components/MatchCards';
import MouseImageGallery from '@/components/MouseImageGallery';
import PlayGround from '@/components/Playground';

export default function Page() {
  return (
    <main className="relative font-luckiest">
      <MouseImageGallery />

      <PlayGround />

      <Glue />

      <MatchCards />

      <Footer />
    </main>
  );
}
