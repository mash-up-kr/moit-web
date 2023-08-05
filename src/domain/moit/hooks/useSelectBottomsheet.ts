import { useRecoilState } from 'recoil';
import {
  SelectBottomSheetAtom,
  selectBottomSheetAtom,
} from '../store/selectBottomSheetAtom';

const useSelectBottomSheet = () => {
  const [selectBottomSheetStatus, setSelectBottomSheetStatus] = useRecoilState(
    selectBottomSheetAtom,
  );

  const closeBottomSheet = () => setSelectBottomSheetStatus('none');

  const updateBottomSheet = (type: SelectBottomSheetAtom) => {
    setSelectBottomSheetStatus(type);
  };

  return {
    status: selectBottomSheetStatus,
    close: closeBottomSheet,
    update: updateBottomSheet,
  };
};

export default useSelectBottomSheet;
