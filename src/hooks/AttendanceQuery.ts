import { useState } from 'react';
import { useQuery } from 'react-query';
import { checkIsFirst } from 'api/study/checkIsFirst';
import { getAttendanceStatus } from 'api/study/getAttendanceStatus';
import { getStudyKeyword } from 'api/study/getStudyKeyword';
import { QUERY_KEYS } from 'constants/queryKey';

export const useGetCheckIsFirst = (studyId: number) => {
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

export const useGetAttendanceStatus = (studyId: number) => {
  useQuery(QUERY_KEYS.STUDY.CHECK_IS_FIRST(studyId), () =>
    getAttendanceStatus(studyId),
  );
};

export const useGetStudyKeyword = (studyId: number) => {
  useQuery(QUERY_KEYS.STUDY.CHECK_IS_FIRST(studyId), () =>
    getStudyKeyword(studyId),
  );
};
