import { useState } from 'react';
import { useQuery } from 'react-query';
import { checkImFirst } from 'api/study/checkImFirst';
import { QUERY_KEYS } from 'constants/queryKey';

const useGetCheckImFirst = (studyId: number) => {
  const [imFirst, setImFirst] = useState<boolean>(false);

  const { isLoading } = useQuery(
    QUERY_KEYS.STUDY.CHECK_IM_FIRST(studyId),
    () => checkImFirst(studyId),
    {
      onSuccess: (res) => setImFirst(res.data.isFirstAttendance),
    },
  );

  return { imFirst, isLoading };
};

export default useGetCheckImFirst;
