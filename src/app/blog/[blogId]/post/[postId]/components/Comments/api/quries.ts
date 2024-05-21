import { useMutation } from '@tanstack/react-query';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { postLike } from '.';

export const usePostLike = () => {
  const { handleSuccess } = useToastContext()!;

  return useMutation({
    mutationKey: ['post-like'],
    mutationFn: (postId: number) => postLike(postId),

    onSuccess: () => {
      handleSuccess('좋아요를 표시했어요!');
    },
  });
};
