import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import { closeWebview } from 'bridge';
import { useGetCheckIsFirst, useGetStudyDetail } from 'hooks';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
import AttendanceInput from './components/AttendanceInput';
import AttendanceTimer from './components/AttendanceTimer';
import { TooltipWithTouch } from './components/TooltipWithTouch';

const AttendanceKeywordScreen = () => {
  const [searchParams] = useSearchParams();

  const keyboardHeight = Number(searchParams.get('keyboardHeight') || '200');
  const studyId = Number(searchParams.get('studyId') || '1');

  const [answer, setAnswer] = useState('');
  const [answerList, setAnswerList] = useState<string[]>(['', '', '', '']);

  const { isFirst } = useGetCheckIsFirst(studyId);
  const { studyDetailData } = useGetStudyDetail(studyId);

  useEffect(() => {
    const inputAnswerList = answer
      .split('')
      .concat(Array(4 - answer.length).fill(''));
    setAnswerList(inputAnswerList);
  }, [answer]);

  const buttonDisabled = answer.length < 4;

  const handleSubmit = () => {};

  return (
    <Box
      bgColor={theme.colors.background.black}
      height={window.innerHeight - keyboardHeight}
    >
      <Box>
        <ScreenHeader
          leftIcon={
            <SvgIcon
              name="ArrowLeft"
              size={24}
              color={theme.palette.white}
              onClick={closeWebview}
            />
          }
          rightIcon={
            <TooltipWithTouch
              label={
                '첫 출석자가 공유한 키워드를\n 시간 내 입력하면 출석 완료되어요!'
              }
            >
              <SvgIcon name="Info" size={24} />
            </TooltipWithTouch>
          }
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

          {studyDetailData && (
            <AttendanceTimer
              startAt={studyDetailData.startAt}
              lateAt={studyDetailData.lateAt}
            />
          )}
          <AttendanceInput
            answer={answer}
            answerList={answerList}
            setAnswer={setAnswer}
          />
          <Text
            type="p3"
            color={theme.palette.gray100}
            opacity={'0.5'}
            mt={'60px'}
          >
            {isFirst
              ? '오늘의 첫 출석자: 김모잇'
              : '첫번째 출석자예요! 키워드를 만들어주세요!'}
          </Text>
        </Container>
      </Box>
      <Button
        w={'100%'}
        h={'56px'}
        fontSize={'16px'}
        fontWeight={'600'}
        lineHeight={'23px'}
        mt={theme.space.md}
        color={buttonDisabled ? theme.palette.gray700 : theme.colors.text.white}
        backgroundColor={
          buttonDisabled ? theme.palette.gray200 : theme.colors.primary.default
        }
        borderRadius={'0'}
        position="absolute"
        bottom="0px"
        onClick={handleSubmit}
      >
        완료
      </Button>
    </Box>
  );
};

export default AttendanceKeywordScreen;
