import {
  PropsWithChildren,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import styled from '@emotion/styled';
import dayjs from 'dayjs';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { zIndex } from '@styles/z-index';
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
import {
  SELECT_TIME_MINUTE_INTERVAL,
  useSelectTime,
} from '../hooks/useSelectTime';
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

const TimeSelectBottomSheet = ({
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
    }, 300);
  });

  useEffect(() => {
    setTimeout(() => {
      hour.ref.current?.scrollTo(0, hour.selectedIndex * 52);
      min.ref.current?.scrollTo(0, min.selectedIndex * 52);
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

export default TimeSelectBottomSheet;

const ContentWrapper = styled.section`
  display: flex;
  gap: ${({ theme }) => theme.space.md};
  margin-top: ${({ theme }) => theme.space.md};
  position: relative;

  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
`;

const Cursor = styled.div`
  position: absolute;
  z-index: ${zIndex.HIDE};
  width: 100%;
  height: 52px;
  transform: translateY(42px);
  background-color: ${({ theme }) => theme.colors.primary.selected};
  border-radius: ${({ theme }) => theme.space.md};
`;

const DefaultBottomCTA = styled.footer`
  height: 100px;
  padding: 8px 0 36px 0;
  margin-top: ${({ theme }) => theme.space.md};
`;
