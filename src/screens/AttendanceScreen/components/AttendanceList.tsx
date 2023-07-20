import { Grid, GridItem, Flex, Box } from '@chakra-ui/react';
import pngs from '@styles/pngs';
import theme from '@styles/theme';
import Avatar from '@components/Avatar';
import Text from '@components/Text';
import { AttendantData } from '../../../../types/study';

interface AttendanceListProps {
  attendantList: AttendantData[];
}

const AttendanceList = ({ attendantList }: AttendanceListProps) => {
  const attendanceList = attendantList.filter(
    (attendance) => attendance.status === 'ATTENDANCE',
  );
  const isEmpty = attendanceList.length === 0;

  return (
    <Box
      bg={theme.colors.background.white}
      w={'100%'}
      borderRadius={'20px'}
      py={'30px'}
      px={'16px'}
      mt={'20px'}
      textAlign={'center'}
    >
      <Text type={'h5'}>오늘 누가누가 출석했나?</Text>
      <Grid gap={'20px'} mt={'30px'}>
        {isEmpty && (
          <Text type="p3" color={theme.palette.gray600}>
            아직 출석한 사람이 없어요!
          </Text>
        )}
        {attendanceList.map((user, idx) => (
          <GridItem key={idx} display={'flex'} justifyContent={'space-between'}>
            <Flex>
              <Avatar type="sm" src={pngs.profile[0]} />
              <Box textAlign={'left'} ml={'10px'}>
                <Text type="h6">{user.nickname}</Text>
                <Text type="caption" color={theme.palette.gray600}>
                  17:02
                </Text>
              </Box>
            </Flex>
            <Box>
              <Text
                type="p3"
                color={theme.colors.text.white}
                bg={theme.colors.primary.default}
                px={'12px'}
                py={'4px'}
                borderRadius={'20px'}
              >
                출석
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default AttendanceList;
