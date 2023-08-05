import { useRecoilState } from 'recoil';
import { SelectBottomSheetType, selectBottomSheetAtom } from '../atoms';

const useSelectBottomSheet = () => {
  const [selectBottomSheetStatus, setSelectBottomSheetStatus] = useRecoilState(
    selectBottomSheetAtom,
  );

  const closeBottomSheet = () => setSelectBottomSheetStatus('none');

  const updateBottomSheet = (type: SelectBottomSheetType) => {
    setSelectBottomSheetStatus(type);
  };

  return {
    status: selectBottomSheetStatus,
    close: closeBottomSheet,
    update: updateBottomSheet,
  };
};

export default useSelectBottomSheet;
