import { FC } from 'react';
import styled from '@emotion/styled';

interface Props {
  currentCursor: SelectCursor;
  startDate: DateParams;
  endDate: DateParams;
  onDateZoneClick: (type: SelectCursor) => void;
}

const DateZone: FC<Props> = ({
  currentCursor,
  startDate,
  endDate,
  onDateZoneClick,
}) => {
  return (
    <Container>
      <Content
        isCurrentCursor={currentCursor === 'start'}
        onClick={() => onDateZoneClick('start')}
      >
        <p>시작</p>
        <span>{`${startDate.y}. `}</span>
        <span>{`${startDate.m}. `}</span>
        <span>{`${startDate.d} `}</span>
      </Content>
      <Content
        isCurrentCursor={currentCursor === 'end'}
        onClick={() => onDateZoneClick('end')}
      >
        <p>종료</p>
        <span>{`${endDate.y}. `}</span>
        <span>{`${endDate.m}. `}</span>
        <span>{`${endDate.d} `}</span>
      </Content>
    </Container>
  );
};

export default DateZone;

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
