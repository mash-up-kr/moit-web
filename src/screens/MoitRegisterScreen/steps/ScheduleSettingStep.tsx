import { FC, useMemo } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import DateSelectScreen from 'domain/moit/components/DateSelectScreen';
import RepeatScreen from 'domain/moit/components/RepeatScreen';
import TimeSelectBottomSheet from 'domain/moit/components/TimeSelectBottomSheet';
import { INITIAL_DATE } from 'domain/moit/constants/data';
import { useModal } from 'hooks/useModal';
import { insertZero } from 'utils/dateParser';
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
  const selectRepeatBottomsheetProps = useModal();

  const formData = useRecoilValue(registerFormDataAtom);
  const {
    handleSubmit,
    getValues,
    control,
    formState: { errors },
  } = useForm<ScheduleStepFormData>({
    defaultValues: {
      ...formData,
      repeatCycle: 'TWO_WEEK',
    },
  });

  const startTime = getValues('startTime');
  const endTime = getValues('endTime');
  const startDate = getValues('startDate');
  const endDate = getValues('endDate');
  const repeat = getValues('repeatCycle');
  const repeatCycle = useMemo(() => {
    return (
      REPEAT_CYCLE_OPTIONS.find((item) => item.value === repeat)?.label ?? ''
    );
  }, [repeat]);

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

  const {
    field: { onChange: onChangeRepeat },
  } = useController({
    name: 'repeatCycle',
    control: control,
    rules: { required: true },
  });
  const isDisabled = Object.keys(errors).length > 0;

  const timeValue = useMemo(() => {
    if (!startTime || !endTime) return '';

    return `${startTime} - ${endTime}`;
  }, [startTime, endTime]);

  const dateValue = useMemo(() => {
    if (!startDate || !endDate) return '';

    const sd = new Date(startDate);
    const ed = new Date(endDate);

    return `${sd.getMonth() + 1}월 ${sd.getDate()}일 - ${
      ed.getMonth() + 1
    }월-${ed.getDate()}일`;
  }, [startDate, endDate]);

  const initialRepeatIndex = useMemo(
    () => REPEAT_CYCLE_OPTIONS.findIndex((opt) => opt.label === repeatCycle),
    [repeatCycle],
  );

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
                value={
                  getValues('dayOfWeeks') ? getValues('dayOfWeeks')[0] : ''
                }
                onChange={(v) => field.onChange([v])}
              />
            )}
          />
        </FormItem>

        <FormItem label="시간" direction="row">
          <Input
            readOnly
            placeholder="17시 00분 - 20시 00분"
            value={timeValue}
            variant="s"
            onClick={selectTimeBottomsheetProps.showModal}
          />
        </FormItem>

        <FormItem label="반복" direction="row">
          <Input
            readOnly
            placeholder="2주"
            variant="s"
            value={repeatCycle}
            onClick={selectRepeatBottomsheetProps.showModal}
          />
        </FormItem>

        <FormItem label="진행기간" direction="row">
          <Input
            readOnly
            placeholder="6월 27일 - 8월 30일"
            value={dateValue}
            onClick={selectDateBottomsheetProps.showModal}
            variant="s"
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
                  hour: +startTime.split(':')[0],
                  minute: +startTime.split(':')[1] / 5,
                }
              : { hour: 0, minute: 0 },
            endTime: endTime
              ? {
                  hour: +endTime.split(':')[0],
                  minute: +endTime.split(':')[1] / 5,
                }
              : { hour: 0, minute: 0 },
          }}
          timeUpdate={(selected: SelctTimeParams) => {
            onChangeStartTime(
              `${insertZero(selected.startTime.hour)}:${insertZero(
                selected.startTime.minute,
              )}`,
            );
            onChangeEndTime(
              `${insertZero(selected.endTime.hour)}:${insertZero(
                selected.endTime.minute,
              )}`,
            );
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
          initialDate={{
            start: getValues('startDate')
              ? {
                  y:
                    Number(getValues('startDate').split('-')[0]) -
                    new Date().getFullYear(),
                  m: Number(getValues('startDate').split('-')[1]) - 1,
                  d: Number(getValues('startDate').split('-')[2]) - 1,
                }
              : INITIAL_DATE,
            end: getValues('endDate')
              ? {
                  y:
                    Number(getValues('endDate').split('-')[0]) -
                    new Date().getFullYear(),
                  m: Number(getValues('endDate').split('-')[1]) - 1,
                  d: Number(getValues('endDate').split('-')[2]) - 1,
                }
              : INITIAL_DATE,
          }}
        />
      )}

      {selectRepeatBottomsheetProps.modalShowing && (
        <RepeatScreen
          modalProps={selectRepeatBottomsheetProps}
          initialRepeatIndex={initialRepeatIndex}
          repeatUpdate={(v) => onChangeRepeat(v.value)}
        />
      )}
    </Box>
  );
};

export default ScheduleSettingStep;
