import { useEffect, useRef, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import { nativeAlert } from 'bridge';
import Text from '@components/Text';
import {
  formattedTime,
  remainingTime,
  timeBeforeOneSecond,
} from '../utils/timer';

interface AttendanceTimerProps {
  lateAt: string;
  absenceAt: string;
}

const AttendanceTimer = ({ lateAt, absenceAt }: AttendanceTimerProps) => {
  const startAtTime = new Date(lateAt);
  const lateAtTime = new Date(absenceAt);

  const [time, setTime] = useState<Date>(remainingTime(startAtTime));
  const [isLate, setIsLate] = useState(startAtTime < new Date());
  const [expired, setExpired] = useState(lateAtTime < new Date());

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const alertMethod = () =>
    nativeAlert(
      JSON.stringify({
        title: '출석체크가 끝났어요!🥲',
        body: '출석 인정 시간이 지나서 출석체크를 할 수 없어요.',
        type: 'home',
      }),
    );
  const clearTimer = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const setOneSecBefore = () => {
    const currentTime = new Date();
    if (lateAtTime < currentTime && !expired) {
      setExpired(true);
      alertMethod();
      clearTimer();
      return;
    }
    if (startAtTime < currentTime) {
      setIsLate(true);
      setTime(remainingTime(lateAtTime));
      return;
    }
    setTime(timeBeforeOneSecond(time));
  };

  useEffect(() => {
    if (lateAtTime < new Date()) {
      alertMethod();
      return;
    }
    timerRef.current = setInterval(setOneSecBefore, 1000);
    return () => {
      clearTimer();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const timeText = expired ? 'EXPIRED' : formattedTime(time);

  return (
    <Flex
      w={'303px'}
      mx={'36px'}
      borderRadius={'20px'}
      border={'6px solid var(--gray-800, #333D4B)'}
      p={'4px 14px'}
      justifyContent={'space-between'}
      alignItems={'center'}
      bg={
        isLate
          ? 'linear-gradient(0deg, rgba(255, 138, 0, 0.20) 0%, rgba(255, 138, 0, 0.00) 100%), #000'
          : 'linear-gradient(0deg, rgba(88, 95, 240, 0.20) 0%, rgba(88, 95, 240, 0.00) 100%), #000'
      }
    >
      <Text type="h6" color={theme.palette.gray100} opacity={'0.6'}>
        {isLate ? '지각' : '출석'} 인정 시간
      </Text>
      <Text
        type={'h1'}
        color={isLate ? theme.palette.orange200 : theme.palette.blue500}
      >
        {timeText}
      </Text>
    </Flex>
  );
};

export default AttendanceTimer;
