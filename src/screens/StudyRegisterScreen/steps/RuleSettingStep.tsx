import { FC } from 'react';
import { useForm } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  Button as ChakraButton,
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import Button from '@components/Button';
import { RuleStepFormData } from '../../../../types/register';
import { registerFormDataAtom } from '../atoms';
import LargeBottom from '../component/LargeBottom';

interface RuleSettingStepProps {
  onNext: (data: RuleStepFormData) => void;
}

const RuleSettingStep: FC<RuleSettingStepProps> = ({ onNext }) => {
  const registerFormData = useRecoilValue(registerFormDataAtom);

  const {
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<RuleStepFormData>({
    defaultValues: registerFormData,
  });

  const onSubmit = handleSubmit((values) => {
    onNext(values);
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>지각벌금</FormLabel>
        출결 후<ChakraButton>{getValues('lateTime')}분</ChakraButton>
        부터 지각 <ChakraButton>{getValues('lateAmount')}원</ChakraButton>
      </FormControl>

      <FormControl>
        <FormLabel>결석벌금</FormLabel>
        출결 후<ChakraButton>{getValues('absenceTime')}분</ChakraButton>
        부터 지각 <ChakraButton>{getValues('absenceAmount')}원</ChakraButton>
      </FormControl>

      <LargeBottom>
        <Button label="다음" type="submit" isDisabled={isDisabled} />
      </LargeBottom>
    </form>
  );
};

export default RuleSettingStep;
