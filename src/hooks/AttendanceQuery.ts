import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { checkIsFirst } from 'api/study/checkIsFirst';
import { getAttendanceStatus } from 'api/study/getAttendanceStatus';
import { getStudyDetail } from 'api/study/getStudyDetail';
import { getStudyKeyword } from 'api/study/getStudyKeyword';
import { registerStudyKeyword } from 'api/study/registerStudyKeyword';
import { verifyStudyKeyword } from 'api/study/verifyStudyKeyword';
import { nativeToast } from 'bridge';
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

export const useGetStudyDetail = (studyId: number) => {
  const { data, isLoading, isError } = useQuery(
    QUERY_KEYS.STUDY.GET_STUDY_DETAIL(studyId),
    () => getStudyDetail(studyId),
  );

  return {
    studyDetailData: data?.data,
    isLoading,
    isError,
  };
};

export const useRegisterKeyword = (keyword: string, studyId: number) => {
  const navigate = useNavigate();
  const { mutate, data, isLoading, isError } = useMutation(
    QUERY_KEYS.STUDY.REGISTER_KEYWORD(studyId),
    () => registerStudyKeyword(keyword, studyId),
    {
      onSuccess: () => {
        navigate(`/attendanceResult?studyId=${studyId}`);
      },
      onError: (err: any) => {
        // TODO: 에러처리 개선
        const message = err.response.data.error.message;
        console.log(message);
        nativeToast(
          '아뿔싸! 이미 출석체크 키워드가 등록됐어요.\n공유받은 키워드를 입력해주세요.',
        );
      },
    },
  );

  return {
    registerKeyword: mutate,
    data,
    isLoading,
    isError,
  };
};

export const useVerifyKeyword = (keyword: string, studyId: number) => {
  const navigate = useNavigate();

  const { mutate, data, isLoading, isError } = useMutation(
    QUERY_KEYS.STUDY.VERIFY_KEYWORD(studyId),
    () => verifyStudyKeyword(keyword, studyId),
    {
      onSuccess: () => {
        navigate(`/attendanceResult?studyId=${studyId}`);
      },
      onError: (err: any) => {
        // TODO: 에러처리 개선
        const message = err.response.data.error.message;
        nativeToast(message || '실패');
      },
    },
  );

  return {
    verifyKeyword: mutate,
    data,
    isLoading,
    isError,
  };
};

export const useGetAttendanceStatus = (studyId: number) => {
  const { data } = useQuery(
    QUERY_KEYS.STUDY.GET_ATTENDANCE_STATUS(studyId),
    () => getAttendanceStatus(studyId),
  );

  return data?.data || [];
};

export const useGetStudyKeyword = (studyId: number) => {
  const [attendanceKeyword, setAttendanceKeyword] = useState('');

  const { isLoading } = useQuery(
    QUERY_KEYS.STUDY.GET_STUDY_KEYWORD(studyId),
    () => getStudyKeyword(studyId),
    {
      onSuccess: (res) => setAttendanceKeyword(res.data.attendanceKeyword),
    },
  );

  return { isLoading, attendanceKeyword };
};
