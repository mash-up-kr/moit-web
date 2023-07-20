import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const Input = styled.input<{
  readOnly?: boolean;
  width?: number;
  variant?: 's' | 'l';
}>`
  background-color: ${theme.palette.gray50};
  border: 1px solid ${theme.palette.gray200};
  border-radius: 12px;
  padding: 15px 22px;
  color: ${theme.palette.gray900};
  width: ${(p) => (p.width ? `${p.width}px` : '')};
  ${(p) => (p.variant === 's' ? css(theme.fonts.p2) : css(theme.fonts.p1))};

  :focus {
    outline: 0;
  }

  ::placeholder {
    color: ${theme.palette.gray500};
  }

  ${(p) =>
    p.readOnly &&
    css`
      text-align: center;
    `}
`;

export default Input;
