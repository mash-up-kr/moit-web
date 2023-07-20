import { Response, HTTP } from 'api/http';

interface StudyKeywordParams {
  attendanceKeyword: string;
}

export const verifyStudyKeyword = async (
  attendanceKeyword: string,
  studyId: number,
) => {
  const res = await HTTP.post<StudyKeywordParams, Response<object>>(
    `/api/v1/study/${studyId}/attendance/keyword/verify`,
    { attendanceKeyword },
  );

  return res;
};
