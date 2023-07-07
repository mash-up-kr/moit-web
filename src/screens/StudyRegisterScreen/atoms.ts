import { atom } from 'recoil';
//TODO: 영지 PR 머지 후 시간 유틸 함수에 추가
const initialData: CreateMoitFormData = {
  dayOfWeeks: 'MONDAY',
  startDate: '',
  endDate: '',
  startTime: {
    hour: 0,
    minute: 0,
    second: 0,
    nano: 0,
  },
  endTime: {
    hour: 0,
    minute: 0,
    second: 0,
    nano: 0,
  },
  name: '',
  isRemindActive: false,
  repeatCycle: 'NONE',

  lateTime: 0,
  lateAmount: 0,
  absenceTime: 0,
  absenceAmount: 0,
};

export const registerFormDataAtom = atom<CreateMoitFormData>({
  key: 'registerFormData',
  default: initialData,
});
