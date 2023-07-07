import { PropsWithChildren } from 'react';
import {
  Text as ChakraText,
  TextProps as ChakraTextProps,
} from '@chakra-ui/react';
import theme, { FontKeyType, PalleteValueType, fonts } from '@styles/theme';

interface TextProps extends Omit<ChakraTextProps, 'color'> {
  type: FontKeyType;
  color?: PalleteValueType;
}

const Text = ({
  type,
  children,
  display = 'block',
  color = theme.colors.text.general,
  ...restProps
}: PropsWithChildren<TextProps>) => {
  return (
    <ChakraText
      display={display}
      color={color}
      css={fonts[type]}
      {...restProps}
    >
      {children}
    </ChakraText>
  );
};

export default Text;
