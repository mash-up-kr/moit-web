import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
import AttendanceInput from './components/AttendanceInput';
import AttendanceTimer from './components/AttendanceTimer';

const AttendanceKeyword = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') as 'present' | 'tardy';
  const isFirst = searchParams.get('isFirst');
  const isTardy: boolean = status === 'tardy';

  const [answer, setAnswer] = useState<string>('');
  const [answerList, setAnswerList] = useState<string[]>(['', '', '', '']);

  useEffect(() => {
    const inputAnswerList = answer
      .split('')
      .concat(Array(4 - answer.length).fill(''));
    setAnswerList(inputAnswerList);
  }, [answer]);

  const disabled = answer.length < 4;

  return (
    <Box bgColor={theme.colors.background.black}>
      <Container>
        <ScreenHeader
          title={''}
          leftIcon={
            <SvgIcon name="ArrowLeft" size={24} color={theme.palette.white} />
          }
          rightIcon={<SvgIcon name="Info" size={24} color={''} />}
        />
        <Container centerContent>
          <Flex mt={theme.space.md} mb={theme.space.lg}>
            <Text type="p1" color={theme.palette.gray500}>
              제한시간 내
            </Text>
            <Text type="h6" color={theme.colors.text.white}>
              &nbsp;출석키워드
            </Text>
            <Text type="p1" color={theme.palette.gray500}>
              를 입력하세요!
            </Text>
          </Flex>
          <AttendanceTimer isTardy={isTardy} />
          <AttendanceInput
            answer={answer}
            answerList={answerList}
            setAnswer={setAnswer}
          />
          <Text
            type="p3"
            color={theme.palette.gray100}
            opacity="0.5"
            mt={'60px'}
          >
            {isFirst === 'true'
              ? '오늘의 첫 출석자: 김모잇'
              : '첫번째 출석자예요! 키워드를 만들어주세요!'}
          </Text>
        </Container>
      </Container>
      <Button
        w={'100%'}
        h={'56px'}
        fontSize={'16px'}
        fontWeight={'600'}
        lineHeight={'23px'}
        mt={theme.space.md}
        color={disabled ? theme.palette.gray700 : theme.colors.text.white}
        backgroundColor={
          disabled ? theme.palette.gray200 : theme.colors.primary.default
        }
        borderRadius={'0'}
      >
        완료
      </Button>
    </Box>
  );
};

export default AttendanceKeyword;
