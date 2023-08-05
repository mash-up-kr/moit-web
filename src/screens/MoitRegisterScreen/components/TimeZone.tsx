import { FC } from 'react';
import styled from '@emotion/styled';
import { insertZero } from 'utils/dateParser';

interface Props {
  currentCursor: SelectCursor;
  startTime: TimeParams;
  endTime: TimeParams;
  onTimeZoneClick: (type: SelectCursor) => void;
}

const TimeZone: FC<Props> = ({
  currentCursor,
  startTime,
  endTime,
  onTimeZoneClick,
}) => {
  return (
    <Container>
      <Content
        isCurrentCursor={currentCursor === 'start'}
        onClick={() => onTimeZoneClick('start')}
      >
        <p>시작</p>
        <span>{`${insertZero(startTime.hour)}시 `}</span>
        <span>{`${insertZero(startTime.minute)}분 `}</span>
      </Content>
      <Content
        isCurrentCursor={currentCursor === 'end'}
        onClick={() => onTimeZoneClick('end')}
      >
        <p>종료</p>
        <span>{`${insertZero(endTime.hour)}시 `}</span>
        <span>{`${insertZero(endTime.minute)}분 `}</span>
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
      theme.palette[isCurrentCursor ? 'blue500' : 'gray300']};
  }

  span {
    font-size: 24px;
    line-height: 36px;
    font-weight: 600;
    color: ${({ isCurrentCursor, theme }) =>
      theme.palette[isCurrentCursor ? 'blue800' : 'gray300']};
  }
`;
