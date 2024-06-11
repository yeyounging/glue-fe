import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { useMutation } from '@tanstack/react-query';
import { postSubscibe } from '.';

export const usePostSubscribe = (blogId: number, isSubscribe: boolean) => {
  const { handleSuccess } = useToastContext();

  return useMutation({
    mutationKey: ['blog-subscribe-onoff'],
    mutationFn: () => postSubscibe(blogId),

    onSuccess: () => {
      if (isSubscribe) {
        handleSuccess('구독 취소 !');
      } else {
        handleSuccess('구독 완료 !');
      }
    },
  });
};
