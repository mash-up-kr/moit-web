import { Response, HTTP } from 'api/http';

interface AttendanceKeyword {
  attendanceKeyword: string;
}

export const getStudyKeyword = async (studyId: number) => {
  const res = await HTTP.get<Response<AttendanceKeyword>>(
    `/api/v1/study/${studyId}/attendance/keyword`,
  );

  return res.data;
};
