import { Text as ChakraText, Grid, GridItem, Image } from '@chakra-ui/react';
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
      // bg={
      //   'linear-gradient(180deg, #585FF0 31.77%, rgba(88, 95, 240, 0.89) 56.25%, rgba(88, 95, 240, 0.00) 100%)'
      // }
      bg={theme.palette.gray100}
      bgImage={
        'linear-gradient(180deg, #585FF0 31.77%, rgba(88, 95, 240, 0.89) 56.25%, rgba(88, 95, 240, 0.00) 100%)'
      }
    >
      <ScreenHeader rightIcon={<SvgIcon name={'X'} />}></ScreenHeader>
      <Container centerContent pb={'20%'}>
        <Text type="h1" color={theme.colors.text.white}>
          출석 완료!
        </Text>
        <Text
          type="h5"
          bgColor={'var(--white-transparent-07, rgba(255, 255, 255, 0.70))'}
        >
          출석체크가 성공적으로 완료되었어요
        </Text>
        <Text type="h1"> 로띠파일</Text>
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
            <Flex gap={'10px'}>
              <ChakraText
                fontSize={'45px'}
                fontStyle={'normal'}
                fontWeight={600}
                color={theme.palette.gray300}
              >
                0
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
                color={theme.palette.blue800}
              >
                1
              </ChakraText>
            </Flex>
            <Box textAlign={'center'}>
              <Image src={pp} w={'60px'} h={'60px'}></Image>
              <Text type="p3" color={theme.palette.gray400}>
                출석 성공
              </Text>
            </Box>
          </Flex>
        </Box>

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
                    <Box
                      bg={theme.palette.gray300}
                      borderRadius={'30px'}
                      width={'60px'}
                      height={'60px'}
                      border={`1px solid ${theme.palette.gray200}`}
                    >
                      <SvgIcon
                        name={'DefaultAvatar'}
                        width={'58px'}
                        height={'58px'}
                      />
                    </Box>
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

        <Box
          bg={theme.colors.background.white}
          w={'100%'}
          borderRadius={'20px'}
          p={'30px'}
          mt={'20px'}
          textAlign={'center'}
        >
          <Text type={'h5'}>오늘 누가누가 출석했나?</Text>
          <Grid gap={'20px'} mt={'30px'}>
            {['김수한무거북이와두루미', '라마다'].map((name, idx) => (
              <GridItem
                key={idx}
                display={'flex'}
                justifyContent={'space-between'}
              >
                <Flex>
                  <SvgIcon
                    name="DefaultAvatar"
                    w={'40px'}
                    h={'40px'}
                    bg={'red'}
                  />
                  <Box textAlign={'left'} ml={'10px'}>
                    <Text type="h6">{name}</Text>
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
      </Container>
    </Box>
  );
};

export default AttendanceResultScreen;
