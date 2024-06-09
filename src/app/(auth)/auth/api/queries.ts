import { getQueryClient } from '@/app/lib';
import { useMutation } from '@tanstack/react-query';
import { ACCESS_TOKEN } from '@/constants';
import Cookies from 'js-cookie';
import { useUserContext } from '@/components/Common';
import { postLogin } from '.';

export const usePostLogin = (code: string) => {
  const { setLoginId } = useUserContext();

  return useMutation({
    mutationKey: ['login'],
    mutationFn: () => postLogin({ code }),

    onSuccess: ({ result: { accessToken, blogId } }) => {
      Cookies.set(ACCESS_TOKEN, accessToken);
      setLoginId(blogId);
      getQueryClient().invalidateQueries({ queryKey: ['login'] });
    },
  });
};
