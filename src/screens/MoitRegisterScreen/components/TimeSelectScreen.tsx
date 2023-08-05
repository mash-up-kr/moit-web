import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import dayjs from 'dayjs';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import useEffectOnce from 'hooks/useEffectOnce';
import { insertZero } from 'utils/dateParser';
import {
  generateArrayFromZero,
  generateMinuteArray,
} from 'utils/generateArray';
import Button from '@components/Button';
import { SelectScroller } from '@components/SelectScroller';

import { SELECT_CONTENT_HEIGHT, SELECT_TIME_MINUTE_INTERVAL } from '../consts';
import { useSelectTime } from '../hooks/useSelectTime';
import { ContentWrapper, Cursor, DefaultBottomCTA } from '../styled';
import TimeZone from './TimeZone';

export type CreateMoitRegisterTime = {
  startTime: TimeParams;
  endTime: TimeParams;
};

interface Props {
  initialTime: CreateMoitRegisterTime;
  timeUpdate: (times: CreateMoitRegisterTime) => void;
}

const TimeSelectScreen = ({
  initialTime,
  timeUpdate,
}: PropsWithChildren<Props>) => {
  const [currentCursor, setCurrentCursor] = useState<SelectCursor>('start');

  const { hour, min, startTime, endTime } = useSelectTime(
    currentCursor,
    initialTime,
  );

  console.log('##', initialTime, startTime.hour, endTime.hour);

  useEffectOnce(() => {
    setTimeout(() => {
      hour.ref.current?.scrollTo(
        0,
        Math.floor(initialTime.startTime.hour * SELECT_CONTENT_HEIGHT),
      );
      min.ref.current?.scrollTo(
        0,
        Math.floor(initialTime.startTime.minute * SELECT_CONTENT_HEIGHT),
      );
    });
  });

  useEffect(() => {
    setTimeout(() => {
      hour.ref.current?.scrollTo(0, hour.selectedIndex * SELECT_CONTENT_HEIGHT);
      min.ref.current?.scrollTo(
        0,
        (min.selectedIndex / 5) * SELECT_CONTENT_HEIGHT,
      );
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCursor]);

  const handleUpdateTime = useCallback(() => {
    timeUpdate({ startTime, endTime });
  }, [endTime, startTime, timeUpdate]);

  const start = useMemo(() => {
    const format = `${insertZero(startTime.hour)}:${insertZero(
      startTime.minute,
    )}`;
    const time = Number(format.replace(':', ''));

    return time;
  }, [startTime.hour, startTime.minute]);
  const end = useMemo(() => {
    const format = `${insertZero(endTime.hour)}:${insertZero(endTime.minute)}`;
    const time = Number(format.replace(':', ''));

    return time;
  }, [endTime.hour, endTime.minute]);

  const isValid = useMemo(() => dayjs(start) < dayjs(end), [end, start]);

  return (
    <main>
      <TimeZone
        currentCursor={currentCursor}
        startTime={startTime}
        endTime={endTime}
        onTimeZoneClick={(type: SelectCursor) => setCurrentCursor(type)}
      />
      <ContentWrapper>
        <SelectScroller
          ref={hour.ref}
          onScroll={() => {
            hour.onScroll();
          }}
        >
          {generateArrayFromZero(23).map((h) => (
            <SelectScrollerOption isActive={hour.selectedIndex === h} key={h}>
              {`${h}시`}
            </SelectScrollerOption>
          ))}
        </SelectScroller>
        <SelectScroller
          ref={min.ref}
          onScroll={() => {
            min.onScroll();
          }}
        >
          {[
            0,
            ...generateMinuteArray('startZero', SELECT_TIME_MINUTE_INTERVAL),
          ].map((m) => (
            <SelectScrollerOption isActive={min.selectedIndex === m} key={m}>
              {`${m}분`}
            </SelectScrollerOption>
          ))}
        </SelectScroller>
        <Cursor />
      </ContentWrapper>
      <DefaultBottomCTA>
        <Button
          label="선택하기"
          onClick={handleUpdateTime}
          isDisabled={!isValid}
        />
      </DefaultBottomCTA>
    </main>
  );
};

export default TimeSelectScreen;
