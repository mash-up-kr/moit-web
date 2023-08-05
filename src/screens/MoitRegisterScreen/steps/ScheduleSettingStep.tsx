import { FC, useMemo } from 'react';
import { Controller, useController, useForm } from 'react-hook-form';
import { Box } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import { useModal } from 'hooks/useModal';
import DateSelectScreen from 'screens/MoitRegisterScreen/components/DateSelectScreen';
import { insertZero } from 'utils/dateParser';
import Button from '@components/Button';
import Text from '@components/Text';
import { SelectBottomSheetType, registerFormDataAtom } from '../atoms';
import ButtonSelect from '../components/ButtonSelect';
import Form from '../components/Form';
import FormItem from '../components/FormItem';
import Input from '../components/Input';
import LargeBottom from '../components/LargeBottom';
import RepeatScreen from '../components/RepeatScreen';
import SelectBottomSheet from '../components/SelectBottomSheet';
import TimeSelectScreen from '../components/TimeSelectScreen';
import {
  DAY_OF_WEEKS_OPTIONS,
  INITIAL_DATE,
  REPEAT_CYCLE_OPTIONS,
} from '../consts';
import useSelectBottomSheet from '../hooks/useSelectBottomsheet';

type SelctTimeParams = {
  startTime: TimeParams;
  endTime: TimeParams;
};

interface ScheduleSettingStepProps {
  onNext: (data: ScheduleStepFormData) => void;
}

const ScheduleSettingStep: FC<ScheduleSettingStepProps> = ({ onNext }) => {
  const selectBottomSheetProps = useModal();
  const { status, close, update } = useSelectBottomSheet();

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

  const handleBottomSheetpOpen = (type: SelectBottomSheetType) => {
    if (type === 'none' && selectBottomSheetProps.modalShowing) {
      selectBottomSheetProps.hideModal();
      close();
    } else {
      update(type);
      if (!selectBottomSheetProps.modalShowing) {
        selectBottomSheetProps.showModal();
      }
    }
  };

  const bottomSheetTitle = useMemo(() => {
    switch (status) {
      case 'time': {
        return '시간 선택';
      }

      case 'date': {
        return '날짜 선택';
      }

      case 'repeat': {
        return '반복 선택';
      }

      default: {
        return '';
      }
    }
  }, [status]);

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

  const selectBottomSheetFactory = useMemo(() => {
    console.log(Number(startTime.split(':')[0]));

    switch (status) {
      case 'time': {
        return (
          <TimeSelectScreen
            initialTime={{
              startTime: startTime
                ? {
                    hour: Number(startTime.split(':')[0]),
                    minute: Number(startTime.split(':')[1]) / 5,
                  }
                : { hour: 0, minute: 0 },
              endTime: endTime
                ? {
                    hour: Number(endTime.split(':')[0]),
                    minute: Number(endTime.split(':')[1]) / 5,
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
              close();
            }}
          />
        );
      }

      case 'date': {
        return (
          <DateSelectScreen
            dateUpdate={(start: string, end: string) => {
              onChangeStartDate(start);
              onChangeEndDate(end);
              close();
            }}
            initialDate={{
              startDate: getValues('startDate')
                ? {
                    y:
                      Number(getValues('startDate').split('-')[0]) -
                      new Date().getFullYear(),
                    m: Number(getValues('startDate').split('-')[1]) - 1,
                    d: Number(getValues('startDate').split('-')[2]) - 1,
                  }
                : INITIAL_DATE,
              endDate: getValues('endDate')
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
        );
      }

      case 'repeat': {
        return (
          <RepeatScreen
            initialRepeatIndex={initialRepeatIndex}
            repeatUpdate={(v) => onChangeRepeat(v.value)}
            modalClose={close}
          />
        );
      }
    }
  }, [
    close,
    endTime,
    getValues,
    initialRepeatIndex,
    onChangeEndDate,
    onChangeEndTime,
    onChangeRepeat,
    onChangeStartDate,
    onChangeStartTime,
    startTime,
    status,
  ]);

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
            onClick={() => handleBottomSheetpOpen('time')}
          />
        </FormItem>

        <FormItem label="반복" direction="row">
          <Input
            readOnly
            placeholder="2주"
            variant="s"
            value={repeatCycle}
            onClick={() => handleBottomSheetpOpen('repeat')}
          />
        </FormItem>

        <FormItem label="진행기간" direction="row">
          <Input
            readOnly
            placeholder="6월 27일 - 8월 30일"
            value={dateValue}
            onClick={() => handleBottomSheetpOpen('date')}
            variant="s"
          />
        </FormItem>
        <LargeBottom>
          <Button label="다음" type="submit" isDisabled={isDisabled} />
        </LargeBottom>
      </Form>

      {status !== 'none' && selectBottomSheetProps.modalShowing && (
        <SelectBottomSheet
          modalProps={selectBottomSheetProps}
          title={bottomSheetTitle}
          contents={selectBottomSheetFactory}
          initialHeight={status === 'repeat' ? 352 : undefined}
        />
      )}
    </Box>
  );
};

export default ScheduleSettingStep;
