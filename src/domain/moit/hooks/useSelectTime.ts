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

  const selectedHour = type === 'start' ? selectedStartHour : selectedEndHour;
  const hourRef = type === 'start' ? startHourRef : endHourRef;
  const hourScroll = type === 'start' ? startHourScroll : endHourScroll;
  const selectedMin = type === 'start' ? selectedStartMin : selectedEndMin;
  const minRef = type === 'start' ? startMinRef : endMinRef;
  const minScroll = type === 'start' ? startMinScroll : endMinScroll;

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
