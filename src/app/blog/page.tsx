import {
  Tags,
  Albums,
  StoryBox,
  ProfileBox,
  BlogBackground,
} from './components';

export default function Page() {
  return (
    <div className="relative w-full h-full font-pretendard">
      <BlogBackground />
      <section className="flex flex-row m-100 py-50">
        <ProfileBox />
        <StoryBox />
      </section>
      <section className="flex flex-row m-100">
        <Tags />
        <Albums />
      </section>
    </div>
  );
}
