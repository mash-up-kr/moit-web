import { FC } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Grid, Box, Image, Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import notiImage from '@assets/images/new-notification.png';
import theme from '@styles/theme';
import Button from '@components/Button';
import Text from '@components/Text';
import { registerFormDataAtom } from '../atoms';
import Form from '../components/Form';
import FormItem from '../components/FormItem';
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
    onNext({
      remindOption: values.remindOption,
      isRemindActive: values.remindOption !== null,
    });
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <Box>
      <Text type="h4" mb="10px">
        {'스터디 리마인드 알림을\n설정할까요?'}
      </Text>

      <Text type="p3" color={theme.palette.gray500}>
        {
          '알림을 필요하다면 원하는 알람 일시를 선택해주세요\n모잇이 자동으로 알람을 보내줘요'
        }
      </Text>

      <Flex justify="center" align="center" mb="30px" mt="30px">
        <Image src={notiImage} alt="noti_image" w="200px" h="100px" />
      </Flex>

      <Form onSubmit={onSubmit}>
        <FormItem label="스터디 리마인드 알림">
          <Controller
            control={control}
            name="remindOption"
            render={({ field }) => (
              <Grid templateColumns="repeat(2, 1fr)" gap="10px">
                {REMIND_OPTIONS.map((item) => (
                  <Button
                    type="button"
                    key={item.value}
                    size="s"
                    isDisabled={getValues('remindOption') !== item.value}
                    disabled={false}
                    onClick={() => {
                      if (getValues('remindOption') === item.value) {
                        return field.onChange(null);
                      }
                      field.onChange(item.value);
                    }}
                  >
                    {item.label}
                  </Button>
                ))}
              </Grid>
            )}
          />
        </FormItem>

        <LargeBottom>
          <Button label="다음" type="submit" isDisabled={isDisabled} />
        </LargeBottom>
      </Form>
    </Box>
  );
};

export default NotiSettingStep;
