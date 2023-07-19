import { Grid, GridItem, Avatar, Box } from '@chakra-ui/react';
import theme from '@styles/theme';
import Text from '@components/Text';

const MVPCard = () => {
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
        {['47px', '71px', '31px'].map((rank, idx) => (
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
                <Avatar />
                <Box
                  mt={'4px'}
                  w={'30px'}
                  h={'10px'}
                  bg={theme.palette.gray400}
                  borderRadius={'10px'}
                />
              </Box>
            </Box>
            <Box
              h={rank}
              bg={theme.palette.gray200}
              borderRadius={'6px'}
              verticalAlign={'bottom'}
              position={'relative'}
              display={'flex'}
              justifyContent={'center'}
            >
              <Text type="h6" position={'absolute'} bottom={0}>
                2
              </Text>
            </Box>
          </GridItem>
        ))}
      </Grid>
    </Box>
  );
};

export default MVPCard;
