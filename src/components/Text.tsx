import { PropsWithChildren } from 'react';
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';
import theme, { FontKeyType, PalleteValueType, fonts } from '@styles/theme';

interface TextProps extends ChakraTextProps {
  type: FontKeyType;
  color?: PalleteValueType;
  opacity?: string;
}

const Text = ({
  type,
  children,
  display = 'block',
  color = theme.colors.text.general,
  opacity = '1',
  ...restProps
}: PropsWithChildren<TextProps>) => {
  return (
    <ChakraText
      display={display}
      color={color}
      css={fonts[type]}
      opacity={opacity}
      {...restProps}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
