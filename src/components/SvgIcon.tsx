import { FC } from 'react';
import { Icon, IconProps } from '@chakra-ui/react';
import { css } from '@emotion/react';
import * as customIcons from '@styles/icons';
import theme, { PalleteValueType } from '@styles/theme';

interface SvgIconProps extends IconProps {
  name: keyof typeof customIcons;
  size?: number;
  rotate?: number;
  color?: PalleteValueType;
}

const getIconCss = (color: PalleteValueType = theme.palette.gray900) => css`
  > * {
    stroke: ${color};
  }
`;

const SvgIcon: FC<SvgIconProps> = ({
  name,
  size = 16,
  rotate = 0,
  color,
  ...restProps
}) => {
  const TargetIcon = customIcons[name];
  return (
    <Icon
      as={TargetIcon}
      boxSize={`${size}px`}
      transform={`rotate(${rotate}deg)`}
      css={color && getIconCss(color)}
      {...restProps}
    />
  );
};

export default SvgIcon;
