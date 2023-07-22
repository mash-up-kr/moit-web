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
  status: AttendanceStatus;
  attendanceAt: Date;
}
