import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import { closeWebview, nativeAlert } from 'bridge';
import {
  useGetCheckIsFirst,
  useGetStudyDetail,
  useRegisterKeyword,
  useVerifyKeyword,
} from 'hooks';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
import AttendanceInput from './components/AttendanceInput';
import AttendanceTimer from './components/AttendanceTimer';
import { TooltipWithTouch } from './components/TooltipWithTouch';

const AttendanceKeywordScreen = () => {
  const [searchParams] = useSearchParams();

  const keyboardHeight = Number(searchParams.get('keyboardHeight') || '200');

  console.log(
    '🚀 ~ file: AttendanceKeywordScreen.tsx:23 ~ AttendanceKeywordScreen ~ keyboardHeight:',
    keyboardHeight,
  );

  console.log('innerHeight', window.innerHeight);

  const studyId = Number(searchParams.get('studyId') || '1');

  const [answer, setAnswer] = useState('');
  const [answerList, setAnswerList] = useState<string[]>(['', '', '', '']);
  // const [calculatedHeight, setCalculatedHeight] = useState(window.innerHeight);

  const { isFirst } = useGetCheckIsFirst(studyId);

  const { studyDetailData } = useGetStudyDetail(studyId);
  const { registerKeyword } = useRegisterKeyword(answer, studyId);
  const { verifyKeyword } = useVerifyKeyword(answer, studyId);

  useEffect(() => {
    if (isFirst) {
      console.log('첫번째 출석자');
      nativeAlert(
        JSON.stringify({
          title: ' 쉿! 우리만의 키워드를 입력해 출석완료하세요! 🤫 ',
          body: '첫 출석자와 공유한 키워드를 시간 내 입력하면 출석 완료되어요.',
          type: 'none',
        }),
      );
    }
  }, []);

  useEffect(() => {
    const inputAnswerList = answer
      .split('')
      .concat(Array(4 - answer.length).fill(''));
    setAnswerList(inputAnswerList);
  }, [answer]);

  const buttonDisabled = answer.length < 4;

  const handleSubmit = () => {
    if (isFirst) {
      registerKeyword();
    } else {
      verifyKeyword();
    }
  };

  // const calcHeight = () => {
  //   // input창이 눌렸을 경우 전체 높이를 키보드 높이 뺀걸로 바꿔주기
  //   // input창이 안눌렸을 경우 다시 전체 높이로 바꾸기
  // };

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
              ? '첫번째 출석자예요! 키워드를 만들어주세요!'
              : '오늘의 첫 출석자'}
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
