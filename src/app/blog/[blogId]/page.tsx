import {
  Tags,
  Albums,
  StoryBox,
  ProfileBox,
  BlogBackground,
  BlogHeader,
} from './components';

export default function Page() {
  return (
    <BlogHeader>
      <div className="relative w-full h-full font-pretendard">
        <BlogBackground />
        <section className="flex flex-row m-100 py-50">
          <ProfileBox />
          <StoryBox />
        </section>
        <section className="flex flex-row m-100 h-full">
          <Tags />
          <Albums />
        </section>
      </div>
    </BlogHeader>
  );
}
