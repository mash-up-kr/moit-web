import { FC, useRef } from 'react';
import styled from '@emotion/styled';
import { ModalProps } from 'hooks/useModal';
import { generateArray } from 'utils/generateArray';
import BottomSheet from '@components/BottomSheet';
import SelectScroller from '@components/SelectScroller';
import TimeZone, { TimeParams, TimeZoneCursor } from './components/TimeZone';

interface Props {
  modalProps: ModalProps;
  currentTarget: TimeZoneCursor;
  startTime: TimeParams;
  endTime: TimeParams;
}

const TimeSelectBottomSheet: FC<Props> = ({
  modalProps,
  currentTarget,
  startTime,
  endTime,
}) => {
  const ITEM_HEIGHT = 52;
  const hourRef = useRef<HTMLUListElement>(null);
  const minRef = useRef<HTMLUListElement>(null);

  const hour = currentTarget === 'start' ? startTime.hour : endTime.hour;
  const min = currentTarget === 'start' ? startTime.minuete : endTime.minuete;

  const handleHourScroll = () => {
    const top = hourRef.current && hourRef.current.scrollTop;
    const currentSelectedHour = top ? Math.round(top / ITEM_HEIGHT) : 0;

    // TODO: set state
    console.log(currentSelectedHour);
  };

  const handleMinScroll = () => {
    const top = minRef.current && minRef.current.scrollTop;
    const currentSelectedMin = top ? Math.round(top / ITEM_HEIGHT) : 0;

    // TODO: set state
    console.log(currentSelectedMin);
  };

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
              <SelectScroller
                ref={hourRef}
                selectedElements={hour}
                elements={generateArray(24)}
                onScroll={handleHourScroll}
              />
            </Content>
            <Content>
              <SelectScroller
                ref={minRef}
                selectedElements={min}
                elements={generateArray(59)}
                onScroll={handleMinScroll}
              />
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
