import { useSearchParams } from 'react-router-dom';
import { Box, Container } from '@chakra-ui/react';
import theme from '@styles/theme';
import { closeWebview } from 'bridge';
import {
  useGetAttendanceStatus,
  useGetCheckIsFirst,
  useGetStudyKeyword,
} from 'hooks';
import { useGetUser } from 'hooks/useGetUser';
import Lottie from '@components/Lottie';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
import AttendanceList from './components/AttendanceList';
import KeywordCard from './components/KeywordCard';
import LiveStatusCard from './components/LiveStatusCard';
import MVPCard from './components/MVPCard';

const AttendanceResultScreen = () => {
  const [searchParams] = useSearchParams();
  const studyId = parseInt(searchParams.get('studyId') ?? '1'); // TODO: 영지 확인 필요

  const attendantList = useGetAttendanceStatus(studyId);
  const { attendanceKeyword } = useGetStudyKeyword(studyId);
  const user = useGetUser();

  const keywordList = Array.from(attendanceKeyword);

  const { isFirst } = useGetCheckIsFirst(studyId);

  const currentUser = attendantList.find(
    (attendant: AttendantData) => attendant.userId === user?.id,
  ) as AttendantData;

  const isAttendance = currentUser?.status === 'ATTENDANCE';

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
          <Lottie src={'confetti'} />
        </Box>
      )}

      <ScreenHeader
        rightIcon={<SvgIcon name={'Close'} size={24} onClick={closeWebview} />}
      ></ScreenHeader>
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
      <Lottie src={isAttendance ? 'success' : 'fail'} />

      <Container centerContent pb={'20%'}>
        {isFirst && <KeywordCard keywordList={keywordList} />}

        <LiveStatusCard
          currentUser={currentUser}
          attendantList={attendantList}
        />

        <MVPCard attendantList={attendantList} />

        <AttendanceList attendantList={attendantList} />
      </Container>
    </Box>
  );
};

export default AttendanceResultScreen;
