import http from './core';

interface PostImageResponse {
  imageUrl: string;
}

export const postImage = (file: File) => {
  const formData = new FormData();
  formData.append('multipartFile', file);

  return http.post<PostImageResponse>({
    url: '/blogs/images',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};
