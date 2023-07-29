import { useMutation } from 'react-query';
import { useSetRecoilState } from 'recoil';
import { registerMoit } from 'api/moit/registerMoit';
import { QUERY_KEYS } from 'constants/queryKey';
import { registerMoitResponseAtom } from 'screens/MoitRegisterScreen/atoms';

export const useRegisterMoit = () => {
  const setRegisterMoitResponse = useSetRecoilState(registerMoitResponseAtom);

  const { mutate, isLoading, isError } = useMutation(
    QUERY_KEYS.MOIT.REGISTER_MOIT,
    registerMoit,
    {
      onSuccess: (res) => {
        setRegisterMoitResponse({
          invitationCode: res.invitationCode,
          moitId: res.invitationCode,
        });
      },
    },
  );

  return {
    mutate,
    isLoading,
    isError,
  };
};
