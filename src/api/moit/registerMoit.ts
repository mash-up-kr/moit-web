import { HTTP, Response } from 'api/http';

export const registerMoit = async (payload: RegisterFormData) => {
  const res = await HTTP.post<RegisterFormData, Response<RegisterMoitResponse>>(
    `/api/v1/moit`,
    payload,
  );

  return res.data;
};

export const uploadImage = async (moitId: string, imgFile: File) => {
  const formData = new FormData();

  formData.append('moitImage', imgFile);

  await HTTP.post<FormData, Response<unknown>>(
    `/api/v1/moit/${moitId}/image`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};
