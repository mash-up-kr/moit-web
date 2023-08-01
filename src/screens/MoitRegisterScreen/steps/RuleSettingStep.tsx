import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Box, Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import theme from '@styles/theme';
import MinuteScreen from 'domain/moit/components/MinuteScreen';
import { useModal } from 'hooks/useModal';
import Button from '@components/Button';
import Text from '@components/Text';
import { registerFormDataAtom } from '../atoms';
import Form from '../components/Form';
import FormItem from '../components/FormItem';
import Input from '../components/Input';
import LargeBottom from '../components/LargeBottom';

interface RuleSettingStepProps {
  onNext: (data: RuleStepFormData) => void;
}

const RuleSettingStep: FC<RuleSettingStepProps> = ({ onNext }) => {
  const registerFormData = useRecoilValue(registerFormDataAtom);
  const lateMinuteBottomSheetProps = useModal();
  const absenseMinuteBottomSheetProps = useModal();

  const {
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<RuleStepFormData>({
    defaultValues: {
      lateTime: registerFormData.lateTime ?? 10,
      lateAmount: registerFormData.lateAmount ?? 5000,
      absenceTime: registerFormData.absenceTime ?? 30,
      absenceAmount: registerFormData.absenceAmount ?? 8000,
    },
  });

  const onSubmit = handleSubmit((values) => {
    onNext(values);
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <Box>
      <Text type="h4" mb="10px">
        {'스터디 벌금 규칙을\n설정해주세요'}
      </Text>

      <Text type="p3" mb="60px" color={theme.palette.gray500}>
        {
          '클릭 한번으로 벌금을 추가할 수 있어요\n규칙은 나중에 수정할 수 있어요'
        }
      </Text>

      <Form onSubmit={onSubmit}>
        <FormItem label="지각벌금">
          <Flex justify="space-between" align="center">
            <Flex gap="10px" align="center">
              <Text type="h6">출결 후</Text>
              <Input
                value={`${getValues('lateTime')}분`}
                width={75}
                readOnly
                variant="s"
                onClick={lateMinuteBottomSheetProps.showModal}
              />
              <Text type="h6">부터 지각</Text>
            </Flex>

            <Input
              value={`${getValues('lateAmount').toLocaleString()}원`}
              variant="s"
              width={100}
              readOnly
            />
          </Flex>
        </FormItem>

        <FormItem label="결석벌금">
          <Flex justify="space-between" align="center">
            <Flex gap="10px" align="center">
              <Text type="h6">출결 후</Text>
              <Input
                value={`${getValues('absenceTime')}분`}
                width={75}
                readOnly
                variant="s"
                onClick={absenseMinuteBottomSheetProps.showModal}
              />
              <Text type="h6">부터 결석</Text>
            </Flex>

            <Input
              value={`${getValues('absenceAmount').toLocaleString()}원`}
              variant="s"
              width={100}
              readOnly
            />
          </Flex>
        </FormItem>

        <LargeBottom>
          <Button label="다음" type="submit" isDisabled={isDisabled} />
        </LargeBottom>
      </Form>

      {lateMinuteBottomSheetProps.modalShowing && (
        <MinuteScreen
          modalProps={lateMinuteBottomSheetProps}
          update={(v) => {
            setValue('lateTime', v);
          }}
        />
      )}

      {absenseMinuteBottomSheetProps.modalShowing && (
        <MinuteScreen
          modalProps={absenseMinuteBottomSheetProps}
          update={(v) => {
            setValue('absenceTime', v);
          }}
        />
      )}
    </Box>
  );
};

export default RuleSettingStep;
