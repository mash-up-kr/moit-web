import { FC, useRef } from 'react';
import styled from '@emotion/styled';
import { ModalProps } from 'hooks/useModal';
import BottomSheet from '@components/BottomSheet';
import SelectScroller from '@components/SelectScroller';
import TimeZone from './components/TimeZone';

interface Props {
  modalProps: ModalProps;
}

const TimeSelectBottomSheet: FC<Props> = ({ modalProps }) => {
  const hourRef = useRef<HTMLUListElement>(null);
  const minRef = useRef<HTMLUListElement>(null);

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
          <ContentWrapper>
            <Content>
              <SelectScroller
                ref={hourRef}
                elements={[
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  18, 19, 20, 21, 22, 23, 24,
                ]}
                onScroll={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Content>
            <Content>
              <SelectScroller
                ref={minRef}
                elements={[
                  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
                  18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32,
                  33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,
                  48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59,
                ]}
                onScroll={function (): void {
                  throw new Error('Function not implemented.');
                }}
              />
            </Content>
          </ContentWrapper>
        </>
      }
    />
  );
};

export default TimeSelectBottomSheet;

const ContentWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
  padding-bottom: 100px;
`;

const Content = styled.section`
  position: relative;
  width: 50%;
`;
