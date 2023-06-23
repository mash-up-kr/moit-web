import { FC, ReactNode } from 'react';
import { Center, Flex, Text, AbsoluteCenter } from '@chakra-ui/react';
import theme, { PalleteValueType } from '@styles/theme';

interface ScreenHeaderProps {
  title?: string;
  titleColor?: PalleteValueType;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const ScreenHeader: FC<ScreenHeaderProps> = ({
  title = '',
  titleColor = theme.colors.text.general,
  leftIcon,
  rightIcon,
}) => {
  return (
    <Flex
      align="center"
      justify="space-between"
      position="relative"
      height={56}
    >
      <Center>{leftIcon}</Center>
      <AbsoluteCenter>
        <Text color={titleColor} css={theme.fonts.h6}>
          {title}
        </Text>
      </AbsoluteCenter>
      <Center>{rightIcon}</Center>
    </Flex>
  );
};

export default ScreenHeader;
