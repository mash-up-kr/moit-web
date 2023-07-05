import { UseSelectScroller } from '@components/SelectScroller/SelectScroller.hooks';
import { useSelectScroller } from '@components/SelectScroller';

const SELECT_CONTENT_HEIGHT = 52;

interface UseSelectTimeProps {
  hour: UseSelectScroller;
  min: UseSelectScroller;
  startTime: TimeParams;
  endTime: TimeParams;
}

export const useSelectTime = (type: TimeZoneCursor): UseSelectTimeProps => {
  const {
    onScroll: startHourScroll,
    ref: startHourRef,
    selectedIndex: selectedStartHour,
  } = useSelectScroller({ itemHeight: SELECT_CONTENT_HEIGHT });
  const {
    onScroll: startMinScroll,
    ref: startMinRef,
    selectedIndex: selectedStartMin,
  } = useSelectScroller({ itemHeight: SELECT_CONTENT_HEIGHT });
  const {
    onScroll: endHourScroll,
    ref: endHourRef,
    selectedIndex: selectedEndHour,
  } = useSelectScroller({ itemHeight: SELECT_CONTENT_HEIGHT });
  const {
    onScroll: endMinScroll,
    ref: endMinRef,
    selectedIndex: selectedEndMin,
  } = useSelectScroller({ itemHeight: SELECT_CONTENT_HEIGHT });

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
    min: { selectedIndex: selectedMin, ref: minRef, onScroll: minScroll },
    startTime: {
      hour: selectedStartHour,
      minute: selectedStartMin,
    },
    endTime: {
      hour: selectedEndHour,
      minute: selectedEndMin,
    },
  };
};
