import { atom } from 'recoil';

export const registerFormDataAtom = atom<RegisterFormData>({
  key: 'registerFormData',
  default: {} as RegisterFormData,
});

export const imageDataAtom = atom<{
  imgSrc: string;
  imgFile: File | null;
}>({
  key: 'imageSrc',
  default: {
    imgSrc: '',
    imgFile: null,
  },
});

export const registerMoitResponseAtom = atom<RegisterMoitResponse>({
  key: 'registerMoitResponse',
  default: {
    moitId: '',
    invitationCode: '',
  },
});
