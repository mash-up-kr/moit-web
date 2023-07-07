import { Box, Container, Flex, Grid, Image } from '@chakra-ui/react';
import { palette } from '@styles/theme';
import theme from '@styles/theme';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
import ghost from '../../../assets/png/card-ghost.png';
import moitChar from '../../../assets/png/card-img.png';

const AttendanceResult = () => {
  const keyword = ['오', '늘', '홧', '팅'];

  return (
    <Container bg={theme.colors.primary.default}>
      <ScreenHeader
        rightIcon={<SvgIcon name="X" color={palette.white} size={24} />}
      />
      <Flex direction={'column'} alignItems={'center'}>
        <Text type="h1" color={theme.colors.text.white}>
          출석 완료!
        </Text>
        <Text type="h5" color={theme.colors.text.white}>
          출석체크가 성공적으로 완료되었어요
        </Text>

        <Flex
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          bg={palette.gray900}
          py={theme.space.lg}
          borderRadius={'20px '}
          w={'100%'}
        >
          <Text type="h5" color={theme.colors.text.white}>
            오늘의 출석 키워드
          </Text>
          <Text type="p2" color={palette.gray600}>
            출석체크를 위해 키워드를 공유해주세요
          </Text>
          <Grid
            w={'303px'}
            templateColumns={'repeat(4, 1fr)'}
            gap={'8px'}
            mt={'25px'}
            position={'relative'}
          >
            {keyword.map((text, idx) => (
              <Box
                key={idx}
                bg={'#FFFFFF1A'}
                w={'100%'}
                h={'70px'}
                p={theme.space.sm}
                textAlign={'center'}
                color={theme.colors.text.white}
                fontSize={'32px'}
                fontFamily={'body'}
                fontWeight={'700'}
                borderRadius={'12px'}
              >
                {text}
              </Box>
            ))}
          </Grid>
        </Flex>

        <Flex
          direction={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          bg={palette.gray900}
          py={theme.space.lg}
          borderRadius={'20px '}
          w={'100%'}
        >
          <Text type="h5" color={theme.colors.text.white}>
            실시간 스터디 출결 현황!
          </Text>
          <Flex>
            <Image src={ghost} alt={'ghost'} w={'60px'} />
            <Text type="h1" color={palette.gray300}>
              0
            </Text>
            <Text type="h1" color={palette.gray600}>
              :
            </Text>
            <Text type="h1" color={palette.blue800}>
              1
            </Text>
            <Image src={moitChar} alt={'ghost'} w={'60px'} />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default AttendanceResult;
