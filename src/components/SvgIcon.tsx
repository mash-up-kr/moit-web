import { FC } from 'react';
import { Icon } from '@chakra-ui/react';
import { customIcons } from '@styles/icons';

interface SvgIconProps {
  name: keyof typeof customIcons;
  size?: number;
}

const SvgIcon: FC<SvgIconProps> = ({ name, size = 16 }) => {
  const TargetIcon = customIcons[name];
  return <Icon as={TargetIcon} boxSize={size} />;
};

export default SvgIcon;
