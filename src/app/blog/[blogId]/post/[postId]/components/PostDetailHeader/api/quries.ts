import { useMutation } from '@tanstack/react-query';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { postFollow } from '.';

export const usePostFollow = () => {
  const { handleSuccess } = useToastContext()!;

  return useMutation({
    mutationKey: ['post-follow'],
    mutationFn: (postId: number) => postFollow(postId),

    onSuccess: () => {
      handleSuccess('팔로우 완료!');
    },
  });
};
