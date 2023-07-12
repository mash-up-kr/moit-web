import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useRecoilValue } from 'recoil';
import Button from '@components/Button';
import { InfoStepFormData } from '../../../../types/register';
import { registerFormDataAtom } from '../atoms';
import Form from '../components/Form';
import FormItem from '../components/FormItem';
import Input from '../components/Input';
import LargeBottom from '../components/LargeBottom';
import TextArea from '../components/TextArea';

interface InfoSettingStepProps {
  onNext: (data: InfoStepFormData) => void;
}

const InfoSettingStep: FC<InfoSettingStepProps> = ({ onNext }) => {
  const registerFormData = useRecoilValue(registerFormDataAtom);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<InfoStepFormData>({
    defaultValues: registerFormData,
  });
  const onSubmit = handleSubmit((values) => {
    onNext(values);
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <Form onSubmit={onSubmit}>
      <FormItem label="스터디명 (필수)">
        <Input
          placeholder="스터디명을 10자 이내로 입력해주세요"
          {...register('name', {
            required: true,
            maxLength: 10,
          })}
        />
      </FormItem>

      <FormItem label="스터디 설명 (선택)">
        <TextArea
          rows={2}
          placeholder="스터디명을 40자 이내로 입력해주세요"
          {...register('description', {
            maxLength: 40,
          })}
        />
      </FormItem>

      <LargeBottom>
        <Button label="다음" type="submit" isDisabled={isDisabled} />
      </LargeBottom>
    </Form>
  );
};

export default InfoSettingStep;
