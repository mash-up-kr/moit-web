import { atom } from 'recoil';

export const registerFormDataAtom = atom<RegisterFormData>({
  key: 'registerFormData',
  default: {} as RegisterFormData,
});

export const imageSrcAtom = atom<string>({
  key: 'imageSrc',
  default: undefined,
});

export const registerMoitResponseAtom = atom<RegisterMoitResponse>({
  key: 'registerMoitResponse',
  default: {
    moitId: '',
    invitationCode: '',
  },
});
