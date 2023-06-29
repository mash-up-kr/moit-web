import { atom } from 'recoil';
import { RegisterFormData } from '../../../types/register';

export const registerFormDataAtom = atom<RegisterFormData>({
  key: 'registerFormData',
  default: {} as RegisterFormData,
});
