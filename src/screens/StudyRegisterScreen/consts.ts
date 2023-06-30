import { RegisterFormData } from '../../../types/register';

export const REGISTER_STEPS = ['info', 'schedule', 'rule', 'noti'] as const;

export const DAY_OF_WEEKS_OPTIONS: {
  value: RegisterFormData['dayOfWeeks'];
  label: string;
}[] = [
  {
    value: 'MONDAY',
    label: '월',
  },
  {
    value: 'TUESDAY',
    label: '화',
  },
  {
    value: 'WEDNESDAY',
    label: '수',
  },
  {
    value: 'THURSDAY',
    label: '목',
  },
  {
    value: 'FRIDAY',
    label: '금',
  },
  {
    value: 'SATURDAY',
    label: '토',
  },
  {
    value: 'SUNDAY',
    label: '일',
  },
];

export const REPEAT_CYCLE_OPTIONS: {
  value: RegisterFormData['repeatCycle'];
  label: string;
}[] = [
  {
    value: 'NONE',
    label: '없음',
  },
  {
    value: 'ONE_WEEK',
    label: '1주',
  },
  {
    value: 'TWO_WEEK',
    label: '2주',
  },
  {
    value: 'FOUR_WEEK',
    label: '4주',
  },
];

export const REMIND_OPTIONS: {
  value: RegisterFormData['remindOption'];
  label: string;
}[] = [
  {
    value: 'STUDY_DAY_10_AM',
    label: '당일 오전 10시',
  },
  {
    value: 'BEFORE_1_HOUR',
    label: '1시간 전',
  },
  {
    value: 'BEFORE_30_MINUTE',
    label: '30분 전',
  },
  {
    value: 'BEFORE_10_MINUTE',
    label: '10분 전',
  },
];
