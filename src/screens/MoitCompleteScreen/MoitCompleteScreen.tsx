import { Box } from '@chakra-ui/react';
// import { useRecoilValue } from 'recoil';
import theme from '@styles/theme';
// import { registerFormDataAtom } from 'screens/MoitRegisterScreen/atoms';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
// import { DAY_OF_WEEKS_OPTIONS } from 'screens/MoitRegisterScreen/consts';

const MoitCompleteScreen = () => {
  // const registerFormData = useRecoilValue(registerFormDataAtom);

  // const { name, dayOfWeeks, startDate, startTime, endDate, endTime } =
  // registerFormData;

  // const data = [
  //   {
  //     label: '일정',
  //     value: `매주 ${
  //       DAY_OF_WEEKS_OPTIONS.find((v) => v.value === dayOfWeeks)?.label
  //     } ${startTime.hour.toString().padStart(2, '0')}:${startTime.minute
  //       .toString()
  //       .padStart(2, '0')} - ${endTime.hour}`,
  //   },
  //   {
  //     label: '규칙',
  //     value: '매주',
  //   },
  //   {
  //     label: '알람',
  //     value: '',
  //   },
  //   {
  //     label: '기간',
  //     value: '매주',
  //   },
  // ];
  //

  return (
    <Box>
      <ScreenHeader rightIcon={<SvgIcon name="Close" size={24} />} />

      <Box p="0 20px">
        <Text type="h4" textAlign="center" mb="60px">
          {'오늘부터 스터디 시작!\n스터디원을 초대해보세요'}
        </Text>

        <Box bg={theme.palette.gray50} p="20px" borderRadius="20px">
          {/* {data.map((item, i) => (
            <Flex key={i}>
              <div>{item.label}</div>
              <div>{item.value}</div>
            </Flex>
          ))} */}
        </Box>
      </Box>
    </Box>
  );
};

export default MoitCompleteScreen;
