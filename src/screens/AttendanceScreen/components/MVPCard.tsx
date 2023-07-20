import { Grid, GridItem, Box } from '@chakra-ui/react';
import pngs from '@styles/pngs';
import theme from '@styles/theme';
import Avatar from '@components/Avatar';
import Text from '@components/Text';
import { AttendantData } from '../../../../types/study';

interface MVPCardProps {
  attendantList: AttendantData[];
}

const MVPCard = ({ attendantList }: MVPCardProps) => {
  const top3List = () => {
    return Array.from({ length: 3 }, (_, index) => attendantList[index] || {});
  };
  const heights = ['71px', '47px', '31px'];
  const transformedTop3List = top3List().map((attendance, index) => ({
    ...attendance,
    rank: index + 1,
    heights: heights[index],
  }));

  const mvpList = transformedTop3List.map((attendance, index) => {
    if (transformedTop3List.length >= 2) {
      if (index === 0) {
        const nextElement = transformedTop3List[index + 1];
        return nextElement ? { ...nextElement } : attendance;
      }
      if (index === 1) {
        const previousElement = transformedTop3List[index - 1];
        return previousElement ? { ...previousElement } : attendance;
      }
    }
    return attendance;
  });

  return (
    <Box
      bg={theme.colors.background.white}
      w={'100%'}
      borderRadius={'20px'}
      p={'30px'}
      mt={'20px'}
      textAlign={'center'}
    >
      <Text type={'h5'}>스터디 출결 MVP</Text>
      <Grid
        templateColumns="repeat(3, 1fr)"
        gap={'8px'}
        flexDirection={'row'}
        mt={'30px'}
      >
        {mvpList.map((target, idx) => (
          <GridItem key={idx} alignSelf={'flex-end'}>
            <Box
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
            >
              <Box
                my={'4px'}
                display={'flex'}
                flexDirection={'column'}
                alignItems={'center'}
              >
                {target.userId ? (
                  <>
                    <Avatar src={pngs.profile[target.profileImage]} />
                    <Text type="caption" color={theme.palette.gray900}>
                      {target.nickname}
                    </Text>
                  </>
                ) : (
                  <>
                    <Avatar />
                    <Box
                      mt={'4px'}
                      w={'30px'}
                      h={'10px'}
                      bg={theme.palette.gray400}
                      borderRadius={'10px'}
                    />
                  </>
                )}
              </Box>
            </Box>
            <Box
              h={target.heights}
              bg={theme.palette.gray200}
              borderRadius={'6px'}
              verticalAlign={'bottom'}
              position={'relative'}
              display={'flex'}
              justifyContent={'center'}
            >
              <Text type="h6" position={'absolute'} bottom={0}>
                {target.rank}
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MVPCard;
