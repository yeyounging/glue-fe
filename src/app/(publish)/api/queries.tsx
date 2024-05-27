import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { safeSeesionStorage } from '@/utils';
import { postBlogPost, BlogPostRequest } from '.';

export const usePost = (id: number) => {
  const { push } = useRouter();
  const { handleSuccess, handleError, handleLoading, toastId } =
    useToastContext()!;

  return useMutation({
    mutationKey: ['post', id],
    mutationFn: (post: BlogPostRequest) => postBlogPost(post),

    onMutate: () => {
      handleLoading('게시물 등록 중');
    },

    onSuccess: () => {
      handleSuccess('게시글 등록 완료!', { id: toastId });
      safeSeesionStorage.clear();
      push('/');
    },

    onError: () => {
      handleError(
        <div>
          게시글 등록에 실패했습니다.
          <br />
          잠시 후 다시 시도해주세요.
        </div>,
      );
    },
  });
};
