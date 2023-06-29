import { FC } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import {
  FormLabel,
  FormControl,
  Select,
  Button as ChakraButton,
} from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import Button from '@components/Button';
import { ScheduleStepFormData } from '../../../../types/register';
import { registerFormDataAtom } from '../atoms';
import LargeBottom from '../component/LargeBottom';

interface ScheduleSettingStepProps {
  onNext: (data: ScheduleStepFormData) => void;
}

const DAY_OF_WEEKS_OPTIONS: {
  value: ScheduleStepFormData['dayOfWeeks'];
  label: string;
}[] = [
  {
    value: 'MONDAY',
    label: '월',
  },
  {
    value: 'TUESDAY',
    label: '화',
  },
  {
    value: 'WEDNESDAY',
    label: '수',
  },
  {
    value: 'THURSDAY',
    label: '목',
  },
  {
    value: 'FRIDAY',
    label: '금',
  },
  {
    value: 'SATURDAY',
    label: '토',
  },
  {
    value: 'SUNDAY',
    label: '일',
  },
];

const REPEAT_CYCLE_OPTIONS: {
  value: ScheduleStepFormData['repeatCycle'];
  label: string;
}[] = [
  {
    value: 'NONE',
    label: '없음',
  },
  {
    value: 'ONE_WEEK',
    label: '1주',
  },
  {
    value: 'TWO_WEEK',
    label: '2주',
  },
  {
    value: 'FOUR_WEEK',
    label: '4주',
  },
];

const ScheduleSettingStep: FC<ScheduleSettingStepProps> = ({ onNext }) => {
  const formData = useRecoilValue(registerFormDataAtom);

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ScheduleStepFormData>({
    defaultValues: formData,
  });

  const onSubmit = handleSubmit((values) => {
    onNext(values);
  });

  /** Custom Controller를 만들어서 onChange 함수만 뽑아냄 */
  const {
    field: { onChange: onChangeStartTime },
  } = useController({
    name: 'startTime',
    control: control,
    rules: { required: true },
  });

  const {
    field: { onChange: onChangeEndTime },
  } = useController({
    name: 'endTime',
    control: control,
    rules: { required: true },
  });

  const {
    field: { onChange: onChangeStartDate },
  } = useController({
    name: 'startDate',
    control: control,
    rules: { required: true },
  });

  const {
    field: { onChange: onChangeEndDate },
  } = useController({
    name: 'endDate',
    control: control,
    rules: { required: true },
  });

  const isDisabled = Object.keys(errors).length > 0;

  return (
    <form onSubmit={onSubmit}>
      <FormControl>
        <FormLabel>스터디 날짜</FormLabel>
        <Controller
          control={control}
          name="dayOfWeeks"
          rules={{ required: true }}
          render={({ field }) => (
            <Select {...field}>
              {DAY_OF_WEEKS_OPTIONS.map((item) => (
                <option key={item.value} value={item.label}>
                  {item.label}
                </option>
              ))}
            </Select>
          )}
        />
      </FormControl>

      <FormControl>
        <FormLabel>시간</FormLabel>
        <ChakraButton
          onClick={() => {
            onChangeStartTime({
              hour: 1,
              minute: 0,
              second: 0,
              nano: 0,
            });
            onChangeEndTime({
              hour: 2,
              minute: 5,
              second: 0,
              nano: 0,
            });
          }}
        >
          클릭시 자동등록 (임시)
        </ChakraButton>
      </FormControl>

      <FormControl>
        <FormLabel>반복</FormLabel>

        <Controller
          control={control}
          name="repeatCycle"
          render={({ field }) => (
            <Select {...field}>
              {REPEAT_CYCLE_OPTIONS.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.label}
                </option>
              ))}
            </Select>
          )}
        />
      </FormControl>

      <FormControl>
        <FormLabel>진행기간</FormLabel>
        <ChakraButton
          onClick={() => {
            onChangeStartDate('2011-11-23');
            onChangeEndDate('2022-11-23');
          }}
        >
          클릭시 자동등록 (임시)
        </ChakraButton>
      </FormControl>

      <LargeBottom>
        <Button label="다음" type="submit" isDisabled={isDisabled} />
      </LargeBottom>
    </form>
  );
};

export default ScheduleSettingStep;
