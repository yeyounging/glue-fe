import { HamburgerMenu } from '@/components/Common';

export function Story() {
  return (
    <div className="h-140">
      <div className="h-30 text-xl font-bold ">보통의 일상</div>
      <div className="my-5 h-100 white-space:normal break-words text-overflow">
        공포물을 별로 좋아하지 않는 나는 본래 파묘를 볼 계획이 없었지만, 다들
        재밌다는 입소문과 900만 돌파라는 타이틀에 군중심리가 자극됐다. 걱정과는
        달리 많이 무섭지는 않았다. 용두사미의 느낌이 있다던데 나는 처음부터
        끝까지 재밌게 봤다. 영화관을 오랜만에 가서 이미 신나있기도 했고 유해진
        애드립이 너무 재밌어서 계속 웃으면서 봤다. 다음은 듄 보러 또 와야겠다.
        티모시가 그렇게 또 놀
      </div>
    </div>
  );
}

export default function StoryBox() {
  return (
    <section className="w-full px-100">
      <header className="flex flex-row items-center justify-between w-full pr-10">
        <div className="flex flex-col justify-center items-center">
          <div className="font-extrabold text-4xl">Stories</div>
          <p className="w-130 h-3 bg-primary mb-2" />
          <p className="w-140 h-3 bg-primary mb-2" />
        </div>

        <HamburgerMenu />
      </header>
      <article className="w-full grid grid-cols-2 gap-30 mt-40">
        <Story />
        <Story />
        <Story />
        <Story />
      </article>
    </section>
  );
}
