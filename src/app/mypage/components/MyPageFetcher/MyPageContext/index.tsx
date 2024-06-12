import { Dispatch, SetStateAction } from 'react';
import { generateContext } from '@/react-utils';
import { MyPageResponse } from '../types';

interface MyPageContextProps {
  myPageData: MyPageResponse;
  setMyPageData: Dispatch<SetStateAction<MyPageResponse>>;
}

export const [MyPageProvider, useMyPageContext] =
  generateContext<MyPageContextProps>({
    name: 'mypage-info',
  });
