import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { IOSBridge } from 'bridge';

const token = window.webkit
  ? new IOSBridge().getToken()
  : 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqd3QtdXNlci3rhbjsmIHsp4AiLCJhdWQiOiJhcHBsZXxjZnlucXlubnJwQHByaXZhdGVyZWxheS5hcHBsZWlkLmNvbXwyOHzrhbjsmIHsp4AiLCJpc3MiOiJodHRwczovL2dpdGh1Yi5jb20vbWFzaC11cC1rci9NT0lULWJhY2tlbmQiLCJpYXQiOjE2OTEzMTI5ODIsImV4cCI6MTY5MzkwNDk4MiwiaW5mbyI6eyJpZCI6MjgsInByb3ZpZGVyVW5pcXVlS2V5IjoiYXBwbGV8Y2Z5bnF5bm5ycEBwcml2YXRlcmVsYXkuYXBwbGVpZC5jb20iLCJuaWNrbmFtZSI6IuuFuOyYgeyngCIsInByb2ZpbGVJbWFnZSI6NCwiZW1haWwiOiJjZnlucXlubnJwQHByaXZhdGVyZWxheS5hcHBsZWlkLmNvbSIsInJvbGVzIjpbIlVTRVIiXX19.RBH-bpJmdjBJ0Roxg-8FGOq5BHo4caEk7UqG_pFATDE';

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
