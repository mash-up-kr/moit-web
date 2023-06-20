import React, { CSSProperties, PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme, { FontKeyType, PalleteValueType } from '@styles/theme';

interface TextProps extends React.ComponentProps<'div'> {
  type: FontKeyType;
  display?: CSSProperties['display'];
  textAlign?: CSSProperties['textAlign'];
  color?: PalleteValueType;
}

const Text = ({
  type,
  children,
  display = 'block',
  textAlign = 'left',
  color = theme.colors.text.general,
  ...restProps
}: PropsWithChildren<TextProps>) => {
  return (
    <TextWrapper
      type={type}
      display={display}
      textAlign={textAlign}
      color={color}
      {...restProps}
    >
      {children}
    </TextWrapper>
  );
};

const TextWrapper = styled.div<TextProps>`
  ${(props) => {
    return css`
      ${theme.fonts[props.type]};
      text-align: ${props.textAlign};
      display: ${props.display};
      color: ${props.color};
    `;
  }}
`;

export default Text;
