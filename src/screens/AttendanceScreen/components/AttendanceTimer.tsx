import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import Text from '@components/Text';
import { calcTimeDiff, formattedTime, subtractOneSecond } from '../utils/timer';

interface AttendanceTimerProps {
  isTardy: boolean;
}

const AttendanceTimer = ({ isTardy }: AttendanceTimerProps) => {
  const dummyStartTime = new Date(new Date().getTime() + 10 * 60000);

  const [time, setTime] = useState<Date>(calcTimeDiff(dummyStartTime));

  const setOneSecBefore = () => {
    setTime(subtractOneSecond(time));
  };

  useEffect(() => {
    const timer = setInterval(setOneSecBefore, 1000);
    return () => clearInterval(timer);
  }, []);

  const timeText = formattedTime(time);

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
        isTardy
          ? 'linear-gradient(0deg, rgba(255, 138, 0, 0.20) 0%, rgba(255, 138, 0, 0.00) 100%), #000'
          : 'linear-gradient(0deg, rgba(88, 95, 240, 0.20) 0%, rgba(88, 95, 240, 0.00) 100%), #000'
      }
    >
      <Text type="h6" color={theme.palette.gray100} opacity="0.6">
        {isTardy ? '지각' : '출석'} 인정 시간
      </Text>
      <Text
        type={'h1'}
        color={isTardy ? theme.palette.orange200 : theme.palette.blue500}
      >
        {timeText}
      </Text>
    </Flex>
  );
};

export default AttendanceTimer;
