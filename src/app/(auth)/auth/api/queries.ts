import { getQueryClient } from '@/app/lib';
import { useMutation } from '@tanstack/react-query';
import { ACCESS_TOKEN } from '@/constants';
import Cookies from 'js-cookie';
import { postLogin } from '.';

export const usePostLogin = (code: string) =>
  useMutation({
    mutationKey: ['login'],
    mutationFn: () => postLogin({ code }),

    onSuccess: ({ result: { accessToken } }) => {
      Cookies.set(ACCESS_TOKEN, accessToken);
      getQueryClient().invalidateQueries({ queryKey: ['login'] });
    },
  });
