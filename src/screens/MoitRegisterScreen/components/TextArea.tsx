import { css } from '@emotion/react';
import styled from '@emotion/styled';
import theme from '@styles/theme';

const TextArea = styled.textarea`
  background-color: ${theme.palette.gray50};
  border: 1px solid ${theme.palette.gray200};
  border-radius: 12px;
  padding: 15px 22px;
  resize: none;
  color: ${theme.palette.gray900};
  ${css(theme.fonts.p1)};

  :focus {
    outline: 0;
  }

  ::placeholder {
    color: ${theme.palette.gray500};
    ${css(theme.fonts.p1)};
  }
`;

export default TextArea;
