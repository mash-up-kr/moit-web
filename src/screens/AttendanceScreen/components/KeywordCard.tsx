import { Box, Flex } from '@chakra-ui/react';
import theme from '@styles/theme';
import Text from '@components/Text';

interface KeywordCardProps {
  keywordList: string[];
}

const KeywordCard = ({ keywordList }: KeywordCardProps) => (
  <Box
    bg={theme.palette.gray900}
    w={'100%'}
    borderRadius={'20px'}
    py={'30px'}
    mb={'20px'}
  >
    <Text type="h5" color={theme.colors.text.white} textAlign={'center'}>
      {'오늘의 출석 키워드'}
    </Text>
    <Text type="p2" color={theme.palette.gray600} textAlign={'center'}>
      {'출석체크를 위해 키워드를 공유해주세요'}
    </Text>
    <Flex gap={'10px'} justifyContent={'center'} pt={'20px'}>
      {keywordList.map((v, i) => (
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
          <Text type="h2" color={theme.colors.text.white} textAlign={'center'}>
            {v}
          </Text>
        </Flex>
      ))}
    </Flex>
  </Box>
);

export default KeywordCard;
