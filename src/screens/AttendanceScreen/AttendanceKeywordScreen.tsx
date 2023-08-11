import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Container, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import { closeWebview, nativeAlert } from 'bridge';
import {
  useGetAttendanceStatus,
  useGetCheckIsFirst,
  useGetStudyDetail,
  useRegisterKeyword,
  useVerifyKeyword,
} from 'hooks';
import ScreenHeader from '@components/ScreenHeader';
import ScreenWithSafeArea from '@components/ScreenWithSafeArea';
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

  const studyId = Number(searchParams.get('studyId') || '1');

  const [answer, setAnswer] = useState('');
  const [answerList, setAnswerList] = useState<string[]>(['', '', '', '']);
  const [screenHeight, setScreenHeight] = useState('100vh');

  const { isFirst } = useGetCheckIsFirst(studyId);

  const { studyDetailData } = useGetStudyDetail(studyId);
  const { registerKeyword } = useRegisterKeyword(answer, studyId);
  const { verifyKeyword } = useVerifyKeyword(answer, studyId);
  const attendantList = useGetAttendanceStatus(studyId);

  useEffect(() => {
    if (isFirst) {
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

  useEffect(() => {
    const inputRef = document.getElementById('transparent-input');

    const handleFocus = () => {
      resizeScreen(keyboardHeight);
    };

    const handleBlur = () => {
      setScreenHeight('100vh');
    };

    inputRef?.addEventListener('focus', handleFocus);
    inputRef?.addEventListener('blur', handleBlur);

    return () => {
      inputRef?.removeEventListener('focus', handleFocus);
      inputRef?.removeEventListener('blur', handleBlur);
    };
  }, []);

  const handleSubmit = () => {
    if (isFirst) {
      registerKeyword();
    } else {
      verifyKeyword();
    }
  };

  const resizeScreen = (h: number) => {
    setScreenHeight(`calc(100vh - ${h}px)`);
  };

  console.log('env(safe-area-inset-top)');
  console.log('screenHeight', screenHeight);

  const buttonDisabled = answer.length < 4;
  return (
    <Box bgColor={theme.colors.background.black} height={screenHeight}>
      <ScreenWithSafeArea exceptPb>
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
                lateAt={studyDetailData.lateAt}
                absenceAt={studyDetailData.absenceAt}
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
                : `오늘의 첫 출석자 : ${
                    attendantList.length !== 0 ? attendantList[0].nickname : ''
                  }`}
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
          color={
            buttonDisabled ? theme.palette.gray700 : theme.colors.text.white
          }
          backgroundColor={
            buttonDisabled
              ? theme.palette.gray200
              : theme.colors.primary.default
          }
          borderRadius={'0'}
          position="absolute"
          bottom="0px"
          onClick={handleSubmit}
        >
          완료
        </Button>
      </ScreenWithSafeArea>
    </Box>
  );
};

export default AttendanceKeywordScreen;
