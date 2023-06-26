import {
  Container,
  Flex,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react';
import theme from '@styles/theme';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';

const AttendanceKeyword = () => {
  console.log('hi');
  return (
    <>
      <Container bgColor={theme.colors.background.black} height={'100vh'}>
        <ScreenHeader
          title={''}
          leftIcon={
            <SvgIcon name="ArrowLeft" size={24} color={theme.palette.white} />
          }
          rightIcon={<SvgIcon name="Info" size={24} color={''} />}
        />
        <Container centerContent>
          <Flex mt={theme.space.md} mb={theme.space.lg}>
            <Text type="p1" color={theme.palette.gray500}>
              제한시간 내
            </Text>
            <Text type="h6" color={theme.colors.text.white}>
              &nbsp;출석키워드
            </Text>
            <Text type="p1" color={theme.palette.gray500}>
              를 입력하세요!
            </Text>
          </Flex>
          <Flex
            w={'303px'}
            mx={'36px'}
            borderRadius={'20px'}
            border={'6px solid var(--gray-800, #333D4B)'}
            p={'4px 14px'}
            justifyContent={'space-between'}
            alignItems={'center'}
            style={{
              background:
                'linear-gradient(0deg, black 0%, black 100%), linear-gradient(360deg, rgba(88, 95, 240, 0.20) 0%, rgba(88, 95, 240, 0) 100%)',
            }}
          >
            <Text type="h6" style={{ color: 'rgba(255, 255, 255, 0.60)' }}>
              출석 인정 시간
            </Text>
            <Text type={'h1'} color={theme.palette.blue500}>
              59:59
            </Text>
          </Flex>
          <HStack>
            <PinInput>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </Container>
      </Container>
    </>
  );
};

export default AttendanceKeyword;
