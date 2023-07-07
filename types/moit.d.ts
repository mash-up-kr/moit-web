type TimeZoneCursor = 'start' | 'end';
interface Time {
  hour: number;
  minute: number;
  second: number;
  nano: number;
}

interface CreateMoitFormData {
  name: string;
  description?: string;
  dayOfWeeks:
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY';
  startDate: string;
  endDate: string;
  repeatCycle: 'NONE' | 'ONE_WEEK' | 'TWO_WEEK' | 'FOUR_WEEK';
  startTime: Time;
  endTime: Time;
  lateTime: number;
  lateAmount: number;
  absenceTime: number;
  absenceAmount: number;
  isRemindActive: boolean;
  remindOption?:
    | 'STUDY_DAY_10_AM'
    | 'BEFORE_1_HOUR'
    | 'BEFORE_30_MINUTE'
    | 'BEFORE_10_MINUTE';
}

type InfoStepFormData = Pick<CreateMoitFormData, 'name' | 'description'>;

type ScheduleStepFormData = Pick<
  CreateMoitFormData,
  | 'dayOfWeeks'
  | 'startDate'
  | 'startTime'
  | 'endDate'
  | 'endTime'
  | 'repeatCycle'
>;

type RuleStepFormData = Pick<
  CreateMoitFormData,
  'lateTime' | 'lateAmount' | 'absenceTime' | 'absenceAmount'
>;

type NotiStepFormData = Pick<
  CreateMoitFormData,
  'isRemindActive' | 'remindOption'
>;
