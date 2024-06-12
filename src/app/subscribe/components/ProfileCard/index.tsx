import Link from 'next/link';
import UserIcon from './UserIcon';

interface ProfileCardProps {
  blogId: number;
  name: string;
  title?: string;
  profile?: string;
}

export default function ProfileCard({
  blogId,
  name,
  title,
  profile,
}: ProfileCardProps) {
  return (
    <Link href={`/blog/${blogId}`}>
      <article className="flex flex-row gap-10 items-end">
        <UserIcon src={profile} />
        <div className="flex flex-col">
          <div className="text-[11px] text-[#626161]">{name}</div>
          <div className="text-[14px] leading-[14px]">{title}</div>
        </div>
      </article>
    </Link>
  );
}
