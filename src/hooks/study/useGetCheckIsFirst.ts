import { useState } from 'react';
import { useQuery } from 'react-query';
import { checkIsFirst } from 'api/study/checkIsFirst';
import { QUERY_KEYS } from 'constants/queryKey';

const useGetCheckIsFirst = (studyId: number) => {
  const [isFirst, setIsFirst] = useState<boolean>(false);

  const { isLoading } = useQuery(
    QUERY_KEYS.STUDY.CHECK_IS_FIRST(studyId),
    () => checkIsFirst(studyId),
    {
      onSuccess: (res) => setIsFirst(res.data.isFirstAttendance),
    },
  );

  return { isFirst, isLoading };
};

export default useGetCheckIsFirst;
