import { atom } from 'recoil';
import { ATOM_KEYS } from '../constants/atomKeys';

export type SelectBottomSheetAtom = 'none';

export const selectBottomSheetAtom = atom<SelectBottomSheetAtom>({
  key: ATOM_KEYS.MOIT_REGISTER_SELECT_BOTTOM_SHEET_STATUS,
  default: 'none',
});
