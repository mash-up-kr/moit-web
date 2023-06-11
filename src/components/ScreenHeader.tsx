import { FC, ReactNode } from 'react';
import { Flex, Text } from '@chakra-ui/react';
import SvgIcon from './SvgIcon';

interface ScreenHeaderProps {
  title: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

//** TODO(@Young-mason): Emotion Theme 관련 정리된 이후 스타일링 작업 예정*/
const ScreenHeader: FC<ScreenHeaderProps> = ({
  title,
  leftIcon,
  rightIcon,
}) => {
  return (
    <Flex>
      {leftIcon || <SvgIcon name="arrow-left" size={16} />}
      <Text color="gray900">{title}</Text>
      {rightIcon}
    </Flex>
  );
};

export default ScreenHeader;
