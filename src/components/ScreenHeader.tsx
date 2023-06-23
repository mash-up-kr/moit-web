import { FC, ReactNode } from 'react';
import { Center, Flex, AbsoluteCenter } from '@chakra-ui/react';
import theme, { PalleteValueType } from '@styles/theme';
import Text from './Text';

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
        <Text type="h6" color={titleColor}>
          {title}
        </Text>
      </AbsoluteCenter>
      <Center>{rightIcon}</Center>
    </Flex>
  );
};

export default ScreenHeader;
