import { Response, HTTP } from 'api/http';

interface UserData {
  userId: number;
  nickname: string;
  profileImage: number;
  attendanceStatus: AttendanceStatus;
  attendanceAt: Date;
}

export const getAttendanceStatus = async (studyId: number) => {
  const res = await HTTP.get<Response<UserData[]>>(
    `/api/v1/study/${studyId}/attendance/status`,
  );

  return res.data;
};
