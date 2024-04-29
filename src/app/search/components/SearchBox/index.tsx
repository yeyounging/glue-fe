import { Search } from '@/components/Common/Icons';

export default function SearchBox() {
  return (
    <article className="flex justify-center py-30">
      <div
        className="h-42 w-480 flex flex-row items-center justify-center
            rounded-2xl gap-15 p-10 border"
      >
        <input
          className="h-full w-full  bg-transparent"
          placeholder="Search blog or contents"
          type="text"
        />
        <Search />
      </div>
    </article>
  );
}
