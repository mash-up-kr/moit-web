export const QUERY_KEYS = {
  USER: {
    ALL: ['USER'] as const,
  },
  STUDY: {
    ALL: ['STUDY'] as const,
    CHECK_IS_FIRST: (studyId: number) =>
      [...QUERY_KEYS.STUDY.ALL, 'FIRST', studyId] as const,
    GET_ATTENDANCE_STATUS: (studyId: number) =>
      [...QUERY_KEYS.STUDY.ALL, 'ATTENDANCE', 'STATUS', studyId] as const,
    GET_STUDY_KEYWORD: (studyId: number) =>
      [...QUERY_KEYS.STUDY.ALL, 'ATTENDANCE', 'KEYWORD', studyId] as const,
    GET_STUDY_DETAIL: (studyId: number) =>
      [...QUERY_KEYS.STUDY.ALL, studyId] as const,
  },
  MOIT: {
    ALL: ['MOIT'] as const,
    REGISTER_MOIT: 'REGISTER_MOIT' as const,
  },
};
