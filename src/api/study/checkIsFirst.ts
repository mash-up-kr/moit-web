import { Response, HTTP } from 'api/http';

interface CheckIsFirstResSchema {
  isFirstAttendance: boolean;
}

export const checkIsFirst = async (studyId: number) => {
  const res = await HTTP.get<Response<CheckIsFirstResSchema>>(
    `/api/v1/study/${studyId}/attendance/is-first`,
  );

  return res.data;
};
