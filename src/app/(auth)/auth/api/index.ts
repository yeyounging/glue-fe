import http from '@/api/core';

export interface LoginResponse {
  accessToken: string;
  refreshToken: string;
  blogId: number;
}

export const postLogin = ({ code }: { code: string }) =>
  http.post<LoginResponse>({
    url: '/auths/login',
    params: { code },
  });

export const postLogout = () => http.post({ url: '/auths/logout' });
