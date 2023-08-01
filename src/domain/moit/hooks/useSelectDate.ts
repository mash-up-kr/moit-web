import { UseSelectScroller } from '@components/SelectScroller/SelectScroller.hooks';
import { useSelectScroller } from '@components/SelectScroller';

const SELECT_CONTENT_HEIGHT = 52;

type DateParmas = {
  y: number;
  m: number;
  d: number;
};

interface UseSelectDateProps {
  year: UseSelectScroller;
  month: UseSelectScroller;
  date: UseSelectScroller;
  startDate: DateParmas;
  endDate: DateParmas;
}

export const useSelectDate = (type: SelectCursor): UseSelectDateProps => {
  const {
    onScroll: startYearScroll,
    ref: startYearRef,
    selectedIndex: selectedStartYear,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
  });
  const {
    onScroll: startMonthScroll,
    ref: startMonthRef,
    selectedIndex: selectedStartMonth,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
  });
  const {
    onScroll: startDateScroll,
    ref: startDateRef,
    selectedIndex: selectedStartDate,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
  });
  const {
    onScroll: endYearScroll,
    ref: endYearRef,
    selectedIndex: selectedEndYear,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
  });
  const {
    onScroll: endMonthScroll,
    ref: endMonthRef,
    selectedIndex: selectedEndMonth,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
  });
  const {
    onScroll: endDateScroll,
    ref: endDateRef,
    selectedIndex: selectedEndDate,
  } = useSelectScroller({
    itemHeight: SELECT_CONTENT_HEIGHT,
  });

  const nowYear = new Date().getFullYear();
  const isStart = type === 'start';

  const selectedYear = isStart ? selectedStartYear : selectedEndYear;
  const yearRef = isStart ? startYearRef : endYearRef;
  const yearScroll = isStart ? startYearScroll : endYearScroll;
  const selectedMonth = isStart ? selectedStartMonth : selectedEndMonth;
  const monthRef = isStart ? startMonthRef : endMonthRef;
  const monthScroll = isStart ? startMonthScroll : endMonthScroll;
  const selectedDate = isStart ? selectedStartDate : selectedEndDate;
  const dateRef = isStart ? startDateRef : endDateRef;
  const dateScroll = isStart ? startDateScroll : endDateScroll;

  return {
    year: {
      selectedIndex: selectedYear,
      ref: yearRef,
      onScroll: yearScroll,
    },
    month: {
      selectedIndex: selectedMonth,
      ref: monthRef,
      onScroll: monthScroll,
    },
    date: {
      selectedIndex: selectedDate,
      ref: dateRef,
      onScroll: dateScroll,
    },
    startDate: {
      y: selectedStartYear + nowYear,
      m: selectedStartMonth + 1,
      d: selectedStartDate + 1,
    },
    endDate: {
      y: selectedEndYear + nowYear,
      m: selectedEndMonth + 1,
      d: selectedEndDate + 1,
    },
  };
};
