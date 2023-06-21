import { FC } from 'react';
import styled from '@emotion/styled';
import { SelectScrollerOption } from '@components/SelectScroller/SelectScroller.option';
import { ModalProps } from 'hooks/useModal';
import { generateArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import { SelectScroller, useSelectScroller } from '@components/SelectScroller';
import TimeZone, { TimeParams, TimeZoneCursor } from './components/TimeZone';

interface Props {
  modalProps: ModalProps;
  currentTarget: TimeZoneCursor;
  startTime: TimeParams;
  endTime: TimeParams;
}

const TimeSelectBottomSheet: FC<Props> = ({
  modalProps,
  startTime,
  endTime,
}) => {
  const ITEM_HEIGHT = 52;

  const {
    onScroll: hourScroll,
    ref: hourRef,
    selectedIndex: selectedHour,
  } = useSelectScroller({ itemHeight: ITEM_HEIGHT });
  const {
    onScroll: minScroll,
    ref: minRef,
    selectedIndex: selectedMin,
  } = useSelectScroller({ itemHeight: ITEM_HEIGHT });

  return (
    <BottomSheet
      modalProps={modalProps}
      headerTitle="시간선택"
      content={
        <main>
          <TimeZone
            currentCursor={'start'}
            startTime={startTime}
            endTime={endTime}
          />
          <ContentWrapper>
            <SelectScroller ref={hourRef} onScroll={hourScroll}>
              {generateArray(23).map((hour) => (
                <SelectScrollerOption
                  isActive={selectedHour === hour}
                  key={hour}
                >
                  {hour}
                </SelectScrollerOption>
              ))}
            </SelectScroller>
            <SelectScroller ref={minRef} onScroll={minScroll}>
              {generateArray(59).map((min) => (
                <SelectScrollerOption isActive={selectedMin === min} key={min}>
                  {min}
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
