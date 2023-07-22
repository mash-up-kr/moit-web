import { Response, HTTP } from 'api/http';

export const getAttendanceStatus = async (studyId: number) => {
  const res = await HTTP.get<Response<AttendantData[]>>(
    `/api/v1/study/${studyId}/attendance/status`,
  );

  return res.data;
};
