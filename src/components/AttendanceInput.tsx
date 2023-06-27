import { Input } from '@chakra-ui/react';
import theme from '@styles/theme';

const AttendanceInput = () => {
  console.log('hit');
  return (
    <Input
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
      backgroundColor={'#FFFFFF33'}
      border="hidden"
      borderRadius={'12px'}
    />
  );
};

export default AttendanceInput;
