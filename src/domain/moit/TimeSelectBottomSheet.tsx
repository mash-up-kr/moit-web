import { PropsWithChildren, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { SelectScroller } from '@components/SelectScroller/index';
import { palette } from '@styles/theme';
import { zIndex } from '@styles/z-index';
import useEffectOnce from 'hooks/useEffectOnce';
import { ModalProps } from 'hooks/useModal';
import { generateArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import TimeZone from './components/TimeZone';
import { useSelectTime } from './hooks/useSelectTime';

interface Props {
  modalProps: ModalProps;
  testH: number;
  testM: number;
  testHSetter: (n: number) => void;
  testMSetter: (n: number) => void;
}

const TimeSelectBottomSheet = ({
  modalProps,
  testHSetter,
  testH,
  testM,
  testMSetter,
}: PropsWithChildren<Props>) => {
  const [currentCursor, setCurrentCursor] = useState<TimeZoneCursor>('start');
  const { hour, min, startTime, endTime } = useSelectTime(currentCursor);

  // 마운트 시점 스크롤. 지연 로직을 추가하지 않으면, 정상 동작하지 않음
  useEffectOnce(() => {
    setTimeout(() => {
      hour.ref.current?.scrollTo(0, Math.floor((testH + 1) * 52));
      min.ref.current?.scrollTo(0, Math.floor((testM + 1) * 52));
    }, 300);
  });

  // 커서 변경시 스크롤 로직.
  // 더 좋은 로직이 있는건 확실한디... :(
  useEffect(() => {
    setTimeout(() => {
      hour.ref.current?.scrollTo(0, hour.selectedIndex * 52);
      min.ref.current?.scrollTo(0, min.selectedIndex * 52);
    });

    //! don't delete this ignore.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentCursor]);

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
            onTimeZoneClick={(type: TimeZoneCursor) => setCurrentCursor(type)}
          />
          <ContentWrapper>
            <SelectScroller
              ref={hour.ref}
              onScroll={() => {
                testHSetter(hour.selectedIndex);
                hour.onScroll();
              }}
            >
              {generateArray(23).map((h) => (
                <SelectScrollerOption
                  isActive={hour.selectedIndex === h}
                  key={h}
                >
                  {h}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <SelectScroller
              ref={min.ref}
              onScroll={() => {
                testMSetter(min.selectedIndex);
                min.onScroll();
              }}
            >
              {generateArray(59).map((m) => (
                <SelectScrollerOption
                  isActive={min.selectedIndex === m}
                  key={m}
                >
                  {m}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <Cursor />
          </ContentWrapper>
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
  padding-bottom: 100px;
  position: relative;
  /* 드래그 방지 */
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
