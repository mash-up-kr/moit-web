import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IOSBridge } from 'bridge';

const token = window.webkit
  ? new IOSBridge().getToken()
  : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqd3QtdXNlci3rgpjripTslbwg7LWc6rOg6rOgIiwiYXVkIjoiYXV0aDB8YWJjQG5hdmVyLmNvbXwyOHzrgpjripTslbwg7LWc6rOg6rOgIiwiaXNzIjoiaHR0cHM6Ly9naXRodWIuY29tL21hc2gtdXAta3IvTU9JVC1iYWNrZW5kIiwiaWF0IjoxNjkxNzUyMjMyLCJleHAiOjE2OTQzNDQyMzIsImluZm8iOnsiaWQiOjI4LCJwcm92aWRlclVuaXF1ZUtleSI6ImF1dGgwfGFiY0BuYXZlci5jb20iLCJuaWNrbmFtZSI6IuuCmOuKlOyVvCDstZzqs6Dqs6AiLCJwcm9maWxlSW1hZ2UiOjEsImVtYWlsIjoiYWJjQGFiYy5jb20iLCJyb2xlcyI6WyJVU0VSIl19fQ.TN21q8oZwN_bgA5E4MO1LFqBOB3m6lUuQbOUSl32wdg';

export const instance = axios.create({
  baseURL: 'https://kimbb.store/moit',
  headers: {
    'content-type': 'application/json',
    Authorization: `${token}`,
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
    config?: AxiosRequestConfig<ParamType>,
  ): Promise<AxiosResponse<ResponseType>> => instance.post(url, param, config),
};
