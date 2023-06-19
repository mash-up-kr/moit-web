import { FC } from 'react';
import styled from '@emotion/styled';

export type TimeZoneCursor = 'start' | 'end';
export type TimeParams = {
  hour: number;
  minuete: number;
};

interface Props {
  currentCursor: TimeZoneCursor;
  startTime: TimeParams;
  endTime: TimeParams;
}

const TimeZone: FC<Props> = ({ currentCursor, startTime, endTime }) => {
  return (
    <Container>
      <Content isCurrentCursor={currentCursor === 'start'}>
        <p>시작</p>
        <span>{`${startTime.hour}시 `}</span>
        <span>{`${startTime.minuete}분 `}</span>
      </Content>
      <Content isCurrentCursor={currentCursor === 'end'}>
        <p>종료</p>
        <span>{`${endTime.hour}시 `}</span>
        <span>{`${endTime.minuete}분 `}</span>
      </Content>
    </Container>
  );
};

export default TimeZone;

const Container = styled.section`
  display: flex;
`;

const Content = styled.div<{ isCurrentCursor: boolean }>`
  width: 50%;
  font-weight: 600;

  p {
    font-size: 16px;
    line-height: 23px;
    color: ${({ isCurrentCursor, theme }) =>
      isCurrentCursor ? theme.palette.blue500 : theme.palette.gray300};
  }

  span {
    ${({ theme }) => theme.fonts.h3}
    color: ${({ isCurrentCursor, theme }) =>
      isCurrentCursor ? theme.colors.primary.default : theme.palette.gray300};
  }
`;
