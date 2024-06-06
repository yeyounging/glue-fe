import { useMutation, useSuspenseQuery } from '@tanstack/react-query';
import { postImage } from '@/api';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { getMyPageInfo, patchMyPageInfo } from './api';
import { MyPageResponse } from './types';

export const useMyPageInfo = (blogId: number) =>
  useSuspenseQuery({
    queryKey: ['mypage-info', blogId],
    queryFn: () => getMyPageInfo(blogId),
    select: (data) => data.result,
  });

export const usePostImage = () =>
  useMutation({
    mutationKey: ['upload-image'],
    mutationFn: (file: File) => postImage(file),
    onSuccess: (data) => {
      const { imageUrl } = data.result;
      return imageUrl;
    },
  });

export const usePatchMyPage = (blogId: number) => {
  const { handleSuccess } = useToastContext();
  return useMutation({
    mutationKey: ['patch-mypage', blogId],
    mutationFn: ({ data }: { data: Partial<MyPageResponse> }) =>
      patchMyPageInfo(blogId, data),
    onSuccess: () => {
      handleSuccess('updated !');
    },
  });
};
