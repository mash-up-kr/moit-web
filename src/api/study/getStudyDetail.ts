import { HTTP, Response } from 'api/http';

export const getStudyDetail = async (studyId: number) => {
  const res = await HTTP.get<Response<StudyDetail>>(`/api/v1/study/${studyId}`);

  return res.data;
};
