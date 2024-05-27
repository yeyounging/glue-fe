import Subscription from './components/Subscription';
import Feed from './components/Feed';

export default function Page() {
  return (
    <section className="w-full flex flex-row py-50 text-[#171717]">
      <Subscription />
      <div className="h-490 w-1 bg-primary mt-100 ml-215 fixed" />
      <Feed />
    </section>
  );
}
