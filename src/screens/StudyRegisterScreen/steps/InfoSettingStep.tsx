import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { FormLabel, FormControl, Input, Textarea } from '@chakra-ui/react';
import Button from '@components/Button';
import { InfoStepFormData } from '../../../../types/register';
import LargeBottom from '../component/LargeBottom';

interface InfoSettingStepProps {
  onNext: (data: InfoStepFormData) => void;
}

const InfoSettingStep: FC<InfoSettingStepProps> = ({ onNext }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InfoStepFormData>();

  const onSubmit = handleSubmit((values) => {
    onNext(values);
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>스터디명 (필수)</FormLabel>
        <Input
          id="name"
          placeholder="스터디명을 10자 이내로 입력해주세요"
          {...register('name', {
            required: true,
            maxLength: 10,
          })}
        />
      </FormControl>

      <FormControl>
        <FormLabel>스터디 설명 (선택)</FormLabel>
        <Textarea
          id="desc"
          placeholder="스터디명을 40자 이내로 입력해주세요"
          {...register('description', {
            maxLength: 40,
          })}
        />
      </FormControl>

      <LargeBottom>
        <Button label="다음" type="submit" isDisabled={isDisabled} />
      </LargeBottom>
    </form>
  );
};

export default InfoSettingStep;
