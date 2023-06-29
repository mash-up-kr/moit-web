import { Response, HTTP } from 'api/http';

interface CheckImFirstResSchema {
  isFirstAttendance: boolean;
}

export const checkImFirst = async (studyId: number) => {
  const res = await HTTP.get<Response<CheckImFirstResSchema>>(
    `/api/v1/study/${studyId}/attendance/is-first`,
  );

  return res.data;
};
