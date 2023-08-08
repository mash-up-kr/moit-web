import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IOSBridge } from 'bridge';

const token = window.webkit
  ? new IOSBridge().getToken()
  : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqd3QtdXNlci1kZWZhdWx0IiwiYXVkIjoiYXV0aDB8YWJjQG5hdmVyLmNvbXw3fGRlZmF1bHQiLCJpc3MiOiJodHRwczovL2dpdGh1Yi5jb20vbWFzaC11cC1rci9NT0lULWJhY2tlbmQiLCJpYXQiOjE2ODg4ODkyOTMsImV4cCI6MTY5MTQ4MTI5MywiaW5mbyI6eyJpZCI6NywicHJvdmlkZXJVbmlxdWVLZXkiOiJhdXRoMHxhYmNAbmF2ZXIuY29tIiwibmlja25hbWUiOiJkZWZhdWx0IiwicHJvZmlsZUltYWdlIjowLCJlbWFpbCI6ImFiY0BuYXZlci5jb20iLCJyb2xlcyI6WyJVU0VSIl19fQ.o9WjiGqNOZSkHGDKQ54b50TUEy-oWvPo1-5Egjw1HXc';

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
