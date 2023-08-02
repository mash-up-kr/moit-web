import { UseSelectScroller } from '@components/SelectScroller/SelectScroller.hooks';
import { useSelectScroller } from '@components/SelectScroller';
import { CreateMoitRegisterTime } from '../components/TimeSelectBottomSheet';
import {
  SELECT_CONTENT_HEIGHT,
  SELECT_TIME_MINUTE_INTERVAL,
} from '../constants';

interface UseSelectTimeProps {
  hour: UseSelectScroller;
  min: UseSelectScroller;
  startTime: TimeParams;
  endTime: TimeParams;
}

export const useSelectTime = (
  type: SelectCursor,
  initialTime: CreateMoitRegisterTime,
): UseSelectTimeProps => {
  const {
    onScroll: startHourScroll,
    ref: startHourRef,
    selectedIndex: selectedStartHour,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
    initialSelectedIndex: initialTime.startTime.hour,
  });
  const {
    onScroll: startMinScroll,
    ref: startMinRef,
    selectedIndex: selectedStartMin,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
    initialSelectedIndex: initialTime.startTime.minute,
  });
  const {
    onScroll: endHourScroll,
    ref: endHourRef,
    selectedIndex: selectedEndHour,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
    initialSelectedIndex: initialTime.endTime.hour,
  });
  const {
    onScroll: endMinScroll,
    ref: endMinRef,
    selectedIndex: selectedEndMin,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
    initialSelectedIndex: initialTime.endTime.minute,
  });

  const isStart = type === 'start';

  const selectedHour = isStart ? selectedStartHour : selectedEndHour;
  const hourRef = isStart ? startHourRef : endHourRef;
  const hourScroll = isStart ? startHourScroll : endHourScroll;
  const selectedMin = isStart ? selectedStartMin : selectedEndMin;
  const minRef = isStart ? startMinRef : endMinRef;
  const minScroll = isStart ? startMinScroll : endMinScroll;

  return {
    hour: {
      selectedIndex: selectedHour,
      ref: hourRef,
      onScroll: hourScroll,
    },
    min: {
      selectedIndex: selectedMin * SELECT_TIME_MINUTE_INTERVAL,
      ref: minRef,
      onScroll: minScroll,
    },
    startTime: {
      hour: selectedStartHour,
      minute: selectedStartMin * SELECT_TIME_MINUTE_INTERVAL,
    },
    endTime: {
      hour: selectedEndHour,
      minute: selectedEndMin * SELECT_TIME_MINUTE_INTERVAL,
    },
  };
};
