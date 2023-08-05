import { atom } from 'recoil';
import { ATOM_KEYS } from 'constants/atomKeys';

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

export type SelectBottomSheetType = 'none' | 'date' | 'repeat' | 'time';

export const selectBottomSheetAtom = atom<SelectBottomSheetType>({
  key: ATOM_KEYS.MOIT_REGISTER_SELECT_BOTTOM_SHEET_STATUS,
  default: 'none',
});
