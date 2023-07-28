import { HTTP } from 'api/http';

export const registerMoit = async (payload: RegisterFormData) => {
  const res = await HTTP.post<RegisterFormData, RegisterMoitResponse>(
    `/api/v1/moit`,
    payload,
  );

  return res.data;
};
