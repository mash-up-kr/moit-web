import { FC, useMemo } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import DateSelectScreen from 'domain/moit/components/DateSelectScreen';
import TimeSelectBottomSheet from 'domain/moit/components/TimeSelectBottomSheet';
import { useModal } from 'hooks/useModal';
import Button from '@components/Button';
import Text from '@components/Text';
import { registerFormDataAtom } from '../atoms';
import ButtonSelect from '../components/ButtonSelect';
import Form from '../components/Form';
import FormItem from '../components/FormItem';
import Input from '../components/Input';
import LargeBottom from '../components/LargeBottom';
import { DAY_OF_WEEKS_OPTIONS, REPEAT_CYCLE_OPTIONS } from '../consts';

type SelctTimeParams = {
  startTime: TimeParams;
  endTime: TimeParams;
};

interface ScheduleSettingStepProps {
  onNext: (data: ScheduleStepFormData) => void;
}

const ScheduleSettingStep: FC<ScheduleSettingStepProps> = ({ onNext }) => {
  const selectTimeBottomsheetProps = useModal();
  const selectDateBottomsheetProps = useModal();
  const formData = useRecoilValue(registerFormDataAtom);
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<ScheduleStepFormData>({
    defaultValues: formData,
  });

  const startTime = getValues('startTime');
  const endTime = getValues('endTime');
  const startDate = getValues('startDate');
  const endDate = getValues('endDate');

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

  const timeValue = useMemo(() => {
    if (!startTime || !endTime) return '';

    return `${startTime.hour.toString().padStart(2, '0')}시 ${startTime.minute
      .toString()
      .padStart(2, '0')}분 - ${endTime.hour
      .toString()
      .padStart(2, '0')}시 ${endTime.minute.toString().padStart(2, '0')}분
      `;
  }, [startTime, endTime]);

  const dateValue = useMemo(() => {
    if (!startDate || !endDate) return '';

    const sd = new Date(startDate);
    const ed = new Date(endDate);

    return `${sd.getMonth() + 1}월 ${sd.getDate()}일 - ${
      ed.getMonth() + 1
    }월-${ed.getDate()}일`;
  }, [startDate, endDate]);

  return (
    <Box>
      <Text type="h4" mb="20px">
        {'스터디 진행 일정을\n모두 입력해주세요'}
      </Text>

      <Form onSubmit={onSubmit}>
        <FormItem label="스터디 날짜">
          <Controller
            control={control}
            name="dayOfWeeks"
            rules={{ required: true }}
            render={({ field }) => (
              <ButtonSelect
                options={DAY_OF_WEEKS_OPTIONS}
                value={getValues('dayOfWeeks')}
                onChange={(v) => field.onChange(v)}
              />
            )}
          />
        </FormItem>

        <FormItem label="시간" direction="row">
          <Input
            readOnly
            placeholder="17시 00분 - 20시 00분"
            value={timeValue}
            onClick={() => selectTimeBottomsheetProps.showModal()}
          />
        </FormItem>

        <FormItem label="반복" direction="row">
          <Controller
            control={control}
            name="repeatCycle"
            render={({ field }) => (
              <Input
                readOnly
                placeholder="2주"
                value={
                  REPEAT_CYCLE_OPTIONS.find(
                    (item) => item.value === getValues('repeatCycle'),
                  )?.label ?? ''
                }
                onClick={() => {
                  // TODO: 팝업띄우기
                  // REPEAT_CYCLE_OPTIONS , field.onChange() 사용해주세용
                  console.log(REPEAT_CYCLE_OPTIONS);
                  field.onChange('TWO_WEEK');
                }}
              />
            )}
          />
        </FormItem>

        <FormItem label="진행기간" direction="row">
          <Input
            readOnly
            placeholder="6월 27일 - 8월 30일"
            value={dateValue}
            onClick={() => selectDateBottomsheetProps.showModal()}
          />
        </FormItem>
        <LargeBottom>
          <Button label="다음" type="submit" isDisabled={isDisabled} />
        </LargeBottom>
      </Form>
      {selectTimeBottomsheetProps.modalShowing && (
        <TimeSelectBottomSheet
          modalProps={selectTimeBottomsheetProps}
          initialTime={{
            startTime: startTime
              ? {
                  hour: startTime.hour,
                  minute: startTime.minute,
                }
              : { hour: 0, minute: 0 },
            endTime: endTime
              ? { hour: endTime.hour, minute: endTime.minute }
              : { hour: 0, minute: 0 },
          }}
          timeUpdate={(selected: SelctTimeParams) => {
            onChangeStartTime({
              hour: selected.startTime.hour,
              minute: selected.startTime.minute,
              second: 0,
              nano: 0,
            });
            onChangeEndTime({
              hour: selected.endTime.hour,
              minute: selected.endTime.minute,
              second: 0,
              nano: 0,
            });
          }}
        />
      )}
      {selectDateBottomsheetProps.modalShowing && (
        <DateSelectScreen
          modalProps={selectDateBottomsheetProps}
          dateUpdate={(start: string, end: string) => {
            onChangeStartDate(start);
            onChangeEndDate(end);
          }}
        />
      )}
    </Box>
  );
};

export default ScheduleSettingStep;
