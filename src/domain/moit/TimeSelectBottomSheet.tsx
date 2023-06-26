import { FC, useState } from 'react';
import styled from '@emotion/styled';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { palette } from '@styles/theme';
import { ModalProps } from 'hooks/useModal';
import { generateArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import { SelectScroller } from '@components/SelectScroller';
import TimeZone from './components/TimeZone';
import { useSelectTime } from './hooks/useSelectTime';

interface Props {
  modalProps: ModalProps;
}

// TODO: 타입 변환시 해당 인덱스로 스크롤 로직 추가
// TODO: 인풋 로직 개발되면 저장버튼에 싱크 로직 추가

const TimeSelectBottomSheet: FC<Props> = ({ modalProps }) => {
  const [currentCursor, setCurrentCursor] = useState<TimeZoneCursor>('start');
  const { hour, min, startTime, endTime } = useSelectTime(currentCursor);

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
            <SelectScroller ref={hour.ref} onScroll={hour.onScroll}>
              {generateArray(23).map((h) => (
                <SelectScrollerOption
                  isActive={hour.selectedIndex === h}
                  key={h}
                >
                  {h}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <SelectScroller ref={min.ref} onScroll={min.onScroll}>
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
  gap: 20px;
  margin-top: 20px;
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
  z-index: ${({ theme }) => theme.zIndex.hide};

  width: 100%;
  height: 52px;

  transform: translateY(42px);

  background-color: ${({ theme }) => theme.palette.blue100};
  border-radius: 20px;
`;
