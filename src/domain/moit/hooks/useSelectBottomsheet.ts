import { useRecoilState } from 'recoil';
import { selectBottomSheetAtom } from '../store/selectBottomSheetAtom';

const useSelectBottomSheet = () => {
  const [selectBottomSheetStatus, setSelectBottomSheetStatus] = useRecoilState(
    selectBottomSheetAtom,
  );
  const closeBottomSheet = () => setSelectBottomSheetStatus('none');

  return { status: selectBottomSheetStatus, close: closeBottomSheet };
};

export default useSelectBottomSheet;
