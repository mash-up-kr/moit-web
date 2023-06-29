// const SAMPLE = {
//   name: 'string',
//   description: 'string',
//   dayOfWeeks: ['MONDAY'],
//   startDate: '2023-06-29',
//   endDate: '2023-06-29',
//   repeatCycle: 'NONE',
//   startTime: {
//     hour: 0,
//     minute: 0,
//     second: 0,
//     nano: 0,
//   },
//   endTime: {
//     hour: 0,
//     minute: 0,
//     second: 0,
//     nano: 0,
//   },
//   lateTime: 0,
//   lateAmount: 0,
//   absenceTime: 0,
//   absenceAmount: 0,
//   isRemindActive: true,
//   remindOption: 'STUDY_DAY_10_AM',
// };

export interface RegisterFormData {
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
  repeatCycle: 'NONE' | ' ONE_WEEK' | 'TWO_WEEK' | 'FOUR_WEEK';
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
    | 'BEFORE_10_MINUTE';
}

export type InfoStepFormData = Pick<RegisterFormData, 'name' | 'description'>;

export type ScheduleStepFormData = Pick<
  RegisterFormData,
  'dayOfWeeks' | 'startDate' | 'startTime' | 'endDate' | 'endTime'
>;

export type RuleStepFormData = Pick<
  RegisterFormData,
  'lateTime' | 'lateAmount' | 'absenceTime' | 'absenceAmount'
>;

export type NotiStepFormData = Pick<
  RegisterFormData,
  'isRemindActive' | 'remindOption'
>;
