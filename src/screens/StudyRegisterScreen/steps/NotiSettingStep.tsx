import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  Button as ChakraButton,
  Grid,
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import Button from '@components/Button';
import { NotiStepFormData } from '../../../../types/register';
import { registerFormDataAtom } from '../atoms';
import LargeBottom from '../components/LargeBottom';
import { REMIND_OPTIONS } from '../consts';

interface NotiSettingStepProps {
  onNext: (values: NotiStepFormData) => void;
}

const NotiSettingStep: FC<NotiSettingStepProps> = ({ onNext }) => {
  const registerFormData = useRecoilValue(registerFormDataAtom);

  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<NotiStepFormData>({
    defaultValues: registerFormData,
  });

  const onSubmit = handleSubmit((values) => {
    onNext(values);
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>스터디 리마인드 알림</FormLabel>
        <Controller
          control={control}
          name="remindOption"
          render={({ field }) => (
            <Grid templateColumns="repeat(2, 1fr)" gap="10px">
              {REMIND_OPTIONS.map((item) => (
                <ChakraButton
                  key={item.value}
                  onClick={() => field.onChange(item.value)}
                  isActive={getValues('remindOption') === item.value}
                >
                  {item.label}
                </ChakraButton>
              ))}
            </Grid>
          )}
        />
      </FormControl>

      <LargeBottom>
        <Button label="다음" type="submit" isDisabled={isDisabled} />
      </LargeBottom>
    </form>
  );
};

export default NotiSettingStep;
