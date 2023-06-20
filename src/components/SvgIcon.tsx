import { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import * as customIcons from '@styles/icons';

interface SvgIconProps extends IconProps {
  name: keyof typeof customIcons;
  size?: number;
  rotate?: number;
  color?: string; // TODO(@Young-mason) - Theme 기반 타입처리
}

const getIconCss = (color: string) => css`
  > * {
    stroke: ${color};
  }
`;

const SvgIcon: FC<SvgIconProps> = ({
  name,
  size = 16,
  rotate = 0,
  color = '',
  ...restProps
}) => {
  const TargetIcon = customIcons[name];
  return (
    <Icon
      as={TargetIcon}
      boxSize={size}
      transform={`rotate(${rotate}deg)`}
      css={getIconCss(color)}
      {...restProps}
    />
  );
};

export default SvgIcon;
