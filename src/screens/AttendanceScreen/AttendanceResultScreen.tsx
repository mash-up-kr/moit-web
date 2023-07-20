import { Box, Container } from '@chakra-ui/react';
import theme from '@styles/theme';
import { useGetCheckIsFirst } from 'hooks';
import Lottie from '@components/Lottie';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
import AttendanceList from './components/AttendanceList';
import KeywordCard from './components/KeywordCard';
import LiveStatusCard from './components/LiveStatusCard';
import MVPCard from './components/MVPCard';

const AttendanceResultScreen = () => {
  // const [searchParams] = useSearchParams();
  // const studyId = searchParams.get('studyId');

  const studyId = 1; // dummy

  // 추후에 hook 연결하기
  const { data: dummyData } = {
    data: [
      {
        userId: 1,
        nickname: '김모잇',
        profileImage: 0,
        attendanceStatus: 'A',
        attendanceAt: new Date(),
      },
    ],
  };

  const dummyKeyword = '오늘홧팅';
  const keywordList = Array.from(dummyKeyword);
  const dummyUser = {
    id: 1,
  };

  const { isFirst } = useGetCheckIsFirst(studyId);

  const currentUser = dummyData.find((user) => user.userId === dummyUser.id);
  const isAttendance = currentUser?.attendanceStatus === 'ATTENDANCE';

  return (
    <Box
      bg={theme.palette.gray100}
      bgImage={
        isAttendance
          ? 'linear-gradient(180deg, #585FF0 31.77%, rgba(88, 95, 240, 0.89) 56.25%, rgba(88, 95, 240, 0.00) 100%)'
          : 'linear-gradient(180deg, #FF8A01 16.12%, #F2F4F6 25.97%)'
      }
    >
      {isAttendance && (
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          zIndex={2}
        >
          <Lottie src={'../../../assets/lotties/confetti.json'} />
        </Box>
      )}

      <ScreenHeader rightIcon={<SvgIcon name={'X'} />}></ScreenHeader>
      <Box textAlign={'center'}>
        <Text type="h1" color={theme.colors.text.white}>
          {isAttendance ? '출석 완료!' : '앗, 지각이에요'}
        </Text>
        <Text type="h5" color={theme.palette.white_07}>
          {isAttendance
            ? '출석체크가 성공적으로 완료되었어요'
            : '다음에는 꼭 제시간에 출석하세요!'}
        </Text>
      </Box>
      <Lottie
        src={
          isAttendance
            ? '../../../assets/lotties/success.json'
            : '../../../assets/lotties/fail.json'
        }
      />

      <Container centerContent pb={'20%'}>
        {isFirst && <KeywordCard keywordList={keywordList} />}

        <LiveStatusCard
          failCount={0}
          successCount={1}
          currentUser={currentUser}
        />

        <MVPCard />

        <AttendanceList />
      </Container>
    </Box>
  );
};

export default AttendanceResultScreen;
