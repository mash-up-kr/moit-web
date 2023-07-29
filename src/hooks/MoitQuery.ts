import { useMutation } from 'react-query';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { registerMoit, uploadImage } from 'api/moit/registerMoit';
import { QUERY_KEYS } from 'constants/queryKey';
import {
  imageDataAtom,
  registerMoitResponseAtom,
} from 'screens/MoitRegisterScreen/atoms';

export const useRegisterMoit = () => {
  const setRegisterMoitResponse = useSetRecoilState(registerMoitResponseAtom);
  const { imgFile } = useRecoilValue(imageDataAtom);

  const { mutate, isLoading, isError } = useMutation(
    QUERY_KEYS.MOIT.REGISTER_MOIT,
    registerMoit,
    {
      onSuccess: (res) => {
        setRegisterMoitResponse({
          invitationCode: res.data.invitationCode,
          moitId: res.data.moitId,
        });

        if (imgFile) {
          uploadImage(res.data.moitId, imgFile);
        }
      },
    },
  );

  return {
    mutate,
    isLoading,
    isError,
  };
};
