declare enum AttendanceStatus {
  UNDECIDED = 'UNDECIDED',
  ATTENDANCE = 'ATTENDANCE',
  LATE = 'LATE',
  ABSENCE = 'ABSENCE',
}

interface AttendantData {
  userId: number;
  nickname: string;
  profileImage: 0;
  attendanceStatus: AttendanceStatus;
  attendanceAt: Date;
}

interface StudyDetail {
  moitName: string;
  order: number;
  startAt: string; // '2023-07-29T17:06:23.416Z';
  endAt: string; // '2023-07-29T17:06:23.417Z';
  remindAt: string; // '2023-07-29T17:06:23.417Z';
  lateAt: string; // '2023-07-29T17:06:23.417Z';
  absenceAt: string; // '2023-07-29T17:06:23.417Z';
  firstAttendanceUserNickname: string; //  'string';
}
