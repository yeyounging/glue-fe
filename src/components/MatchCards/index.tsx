import Card from './Card';

export default function MatchCards() {
  return (
    <section className="h-[720px] flex gap-118 justify-center items-center">
      <div className="text-[110px] flex flex-col text-center">
        <p className="text-[#FC77BF]">Catch</p>
        <p>Your</p>
        <p>Match!</p>
      </div>

      <div className="w-[640px] h-[640px] bg-[#FC77BF] rounded-20 grid grid-rows-2 grid-cols-2 px-80 py-30 justify-items-center items-center">
        {Array.from({ length: 4 }).map((_, index) => (
          // eslint-disable-next-line
          <Card key={index}>
            <div className="mt-20">Hello</div>
          </Card>
        ))}
      </div>
    </section>
  );
}
