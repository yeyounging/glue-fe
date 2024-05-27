import { cn } from '@/utils';
import { Avatar, AvatarFallback, AvatarImage } from './avatar';

interface UserIconProps {
  size?: 'sm' | 'lg';
  src?: string;
}

export default function UserIcon({
  size = 'sm',
  src = 'https://i.ibb.co/gjzHDN2/Cute-Yawning-Cat.jpg',
}: UserIconProps) {
  return (
    <Avatar className={cn('w-30 h-30', size === 'lg' && 'w-56 h-56')}>
      <AvatarImage src={src} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
}
