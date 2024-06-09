'use client';

import { HeaderDrawer } from '@/components/HeaderDrawer';
import { useSearch } from '@/hooks';
import Search from '../Icons/Search';
import HamburgerMenu from '../Icons/HamburgerMenu';
import Input from '../Input';

export default function NavigationIcons() {
  const {
    showInput,
    searchQuery,
    handleSearchClick,
    handleInputChange,
    handleKeyDown,
  } = useSearch();

  return (
    <div className="flex items-center gap-12">
      <div className="flex items-center">
        {showInput && (
          <Input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            className="text-13 mr-10 py-4 border border-[#6e6e6d] rounded-lg"
          />
        )}
        <Search onClick={handleSearchClick} />
      </div>
      <HeaderDrawer>
        <HamburgerMenu />
      </HeaderDrawer>
    </div>
  );
}
