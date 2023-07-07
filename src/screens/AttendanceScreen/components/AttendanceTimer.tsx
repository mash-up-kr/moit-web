import { useEffect, useState } from 'react';
import { Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import Text from '@components/Text';
import {
  formattedTime,
  remainingTime,
  timeBeforeOneSecond,
} from '../utils/timer';

const AttendanceTimer = () => {
  const currentTime = new Date();
  // 10분 후를 스터디 시작 시간으로 가정
  const dummyStartAtTime = new Date(new Date().getTime() + 10 * 60000);
  // 사용자가 10분 후까지를 지각으로 설정했다고 가정
  const dummyLateAtTime = new Date(new Date().getTime() + 20 * 60000);
  const isLate = dummyStartAtTime < currentTime;

  const [time, setTime] = useState<Date>(remainingTime(dummyStartAtTime));

  const setOneSecBefore = () => {
    setTime(timeBeforeOneSecond(time));
  };

  useEffect(() => {
    if (currentTime > dummyLateAtTime) {
      // iOS Alert 띄우고 바로 다른데 보내버림
      return console.log('EXPIRED!!!');
    }
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
