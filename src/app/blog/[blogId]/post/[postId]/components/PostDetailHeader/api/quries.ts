import { useMutation } from '@tanstack/react-query';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { postFollow, deletePosting } from '.';

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

export const useDeletePosting = () => {
  const { handleSuccess } = useToastContext()!;

  return useMutation({
    mutationKey: ['delete-posting'],
    mutationFn: (postId: number) => deletePosting(postId),

    onSuccess: () => {
      handleSuccess('글을 삭제했어요.');
    },
  });
};
