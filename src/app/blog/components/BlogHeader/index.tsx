import { NavigationIcons } from '@/components/Common';

export default function BlogHeader({
  children,
}: {
  children: React.ReactNode;
}) {
  const title = ' do the best Zl금 ';

  return (
    <div className="relative">
      <header className="relative top-0 z-10 w-full">
        <nav className="flex flex-row h-60 items-center justify-between p-10 px-20 bg-opacity-60 bg-[#bebebe]">
          <div className="text-xl text-[#363636] px-10">{title}</div>
          <NavigationIcons />
        </nav>
      </header>
      <div className="absolute top-0">{children}</div>
    </div>
  );
}
