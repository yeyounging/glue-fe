'use client';

import Image from 'next/image';
import { Button } from '@/components/Common';
import { useBlogPageContext } from '../BlogFetcher/BlogContext';

export default function ProfileBox() {
  const {
    blogInfo: { profile },
    memberName,
  } = useBlogPageContext();

  return (
    <section className="flex flex-col  items-center mr-50">
      <div className="relative w-250 h-300 my-10 ">
        <Image src={profile} alt="profile" layout="fill" objectFit="cover" />
      </div>
      <div className="text-xl text-center mt-10 ">{memberName}</div>
      <p className="w-200 h-3 bg-primary" />
      {/* FIXME: 자신의 블로그일경우 off */}
      <Button className="bg-primary text-white font-semibold w-120 h-30 m-25">
        subscribe
      </Button>
    </section>
  );
}
