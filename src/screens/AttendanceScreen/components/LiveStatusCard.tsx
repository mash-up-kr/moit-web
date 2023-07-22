import { Text as ChakraText, Image } from '@chakra-ui/react';
import { Box, Flex } from '@chakra-ui/react';
import pngs from '@styles/pngs';
import theme from '@styles/theme';
import Text from '@components/Text';

interface LiveStatusCardProps {
  attendantList: AttendantData[];
  currentUser: AttendantData;
}

const LiveStatusCard = ({
  attendantList,
  currentUser,
}: LiveStatusCardProps) => {
  const isSuccess = currentUser?.status === 'ATTENDANCE';
  const totalCount = attendantList.length;
  const successCount = attendantList.filter(
    (attendance) => attendance.status === 'ATTENDANCE',
  ).length;
  const failCount = totalCount - successCount;

  return (
    <Box bg={theme.palette.gray900} w={'100%'} borderRadius={'20px'} p={'30px'}>
      <Text type="h5" color={theme.colors.text.white} textAlign={'center'}>
        {'실시간 스터디 출결현황!'}
      </Text>

      <Flex
        gap={'10px'}
        justifyContent={'space-between'}
        pt={'20px'}
        w={'100%'}
      >
        <Box textAlign={'center'}>
          <Image src={pngs.ghost} w={'60px'} h={'60px'} />
          <Text type="p3" color={theme.palette.gray400}>
            지각 결석
          </Text>
        </Box>
        <Flex gap={'10px'}>
          <ChakraText
            fontSize={'45px'}
            fontStyle={'normal'}
            fontWeight={600}
            color={isSuccess ? theme.palette.gray300 : '#FF8A00'}
          >
            {failCount}
          </ChakraText>
          <ChakraText
            fontSize={'45px'}
            fontStyle={'normal'}
            fontWeight={600}
            color={theme.palette.gray600}
          >
            :
          </ChakraText>
          <ChakraText
            fontSize={'45px'}
            fontStyle={'normal'}
            fontWeight={600}
            color={isSuccess ? theme.palette.blue800 : theme.palette.gray300}
          >
            {successCount}
          </ChakraText>
        </Flex>
        <Box textAlign={'center'}>
          <Image src={pngs.character} w={'60px'} h={'60px'} />
          <Text type="p3" color={theme.palette.gray400}>
            출석 성공
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default LiveStatusCard;
