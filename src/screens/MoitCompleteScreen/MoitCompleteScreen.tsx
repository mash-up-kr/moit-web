import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Flex } from '@chakra-ui/react';
import { useRecoilValue } from 'recoil';
import pngs from '@styles/pngs';
import theme from '@styles/theme';
import { closeWebview, nativeShare } from 'bridge';
import {
  imageDataAtom,
  registerFormDataAtom,
  registerMoitResponseAtom,
} from 'screens/MoitRegisterScreen/atoms';
import LargeBottom from 'screens/MoitRegisterScreen/components/LargeBottom';
import {
  DAY_OF_WEEKS_OPTIONS,
  REMIND_OPTIONS,
} from 'screens/MoitRegisterScreen/consts';
import Avatar from '@components/Avatar';
import Button from '@components/Button';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';

const MoitCompleteScreen = () => {
  const registerFormData = useRecoilValue(registerFormDataAtom);
  const imageData = useRecoilValue(imageDataAtom);
  const navigate = useNavigate();
  const { invitationCode, moitId } = useRecoilValue(registerMoitResponseAtom);

  useEffect(() => {
    window.webkit.messageHandlers.MOIT.postMessage({
      command: 'didRegisterMOIT',
      value: moitId,
    });
  }, []);

  if (!Object.keys(registerFormData).length) {
    navigate('/error');
    return <></>;
  }

  const {
    name,
    dayOfWeeks,
    repeatCycle,
    startDate,
    startTime,
    endDate,
    endTime,
    lateTime,
    lateAmount,
    absenceAmount,
    absenceTime,
    remindOption,
  } = registerFormData;

  const repeatCycleTextMap: { [key in typeof repeatCycle]: string } = {
    NONE: '',
    ONE_WEEK: '매주',
    TWO_WEEK: '격주',
    FOUR_WEEK: '4주',
  };

  const data = [
    {
      label: '일정',
      value: `${repeatCycleTextMap[repeatCycle]} ${
        DAY_OF_WEEKS_OPTIONS.find((v) => v.value === dayOfWeeks[0])?.label
      } ${startTime} - ${endTime}`,
    },
    {
      label: '규칙',
      value: `지각 ${lateTime}분부터 ${lateAmount.toLocaleString()}원\n결석 ${absenceTime}분부터 ${absenceAmount.toLocaleString()}원`,
    },
    {
      label: '알람',
      value:
        REMIND_OPTIONS.find((option) => option.value === remindOption)?.label ||
        '-',
    },
    {
      label: '기간',
      value: `${startDate} ~ ${endDate}`,
    },
  ];

  return (
    <Box>
      <ScreenHeader
        rightIcon={<SvgIcon name="Close" size={24} onClick={closeWebview} />}
      />

      <Box p="0 20px">
        <Text type="h4" textAlign="center" mb="60px">
          {'오늘부터 스터디 시작!\n스터디원을 초대해보세요'}
        </Text>

        <Flex
          flexDir="column"
          justify="center"
          align="center"
          mb="60px"
          gap="10px"
        >
          <Avatar type="lg" src={imageData.imgSrc || pngs.trophy} />
          <Text type="h3">{name}</Text>
        </Flex>

        <Box
          bg={theme.palette.gray50}
          p="20px"
          borderRadius="20px"
          display="flex"
          flexDir="column"
          gap="9px"
        >
          {data.map((item, i) => (
            <Flex key={i} gap="12px">
              <Text type="p2">{item.label}</Text>
              <Text type="p3">{item.value}</Text>
            </Flex>
          ))}
        </Box>
      </Box>

      <LargeBottom>
        <Button
          size="m"
          isDisabled
          disabled={false}
          onClick={() => {
            if (window.webkit) {
              closeWebview();
            } else {
              window.location.href = '/';
            }
          }}
        >
          홈으로 돌아가기
        </Button>
        <Button
          size="m"
          onClick={() => {
            if (window.webkit) {
              nativeShare(invitationCode);
            } else {
              alert(moitId);
            }
          }}
        >
          참여코드 공유
        </Button>
      </LargeBottom>
    </Box>
  );
};

export default MoitCompleteScreen;
