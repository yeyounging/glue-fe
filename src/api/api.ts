import http from './core';

export const postImage = (file: File) => {
  const formData = new FormData();
  formData.append('multipartFile', file);

  return http.post<{ imageUrl: string }>({
    url: '/blogs/images',
    data: formData,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default postImage;
