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
  // currentTarget,
  startTime,
  endTime,
}) => {
  const ITEM_HEIGHT = 52;

  const {
    onScroll,
    ref: hourRef,
    selectedIndex: selectedHour,
  } = useSelectScroller({ itemHeight: ITEM_HEIGHT });

  // const hour = currentTarget === 'start' ? startTime.hour : endTime.hour;
  // const min = currentTarget === 'start' ? startTime.minuete : endTime.minuete;

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
            <Content>
              <SelectScroller ref={hourRef} onScroll={onScroll}>
                {generateArray(24).map((hour) => (
                  <SelectScrollerOption
                    isActive={selectedHour === hour}
                    key={hour}
                  >
                    {hour}
                  </SelectScrollerOption>
                ))}
              </SelectScroller>
            </Content>
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
`;

const Content = styled.div`
  position: relative;
  width: 50%;
`;
