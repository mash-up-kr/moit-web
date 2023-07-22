import { Box, Flex, Image } from '@chakra-ui/react';
import pngs from '@styles/pngs';
import theme from '@styles/theme';
import Button from '@components/Button';
import Text from '@components/Text';

const NotFoundScreen = () => (
  <Flex minH={'100vh'} flexDirection={'column'} px={theme.space.md}>
    <Flex
      flexGrow={1}
      direction={'column'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Image src={pngs.ghost} w={'130px'} h={'130px'} />
      <Text type="p2" color={theme.palette.gray600}>
        이런! 페이지를 찾을 수 없어요.
      </Text>
    </Flex>
    <Box mb={'36px'}>
      <Button label="홈으로 돌아가기" />
    </Box>
  </Flex>
);

export default NotFoundScreen;
