import { FC, useRef } from 'react';
// import styled from '@emotion/styled';
import { ModalProps } from 'hooks/useModal';
import BottomSheet from '@components/BottomSheet';
import SelectScroller from '@components/SelectScroller';
import TimeZone from './components/TimeZone';

interface Props {
  modalProps: ModalProps;
}

const TimeSelectBottomSheet: FC<Props> = ({ modalProps }) => {
  const hourRef = useRef<HTMLUListElement>(null);
  // const minRef = useRef<HTMLUListElement>(null);

  return (
    <BottomSheet
      modalProps={modalProps}
      headerTitle="시간선택"
      content={
        <>
          <TimeZone
            currentCursor={'start'}
            startTime={{
              hour: 0,
              minuete: 0,
            }}
            endTime={{
              hour: 0,
              minuete: 0,
            }}
          />
          <SelectScroller
            ref={hourRef}
            onScroll={function (): void {
              throw new Error('Function not implemented.');
            }}
          />
        </>
      }
    />
  );
};

export default TimeSelectBottomSheet;
