import DummySvg from './DummySvg';

export default function Glue() {
  return (
    <section className="h-[720px] px-46 flex justify-center gap-74 items-center">
      <div className="text-[110px] flex flex-col text-center">
        <p className="text-[#F08D53]">Glue</p>
        <p>Your Day!</p>
      </div>

      <div className="w-[582px] h-[582px] bg-[#F08D53] rounded-20 flex justify-center items-center">
        {/* FIXME: 실제로 체험해볼 수 있는 스티커들 */}
        <DummySvg />
      </div>
    </section>
  );
}
