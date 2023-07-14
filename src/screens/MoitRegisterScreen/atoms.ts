import { atom } from 'recoil';

export const registerFormDataAtom = atom<RegisterFormData>({
  key: 'registerFormData',
  default: {
    // 임시
    lateTime: 10,
    lateAmount: 5000,
    absenceTime: 30,
    absenceAmount: 8000,
  } as RegisterFormData,
});
