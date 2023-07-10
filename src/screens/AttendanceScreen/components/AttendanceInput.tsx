import { Box, Input as ChakraInput, Grid } from '@chakra-ui/react';
import theme from '@styles/theme';
import TransparentInput from './TransparentInput';

interface AttendanceInputProps {
  answer: string;
  answerList: string[];
  setAnswer: Util.SetStateType<string>;
}

const AttendanceInput = ({
  answer,
  answerList,
  setAnswer,
}: AttendanceInputProps) => {
  const handleBgColor = (answerLength: number, index: number) => {
    if (index === 0) return '#FFFFFF1A';
    return answerLength > index ? '#FFFFFF1A' : '#FFFFFF33';
  };

  return (
    <Box>
      <TransparentInput setAnswer={setAnswer} />
      <Grid
        w={'303px'}
        templateColumns={'repeat(4, 1fr)'}
        gap={'8px'}
        mt={'25px'}
        position={'relative'}
      >
        {answerList.map((ans, idx) => (
          <ChakraInput
            key={idx}
            value={ans}
            bg={handleBgColor(answer.length, idx)}
            w={'100%'}
            h={'70px'}
            p={theme.space.sm}
            textAlign={'center'}
            color={theme.colors.text.white}
            fontSize={'32px'}
            fontFamily={'body'}
            fontWeight={'700'}
            lineHeight={'32px'}
            border={'hidden'}
            borderRadius={'12px'}
            pointerEvents={'none'}
            onChange={() => {}}
          />
        ))}
      </Grid>
    </Box>
  );
};

export default AttendanceInput;
