import { useCallback } from 'react';
import { useToastContext } from '@/components/Common/Toast/ToastProvider';
import { usePatchMyPage, usePostImage } from '../MyPageFetcher/queries';
import { useMyPageContext } from '../MyPageFetcher/MyPageContext';

export default function useSave() {
  const { myPageData, setMyPageData, blogId } = useMyPageContext();
  const { mutate } = usePatchMyPage(blogId);
  const { mutateAsync } = usePostImage();
  const { handleError } = useToastContext();

  const handleSave = useCallback(() => {
    mutate({
      data: myPageData,
    });
  }, [mutate, myPageData]);

  const handlePostImage = useCallback(
    async (file: File, type: 'profile' | 'background') => {
      try {
        const { result } = await mutateAsync(file);
        const { imageUrl } = result;
        setMyPageData((prevData) => ({
          ...prevData,
          [type]: imageUrl,
        }));
      } catch (error) {
        handleError('Error uploading image');
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [mutateAsync, setMyPageData],
  );

  return { handleSave, handlePostImage };
}
