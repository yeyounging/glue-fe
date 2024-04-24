import { users } from '@/app/lib/dummyData';
import UserIcon from './UserIcon';

interface ProfileCardProps {
  id?: number;
}

export default function ProfileCard({ id }: ProfileCardProps) {
  const userData = users.find((user) => user.id === id);
  if (!userData) return null;
  const {
    name = 'aeong',
    title = '이모저모 블로그',
    profile = undefined,
  } = userData;

  return (
    <article className="flex flex-row gap-10 items-end m-3">
      <UserIcon src={profile} />
      <div className="flex flex-col">
        <div className="text-[13px] text-[#626161]">{name}</div>
        <div className="text-[15px] leading-[14px]">{title}</div>
      </div>
    </article>
  );
}
