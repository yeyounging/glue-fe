import { HeaderDrawer } from '@/components/HeaderDrawer';
import Link from 'next/link';
import Search from '../Icons/Search';
import HamburgerMenu from '../Icons/HamburgerMenu';

export default function NavigationIcons() {
  return (
    <div className="flex items-center gap-12">
      <Link href="/search">
        <Search />
      </Link>

      <HeaderDrawer>
        <HamburgerMenu />
      </HeaderDrawer>
    </div>
  );
}
