import { atom } from 'recoil';

export const registerFormDataAtom = atom<RegisterFormData>({
  key: 'registerFormData',
  default: {} as RegisterFormData,
});
