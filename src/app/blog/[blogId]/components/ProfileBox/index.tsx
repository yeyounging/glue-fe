'use client';

import Image from 'next/image';
import { Button } from '@/components/Common';
import Link from 'next/link';
import { useBlogPageContext } from '../BlogFetcher/BlogContext';
import SubscriptionButton from '../SubscriptionButton';

export default function ProfileBox() {
  const {
    blogInfo: { blogId, profile },
    memberName,
    loginBlogId,
  } = useBlogPageContext();

  return (
    <section className="flex flex-col  items-center mr-50">
      <div className="relative w-250 h-300 my-10 ">
        <Image
          loader={() => profile}
          src={profile}
          alt="profile"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="text-xl text-center mt-10 ">{memberName}</div>
      <p className="w-200 h-3 bg-primary" />
      {loginBlogId === blogId ? (
        <Link href="/mypage">
          <Button className="bg-secondary text-primary border border-primary font-semibold w-120 h-30 m-25">
            Edit Profile
          </Button>
        </Link>
      ) : (
        <SubscriptionButton />
      )}
    </section>
  );
}
