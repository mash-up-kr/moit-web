import axios, { AxiosError, AxiosResponse } from 'axios';

export const instance = axios.create({
  headers: {
    'content-type': 'application/json',
  },
});

export interface Response<T> {
  success: boolean;
  data: T;
  error: {
    code: string;
    message: string;
  } | null;
}

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  (error: AxiosError) => {
    return Promise.reject(error);
  },
);

export const HTTP = {
  get: <ResponseType>(url: string): Promise<AxiosResponse<ResponseType>> =>
    instance.get(url),
  post: <ParamType, ResponseType>(
    url: string,
    param?: ParamType,
  ): Promise<AxiosResponse<ResponseType>> => instance.post(url, param),
};
