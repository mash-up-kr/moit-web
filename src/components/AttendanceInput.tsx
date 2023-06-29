import { ReactNode } from 'react';
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';
import theme from '@styles/theme';

interface AttendanceInputProps extends ChakraInputProps {
  value: string;
  bgColor: string;
  displayInput?: ReactNode;
}

const AttendanceInput = ({ value, bgColor }: AttendanceInputProps) => {
  return (
    <ChakraInput
      value={value}
      onChange={() => {}}
      w="100%"
      h="70px"
      bg="blue.500"
      p={theme.space.sm}
      textAlign={'center'}
      color={theme.colors.text.white}
      fontSize={'32px'}
      fontFamily={'body'}
      fontWeight={'700'}
      lineHeight={'32px'}
      backgroundColor={bgColor}
      border="hidden"
      borderRadius={'12px'}
      pointerEvents={'none'}
    />
  );
};

export default AttendanceInput;
