type SelectCursor = 'start' | 'end';
type DateParams = {
  y: number;
  m: number;
  d: number;
};
type TimeParams = {
  hour: number;
  minute: number;
};

interface RegisterFormData {
  name: string;
  description: string;
  dayOfWeeks:
    | 'MONDAY'
    | 'TUESDAY'
    | 'WEDNESDAY'
    | 'THURSDAY'
    | 'FRIDAY'
    | 'SATURDAY'
    | 'SUNDAY';
  startDate: string; //yyyy-mm-dd
  endDate: string; //yyyy-mm-dd
  repeatCycle: 'NONE' | 'ONE_WEEK' | 'TWO_WEEK' | 'FOUR_WEEK';
  startTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  endTime: {
    hour: number;
    minute: number;
    second: number;
    nano: number;
  };
  lateTime: number;
  lateAmount: number;
  absenceTime: number;
  absenceAmount: number;
  isRemindActive: boolean;
  remindOption:
    | 'STUDY_DAY_10_AM'
    | 'BEFORE_1_HOUR'
    | 'BEFORE_30_MINUTE'
    | 'BEFORE_10_MINUTE'
    | null;
}

type InfoStepFormData = Pick<RegisterFormData, 'name' | 'description'>;

type ScheduleStepFormData = Pick<
  RegisterFormData,
  | 'dayOfWeeks'
  | 'startDate'
  | 'startTime'
  | 'endDate'
  | 'endTime'
  | 'repeatCycle'
>;

type RuleStepFormData = Pick<
  RegisterFormData,
  'lateTime' | 'lateAmount' | 'absenceTime' | 'absenceAmount'
>;

type NotiStepFormData = Pick<
  RegisterFormData,
  'isRemindActive' | 'remindOption'
>;
