import { useMutation } from '@tanstack/react-query';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { postGenerateSticker } from '.';

export const useGenerateSticker = () => {
  const { toastId, handleLoading, handleSuccess } = useToastContext();
  const tId = toastId;

  return useMutation({
    mutationKey: ['generate-sticker'],
    mutationFn: (query: string) => postGenerateSticker(query),

    onMutate: () => {
      handleLoading(
        <div>
          이미지 생성중..
          <br />약 15초 정도 소요돼요.
        </div>,
        { id: tId },
      );
    },
    onSuccess: () => {
      handleSuccess('이미지 생성 완료', { id: tId });
    },
  });
};
