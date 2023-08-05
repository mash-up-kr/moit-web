import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import dayjs from 'dayjs';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import useEffectOnce from 'hooks/useEffectOnce';
import { ModalProps } from 'hooks/useModal';
import { insertZero } from 'utils/dateParser';
import {
  generateArrayFromZero,
  generateMinuteArray,
} from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import Button from '@components/Button';
import { SelectScroller } from '@components/SelectScroller';
import { SELECT_TIME_MINUTE_INTERVAL } from '../constants';
import { ContentWrapper, Cursor, DefaultBottomCTA } from '../constants/styled';
import { useSelectTime } from '../hooks/useSelectTime';
import TimeZone from './TimeZone';

export type CreateMoitRegisterTime = {
  startTime: TimeParams;
  endTime: TimeParams;
};

interface Props {
  modalProps: ModalProps;
  initialTime: CreateMoitRegisterTime;
  timeUpdate: (times: CreateMoitRegisterTime) => void;
}

const TimeSelectScreen = ({
  modalProps,
  initialTime,
  timeUpdate,
}: PropsWithChildren<Props>) => {
  const [currentCursor, setCurrentCursor] = useState<SelectCursor>('start');
  const { hour, min, startTime, endTime } = useSelectTime(
    currentCursor,
    initialTime,
  );

  useEffectOnce(() => {
    setTimeout(() => {
      hour.ref.current?.scrollTo(
        0,
        Math.floor(initialTime.startTime.hour * 52),
      );
      min.ref.current?.scrollTo(
        0,
        Math.floor(initialTime.startTime.minute * 52),
      );
    });
  });

  useEffect(() => {
    setTimeout(() => {
      console.log(min.selectedIndex);

      hour.ref.current?.scrollTo(0, (hour.selectedIndex / 5) * 52);
      min.ref.current?.scrollTo(0, (min.selectedIndex / 5) * 52);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCursor]);

  const handleUpdateTime = useCallback(() => {
    timeUpdate({ startTime, endTime });
    modalProps.hideModal();
  }, [endTime, modalProps, startTime, timeUpdate]);

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
    <BottomSheet
      modalProps={modalProps}
      dimColor={palette.modal_dim}
      headerTitle="시간 선택"
      content={
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
                <SelectScrollerOption
                  isActive={hour.selectedIndex === h}
                  key={h}
                >
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
                ...generateMinuteArray(
                  'startZero',
                  SELECT_TIME_MINUTE_INTERVAL,
                ),
              ].map((m) => (
                <SelectScrollerOption
                  isActive={min.selectedIndex === m}
                  key={m}
                >
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
      }
    />
  );
};

export default TimeSelectScreen;
