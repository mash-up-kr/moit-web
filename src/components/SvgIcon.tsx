import { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import * as customIcons from '@styles/icons';

interface SvgIconProps extends IconProps {
  name: keyof typeof customIcons;
  size?: number;
  rotate?: number;
}

const SvgIcon: FC<SvgIconProps> = ({
  name,
  size = 16,
  rotate = 0,
  ...restProps
}) => {
  const TargetIcon = customIcons[name];
  return (
    <Icon
      as={TargetIcon}
      boxSize={size}
      transform={`rotate(${rotate}deg)`}
      {...restProps}
    />
  );
};

export default SvgIcon;
