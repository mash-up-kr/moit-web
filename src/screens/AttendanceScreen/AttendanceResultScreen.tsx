import { Text as ChakraText, Image } from '@chakra-ui/react';
import { Box, Container, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';
import ghost from '../../../assets/png/card-ghost.png';
import pp from '../../../assets/png/card-img.png';

const AttendanceResultScreen = () => {
  console.log('hi');
  return (
    <Box
      bg={
        'linear-gradient(180deg, #585FF0 31.77%, rgba(88, 95, 240, 0.89) 56.25%, rgba(88, 95, 240, 0.00) 100%)    '
      }
    >
      <ScreenHeader rightIcon={<SvgIcon name={'X'} />}></ScreenHeader>
      <Container centerContent>
        <Text type="h1" color={theme.colors.text.white}>
          출석 완료!
        </Text>
        <Text type="h5" color={theme.colors.text.white}>
          출석체크를 위해 키워드를 공유해주세요
        </Text>
        <Box
          bg={theme.palette.gray900}
          w={'100%'}
          borderRadius={'20px'}
          py={'30px'}
        >
          <Text type="h5" color={theme.colors.text.white} textAlign={'center'}>
            {'오늘의 출석 키워드'}
          </Text>
          <Text type="p2" color={theme.palette.gray600} textAlign={'center'}>
            {'출석체크를 위해 키워드를 공유해주세요'}
          </Text>
          <Flex gap={'10px'} justifyContent={'center'} pt={'20px'}>
            {['오', '늘', '홧', '팅'].map((v, i) => (
              <Flex
                key={i}
                w={'70px'}
                height={'74px'}
                flexDirection={'column'}
                justifyContent={'center'}
                alignItems={'center'}
                p={'10px'}
                bg={'rgba(255, 255, 255, 0.10)'}
                borderRadius={'12px'}
              >
                <Text
                  type="h2"
                  color={theme.colors.text.white}
                  textAlign={'center'}
                >
                  {v}
                </Text>
              </Flex>
            ))}
          </Flex>
        </Box>

        <Box
          bg={theme.palette.gray900}
          w={'100%'}
          borderRadius={'20px'}
          p={'30px'}
          mt={'20px'}
        >
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
              <Image src={ghost} w={'60px'} h={'60px'}></Image>
              <Text type="p3" color={theme.palette.gray400}>
                지각 결석
              </Text>
            </Box>
            <ChakraText
              fontSize={'45px'}
              fontStyle={'normal'}
              fontWeight={600}
              color={theme.colors.text.white}
            >
              0:1
            </ChakraText>
            <Box textAlign={'center'}>
              <Image src={pp} w={'60px'} h={'60px'}></Image>
              <Text type="p3" color={theme.palette.gray400}>
                출석 성공
              </Text>
            </Box>{' '}
          </Flex>
        </Box>
      </Container>
    </Box>
  );
};

export default AttendanceResultScreen;
