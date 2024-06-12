import { useMutation } from '@tanstack/react-query';
import { ACCESS_TOKEN, BLOG_ID } from '@/constants';
import Cookies from 'js-cookie';
import { postLogin } from '.';

export const usePostLogin = (code: string) => {
  return useMutation({
    mutationKey: ['login'],
    mutationFn: () => postLogin({ code }),

    onSuccess: ({ result: { accessToken, blogId } }) => {
      Cookies.set(ACCESS_TOKEN, accessToken);
      Cookies.set(BLOG_ID, String(blogId));
    },
  });
};
