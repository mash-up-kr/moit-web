import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box, Button, Container, Flex, Grid, Input } from '@chakra-ui/react';
import theme from '@styles/theme';
import AttendanceInput from '@components/AttendanceInput';
import ScreenHeader from '@components/ScreenHeader';
import SvgIcon from '@components/SvgIcon';
import Text from '@components/Text';

const AttendanceKeyword = () => {
  const [searchParams] = useSearchParams();
  const status = searchParams.get('status') as 'present' | 'tardy' | null;
  const isTardy = status === 'tardy';

  const [answer, setAnswer] = useState('');
  const [answerList, setAnswerList] = useState(['', '', '', '']);

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    const currentRef = inputRef.current;

    const handleTouchStart = (event: TouchEvent) => {
      event.preventDefault();
      handleClick();
    };

    if (currentRef) {
      currentRef.addEventListener('touchstart', handleTouchStart, {
        passive: false,
      });
    }

    return () => {
      if (currentRef) {
        currentRef.removeEventListener('touchstart', handleTouchStart);
      }
    };
  }, []);

  useEffect(() => {
    setAnswerList([
      answer.substring(0, 1),
      answer.substring(1, 2),
      answer.substring(2, 3),
      answer.substring(3, 4),
    ]);
  }, [answer]);

  const handleAnswer = (value: string) => {
    if (value !== '') {
      setAnswer(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == 'Backspace') {
      setAnswer('');
    }
  };

  const handleBgColor = (index: number) => {
    if (index === 0) return '#FFFFFF1A';
    return answer.length > index ? '#FFFFFF1A' : '#FFFFFF33';
  };

  const disabled = answer.length < 4;

  return (
    <>
      <Box bgColor={theme.colors.background.black}>
        <Container>
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
              bg={
                isTardy
                  ? 'linear-gradient(0deg, rgba(255, 138, 0, 0.20) 0%, rgba(255, 138, 0, 0.00) 100%), #000'
                  : 'linear-gradient(0deg, rgba(88, 95, 240, 0.20) 0%, rgba(88, 95, 240, 0.00) 100%), #000'
              }
            >
              <Text type="h6" color={theme.palette.gray100} opacity="0.6">
                {isTardy ? '지각' : '출석'} 인정 시간
              </Text>
              <Text
                type={'h1'}
                color={
                  isTardy ? theme.palette.orange200 : theme.palette.blue500
                }
              >
                59:59
              </Text>
            </Flex>
            <Box>
              <Input
                position={'absolute'}
                onChange={(e) => handleAnswer(e.target.value)}
                w={'303px'}
                bg={'transparent'}
                border={'none'}
                fontSize={'32px'}
                fontWeight={'700'}
                letterSpacing={'51px'}
                h={'70px'}
                p={'0px 19px'}
                outline={'none'}
                focusBorderColor="none"
                textDecorationLine={'none'}
                textDecor={'none'}
                cursor={'none'}
                textDecoration={'none'}
                color={'rgba(0, 0, 0, 0)'}
                style={{ caretColor: 'transparent' }}
                mt={'25px'}
                zIndex={'30'}
                maxLength={4}
                onKeyDown={handleKeyDown}
                ref={inputRef}
                autoFocus
                onClick={handleClick}
              ></Input>
              <Grid
                w={'303px'}
                templateColumns="repeat(4, 1fr)"
                gap={'8px'}
                mt={'25px'}
                position={'relative'}
              >
                {answerList.map((ans, idx) => (
                  <AttendanceInput
                    key={idx}
                    value={ans}
                    bgColor={handleBgColor(idx)}
                  />
                ))}
              </Grid>
            </Box>
            <Text
              type="p3"
              color={theme.palette.gray100}
              opacity="0.5"
              mt={'60px'}
            >
              첫번째 출석자예요! 키워드를 만들어주세요!
            </Text>
          </Container>
        </Container>
        <Button
          w={'100%'}
          h={'56px'}
          fontSize={'16px'}
          fontWeight={'600'}
          lineHeight={'23px'}
          mt={theme.space.md}
          color={disabled ? theme.palette.gray700 : theme.colors.text.white}
          backgroundColor={
            disabled ? theme.palette.gray200 : theme.colors.primary.default
          }
          borderRadius={'0'}
        >
          완료
        </Button>
      </Box>
    </>
  );
};

export default AttendanceKeyword;
