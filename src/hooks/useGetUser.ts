import { useQuery } from 'react-query';
import { getUser } from 'api/getUser';
import { QUERY_KEYS } from 'constants/queryKey';

export const useGetUser = () => {
  const { data } = useQuery(QUERY_KEYS.USER.ALL, () => getUser());

  return data?.data;
};
