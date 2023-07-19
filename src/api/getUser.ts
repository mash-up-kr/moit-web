import { Response, HTTP } from 'api/http';

interface User {
  id: 0;
  nickname: string;
  profileImage: 0;
  email: string;
}

export const getUser = async () => {
  const res = await HTTP.get<Response<User>>(`/api/v1/user`);

  return res.data;
};
