import { IOSBridge } from 'bridge';

const useNative = () => {
  const { nativeToast, nativeAlert } = new IOSBridge();

  return { nativeToast, nativeAlert };
};

export default useNative;
