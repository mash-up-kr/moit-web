import { atom } from 'recoil';
import { RegisterFormData } from '../../../types/register';

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
